// Simple badge gallery data + render
const badges = [
  {img: 'https://img.shields.io/badge/Node--RED%20Con%202025-blue?logo=linuxfoundation&style=for-the-badge', alt:'Node-RED Con 2025', link:'https://nodered.org'},
  {img: 'https://img.shields.io/badge/Node--RED%20Associate-orange?style=for-the-badge', alt:'Node-RED Associate', link:'https://www.credly.com/users/paulmoore'},
  {img: 'https://img.shields.io/badge/Node--RED%20Advanced-red?style=for-the-badge', alt:'Node-RED Advanced', link:'https://www.credly.com/users/paulmoore'},
  {img: 'https://img.shields.io/badge/CompTIA%20Network%2B-blue?logo=comptia&style=for-the-badge', alt:'CompTIA Network+', link:'https://www.comptia.org/certifications/network'},
  {img: 'https://img.shields.io/badge/Databricks-FE6100?style=for-the-badge', alt:'Databricks', link:'https://www.databricks.com'},
  {img: 'https://img.shields.io/badge/NetAcad-Badges-blue?style=for-the-badge', alt:'NetAcad', link:'https://www.netacad.com/profile?&tab=badges'}
]

const wall = document.getElementById('badge-wall')
if (wall){
  badges.forEach(b=>{
    const a = document.createElement('a')
    a.href = b.link
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.className = 'badge-mini'
    const img = document.createElement('img')
    img.src = b.img
    img.alt = b.alt
    img.loading = 'lazy'
    a.appendChild(img)
    wall.appendChild(a)
  })
}