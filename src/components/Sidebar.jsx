import React from 'react'

const navSections = [
  {
    title: 'Beranda',
    icon: '🏠',
    items: [
      { label: 'Home', id: 'home', icon: '📌' },
    ]
  },
  {
    title: 'Mikrotik',
    icon: '🔧',
    items: [
      { label: 'Pengenalan', id: 'mikrotik', icon: '📖' },
      { label: 'Konfigurasi Dasar', id: 'mikrotik-konfigurasi-dasar', icon: '⚙️' },
      { label: 'Firewall & NAT', id: 'mikrotik-firewall-nat', icon: '🛡️' },
      { label: 'Routing', id: 'mikrotik-routing', icon: '🌐' },
      { label: 'Wireless', id: 'mikrotik-wireless', icon: '📡' },
      { label: 'Bandwidth Management', id: 'mikrotik-bandwidth-management', icon: '📊' },
      { label: 'VPN', id: 'mikrotik-vpn', icon: '🔒' },
      { label: 'Troubleshooting', id: 'mikrotik-troubleshooting', icon: '🔍' },
    ]
  },
  {
    title: 'Fiber Optic',
    icon: '💡',
    items: [
      { label: 'Pengenalan', id: 'fiber-optic', icon: '📖' },
      { label: 'Jenis Kabel', id: 'fiber-jenis-kabel', icon: '🔌' },
      { label: 'Komponen Jaringan', id: 'fiber-komponen', icon: '🧩' },
      { label: 'Instalasi', id: 'fiber-instalasi', icon: '🔧' },
      { label: 'Splicing & Connector', id: 'fiber-splicing', icon: '🔗' },
      { label: 'Pengukuran & Testing', id: 'fiber-pengukuran', icon: '📏' },
      { label: 'Perawatan', id: 'fiber-perawatan', icon: '🧹' },
    ]
  },
  {
    title: 'FTTH',
    icon: '🏡',
    items: [
      { label: 'Pengenalan', id: 'ftth', icon: '📖' },
      { label: 'Arsitektur Jaringan', id: 'ftth-arsitektur', icon: '🏗️' },
      { label: 'OLT & ONT', id: 'ftth-perangkat', icon: '📦' },
      { label: 'Splitter & ODP', id: 'ftth-splitter-odp', icon: '🔀' },
      { label: 'Desain Jaringan', id: 'ftth-desain', icon: '📐' },
      { label: 'Instalasi ONT', id: 'ftth-instalasi-ont', icon: '🔨' },
      { label: 'Troubleshooting', id: 'ftth-troubleshooting', icon: '🔍' },
    ]
  }
]

function Sidebar() {
  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-header">
        <h1>TechDocs</h1>
        <p>Mikrotik • Fiber Optic • FTTH</p>
      </div>
      <nav className="sidebar-nav">
        {navSections.map((section, idx) => (
          <div className="nav-section" key={idx}>
            <div className="nav-section-title">
              <span className="nav-section-icon">{section.icon}</span>
              {section.title}
            </div>
            {section.items.map((item, itemIdx) => (
              <a
                key={itemIdx}
                className="nav-item"
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
              >
                <span className="nav-item-icon">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar