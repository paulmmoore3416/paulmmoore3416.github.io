#!/usr/bin/env bash
set -euo pipefail

INPUT="resume.md"
OUTPUT="resume.pdf"

if command -v docker >/dev/null 2>&1; then
  echo "Generating PDF using pandoc/latex docker image..."
  docker run --rm -v "$PWD":/data pandoc/latex:2.21 pandoc "$INPUT" -o "$OUTPUT" --pdf-engine=xelatex -V geometry:margin=1in
else
  if ! command -v pandoc >/dev/null 2>&1; then
    echo "Error: pandoc is not installed. Install pandoc + LaTeX or install Docker to generate the PDF." >&2
    exit 1
  fi
  echo "Generating PDF using local pandoc..."
  pandoc "$INPUT" -o "$OUTPUT" --pdf-engine=xelatex -V geometry:margin=1in
fi

echo "Generated $OUTPUT"
