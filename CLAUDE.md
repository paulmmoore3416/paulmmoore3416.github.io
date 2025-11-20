# CLAUDE.md - AI Assistant Guide

## Repository Overview

This repository (`paulmmoore3416.github.io`) is a **GitHub Pages personal portfolio and resume website** for Paul Moore, an IT professional specializing in Network Engineering, Cloud Platforms, and DevOps Automation.

### Purpose
- Showcase professional experience, certifications, skills, and projects
- Serve as a landing page for professional networking and job opportunities
- Demonstrate technical expertise through project descriptions and skill badges

### Technology Stack
- **Platform**: GitHub Pages (static site hosting)
- **Content Format**: Markdown (.md files)
- **Rendering**: Jekyll (default GitHub Pages processor)
- **No custom build process**: Direct markdown-to-HTML conversion by GitHub

---

## Repository Structure

```
paulmmoore3416.github.io/
├── .git/                    # Git version control
├── README.md                # Main portfolio page (primary content)
├── resume.md                # Traditional resume format with contact info
└── CLAUDE.md                # This file - AI assistant guide
```

### Key Files

#### README.md (Primary Portfolio)
**Location**: `/home/user/paulmmoore3416.github.io/README.md`

**Purpose**: Main landing page for the GitHub Pages site

**Content Structure**:
1. **Personal Introduction** - Professional summary and value proposition
2. **About Me Section** - Certification badges and professional focus areas
3. **Tech Stack** - Organized by categories:
   - Languages & Scripting (Python, Bash, YAML, HTML/CSS, JavaScript, C++)
   - Infrastructure & DevOps (Ansible, Docker, GitHub Actions, Terraform, etc.)
   - Networking (Cisco IOS, Wireshark, Nmap, etc.)
   - Cloud & Platforms (Azure, AWS, Google Cloud, Ubuntu, Raspberry Pi)
4. **Featured Projects** - Highlighted repositories with descriptions and skill metrics
5. **Certifications** - Comprehensive tables organized chronologically and by provider
6. **Professional Experience** - Work history with responsibilities and skills
7. **Contact Section** - LinkedIn and email links

**Format Conventions**:
- Uses shields.io badges extensively for visual appeal
- HTML embedded in markdown for advanced formatting (flexbox, tables)
- GitHub-flavored Markdown
- Emoji icons for visual hierarchy (🚀, 🛠️, ☁️, etc.)

#### resume.md (Traditional Resume)
**Location**: `/home/user/paulmmoore3416.github.io/resume.md`

**Purpose**: More formal resume format with direct contact information

**Content Structure**:
1. Contact header with email, phone, location
2. Skills section organized by technical categories
3. Certifications list
4. Education (California Institute of Applied Technology, Centriq Training, Colorado Technical University)
5. Professional Experience in chronological order

**Key Difference from README**: More concise, traditional resume format vs. portfolio showcase

---

## Development Workflow

### Making Changes

1. **Edit Markdown Files**
   - Modify README.md or resume.md using any text editor
   - Preview changes locally if desired (optional)
   - No build process required

2. **Commit Changes**
   ```bash
   git add README.md  # or resume.md
   git commit -m "Description of changes"
   ```

3. **Push to GitHub**
   ```bash
   git push origin main
   ```

4. **GitHub Pages Automatically Deploys**
   - GitHub detects the push
   - Jekyll builds the site (automatic)
   - Changes go live within 1-2 minutes
   - Site accessible at: https://paulmmoore3416.github.io

### Branch Strategy

- **Main Branch**: `main` (production branch)
- **Feature Branches**: Use `claude/` prefix for AI assistant work
  - Format: `claude/claude-md-<session-id>`
  - Example: `claude/claude-md-mi6ue9hd11qxfrm3-01NSJCFTP1tEnsxijH3gRKdt`
  - Always create pull requests to merge into `main`

### Git Best Practices

1. **Descriptive Commits**: Use clear, concise commit messages
   - Good: "Update Azure certifications section"
   - Bad: "Update README"

2. **Atomic Commits**: One logical change per commit
   - Separate updates to different sections
   - Don't mix content changes with formatting changes

3. **Review Before Pushing**: Always review changes
   ```bash
   git status
   git diff
   ```

---

## Content Guidelines and Conventions

### Badge Usage

**Shields.io Format**:
```markdown
![Badge Text](https://img.shields.io/badge/Label-Message-Color?style=flat&logo=logoname&logoColor=white)
```

**Badge Styles Used**:
- `style=flat` - Most badges
- `style=for-the-badge` - Tech stack badges

**Common Badge Colors**:
- Blue: `blue`, `0078D4` (Azure), `1BA0D7` (Cisco)
- Red: `red`, `E00` (Red Hat), `EE0000` (Ansible)
- Orange: `orange`, `F80000` (Oracle), `fe6100` (Databricks)
- Green: `brightgreen`, `34A853` (Google Cloud)
- Purple: `purple`, `623CE4` (Terraform)

### Markdown Conventions

1. **Headers**
   - Use `#` for main sections
   - Use `##` for subsections
   - Use `###` for project/certification titles
   - Horizontal rules (`---`) separate major sections

2. **Links**
   - Format: `[Text](URL)`
   - GitHub repos: Full GitHub URLs
   - External links: Include https://

3. **Lists**
   - Unordered: Use `-` for consistency
   - Ordered: Use numbered lists only where sequence matters
   - Nested lists: Indent with 2 spaces

4. **Emoji Usage**
   - Used sparingly for visual hierarchy
   - Consistent mapping:
     - 🚀 About/Introduction
     - 🛠️ Skills/Tools
     - ☁️ Cloud projects
     - 🔧 Infrastructure projects
     - 🕵️ Security/Network projects
     - 📜 Certifications
     - 💼 Professional Experience
     - 📬 Contact

5. **HTML Embedding**
   - Used for advanced layouts (flexbox containers, tables)
   - Keep HTML minimal and semantic
   - Use for certification tables to maintain structure

### Certification Documentation Standards

**Table Format**:
```markdown
<table>
  <tr>
    <td><img src="badge_url" alt="Badge Description"/></td>
    <td>
      <strong>Certification Name</strong><br>
      <em>Issued By:</em> Provider<br>
      <em>Issued:</em> Month Year  |  <em>Expires:</em> Month Year<br>
      <em>Credential ID:</em> ID_NUMBER<br>
      <em>Skills:</em> Skill1, Skill2
    </td>
  </tr>
</table>
```

**Organization**:
- Group by recency (Recent Certifications first)
- Then by provider or category
- Include all relevant metadata (issue date, expiration, credential ID)

### Project Documentation Standards

**Required Elements**:
1. **Project Title** with emoji icon
2. **Description** (1-2 sentences)
3. **GitHub Link** with format: `🔗 [GitHub Repo](URL)`
4. **Tools/Skills** with format: `🛠️ Tools: Tool1, Tool2, Tool3`
5. **Key Features/Highlights** (optional but recommended)
6. **Skills Metric** (optional, star rating for key skills)

**Example**:
```markdown
### 🔧 Ansible Ubuntu Server Automation
Automates initial setup of Ubuntu 22.04 server: updates, installs, user setup, auto-reboot.
🔗 [GitHub Repo](https://github.com/paulmmoore3416/ansible-initial-server-setup)
🛠️ Tools: Ansible, YAML, Ubuntu 22.04, Cloud-init
📄 Includes: Playbook, README, screenshots, and GitHub-hosting guide
```

---

## AI Assistant Guidelines

### When Working with This Repository

1. **Understand the Context**
   - This is a personal portfolio/resume site
   - Changes directly affect professional presentation
   - Accuracy and professionalism are critical

2. **Content Updates**
   - **Adding Certifications**: Follow the table format, include all metadata
   - **Adding Projects**: Use the project documentation standards
   - **Updating Experience**: Match the existing tone and format
   - **Adding Skills**: Place in appropriate category, add corresponding badge

3. **Formatting Requirements**
   - Preserve existing structure and organization
   - Match the visual style (badges, emoji, spacing)
   - Test badge URLs before committing
   - Maintain consistent line spacing between sections

4. **Quality Checks Before Committing**
   - Verify all URLs are accessible
   - Check badge rendering (shields.io URLs)
   - Ensure proper markdown syntax
   - Validate dates and credential IDs
   - Spell check technical terms and company names

5. **Common Tasks**

   **Task: Add a New Certification**
   ```markdown
   1. Determine the appropriate section (by date or provider)
   2. Create badge URL using shields.io format
   3. Add table row with all metadata
   4. Verify credential ID and expiration date
   5. Commit with message: "Add [Certification Name] certification"
   ```

   **Task: Update Professional Experience**
   ```markdown
   1. Add new entry at top of experience section
   2. Use format: ## **Title** \n **Company** \n *Dates*
   3. Include 3-5 bullet points of responsibilities
   4. Add Skills Used section at bottom
   5. Commit with message: "Add [Company] experience"
   ```

   **Task: Add a New Project**
   ```markdown
   1. Add to Featured Projects section
   2. Include: emoji, title, description, repo link, tools, features
   3. Optional: Add skills metric with star ratings
   4. Commit with message: "Add [Project Name] to featured projects"
   ```

6. **What NOT to Do**
   - Don't add fictional projects or certifications
   - Don't change dates or credential IDs without verification
   - Don't remove existing content without explicit permission
   - Don't introduce new formatting styles that break consistency
   - Don't use emojis excessively or inconsistently
   - Don't add build tools, package.json, or other unnecessary files

7. **Tone and Voice**
   - Professional but approachable
   - Technical accuracy is paramount
   - Action-oriented language (use strong verbs)
   - Concise descriptions (avoid flowery language)
   - Focus on achievements and outcomes

---

## Technical Details

### GitHub Pages Configuration

- **Repository Name**: `paulmmoore3416.github.io`
- **Branch for Publishing**: `main`
- **Jekyll Theme**: Default (none specified, GitHub uses default)
- **URL**: https://paulmmoore3416.github.io
- **Custom Domain**: None currently configured
- **Build Process**: Automatic on push to `main`

### File Encoding and Line Endings
- **Encoding**: UTF-8
- **Line Endings**: LF (Unix-style)
- **No trailing whitespace**: Clean markdown formatting

### Supported Markdown Features
- GitHub-Flavored Markdown (GFM)
- HTML embedding (for tables and advanced layouts)
- Shields.io badges
- Emoji (Unicode and shortcodes)
- Relative and absolute links
- Image embedding

---

## Maintenance and Updates

### Regular Updates Needed

1. **Certifications** (Monthly)
   - Add new certifications as earned
   - Update expiration dates
   - Archive expired certifications

2. **Professional Experience** (As Needed)
   - Update current role responsibilities
   - Add new positions
   - Refine bullet points

3. **Projects** (Quarterly)
   - Add new projects
   - Update project descriptions
   - Refresh skills metrics

4. **Skills & Tech Stack** (Quarterly)
   - Add new technologies learned
   - Update proficiency levels
   - Add new badges for tools

### Changelog Best Practices

- Keep commit history clean and meaningful
- Use conventional commit format when possible:
  - `feat:` New feature/content
  - `fix:` Corrections
  - `docs:` Documentation updates
  - `style:` Formatting changes
  - `refactor:` Reorganization without content changes

---

## Troubleshooting

### Common Issues

**Badge Not Rendering**
- Check URL encoding (spaces = `%20`)
- Verify logo name matches shields.io supported logos
- Test badge URL directly in browser

**Content Not Updating on Site**
- Wait 1-2 minutes for GitHub Pages build
- Check GitHub Actions tab for build errors
- Clear browser cache
- Verify push went to correct branch

**Markdown Formatting Broken**
- Check for unclosed HTML tags
- Verify proper heading hierarchy
- Ensure proper escaping of special characters
- Test markdown in a previewer

**Links Not Working**
- Verify full URL including https://
- Check for typos in repository names
- Ensure proper markdown link syntax: `[text](url)`

---

## Quick Reference

### Common Commands

```bash
# View current status
git status

# View recent commits
git log --oneline -5

# Create feature branch
git checkout -b claude/description-session-id

# Stage changes
git add README.md

# Commit changes
git commit -m "Descriptive message"

# Push to remote
git push origin branch-name

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main
```

### Badge Template Reference

```markdown
# Flat style badge
![Name](https://img.shields.io/badge/Label-Message-Color?style=flat&logo=logoname&logoColor=white)

# For-the-badge style
![Name](https://img.shields.io/badge/Label-Message-Color?style=for-the-badge&logo=logoname&logoColor=white)

# Badge with custom hex color
![Name](https://img.shields.io/badge/Label-Message-0078D4?style=flat&logo=logoname&logoColor=white)
```

### Section Template Reference

```markdown
## 🛠️ Section Title

### Subsection

**Bold Label**: Content here
🔗 [Link Text](URL)
🛠️ Tools: Tool1, Tool2, Tool3

---
```

---

## Contact and Collaboration

For questions about this repository or suggestions for improvements:

- **Repository Owner**: Paul Moore
- **GitHub**: [@paulmmoore3416](https://github.com/paulmmoore3416)
- **LinkedIn**: [paulmoore3416](https://www.linkedin.com/in/paulmoore3416)
- **Email**: Paulmmoore3416@gmail.com

---

## Version History

- **2025-11-20**: Initial CLAUDE.md created - Comprehensive documentation for AI assistants
- Future updates will be tracked here

---

*This document is maintained to help AI assistants effectively work with this repository while maintaining quality, consistency, and professionalism.*
