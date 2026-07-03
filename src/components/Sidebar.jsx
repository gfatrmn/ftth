import React, { useState, useEffect } from 'react'

const navSections = [
  {
    title: 'Beranda',
    items: [
      { label: 'Home', id: 'home' },
    ]
  },
  {
    title: 'Mikrotik',
    items: [
      { label: 'Pengenalan Mikrotik', id: 'mikrotik-pengenalan' },
      { label: 'Konfigurasi Dasar', id: 'mikrotik-konfigurasi-dasar' },
      { label: 'Firewall & NAT', id: 'mikrotik-firewall-nat' },
      { label: 'Routing', id: 'mikrotik-routing' },
      { label: 'Wireless', id: 'mikrotik-wireless' },
      { label: 'Bandwidth Management', id: 'mikrotik-bandwidth-management' },
      { label: 'VPN', id: 'mikrotik-vpn' },
      { label: 'Troubleshooting', id: 'mikrotik-troubleshooting' },
    ]
  },
  {
    title: 'Fiber Optic',
    items: [
      { label: 'Pengenalan Fiber Optic', id: 'fiber-pengenalan' },
      { label: 'Jenis Kabel', id: 'fiber-jenis-kabel' },
      { label: 'Komponen Jaringan', id: 'fiber-komponen' },
      { label: 'Instalasi', id: 'fiber-instalasi' },
      { label: 'Splicing & Connector', id: 'fiber-splicing' },
      { label: 'Pengukuran & Testing', id: 'fiber-pengukuran' },
      { label: 'Perawatan', id: 'fiber-perawatan' },
    ]
  },
  {
    title: 'FTTH',
    items: [
      { label: 'Pengenalan FTTH', id: 'ftth-pengenalan' },
      { label: 'Arsitektur Jaringan', id: 'ftth-arsitektur' },
      { label: 'OLT & ONT', id: 'ftth-perangkat' },
      { label: 'Splitter & ODP', id: 'ftth-splitter-odp' },
      { label: 'Desain Jaringan', id: 'ftth-desain' },
      { label: 'Instalasi ONT', id: 'ftth-instalasi-ont' },
      { label: 'Troubleshooting', id: 'ftth-troubleshooting' },
    ]
  }
]

function Sidebar() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const allIds = ['home']
      navSections.forEach(section => {
        section.items.forEach(item => {
          if (item.id !== 'home') allIds.push(item.id)
        })
      })

      const scrollPos = window.scrollY + 130

      let current = 'home'
      for (const id of allIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY
          if (scrollPos >= top) {
            current = id
          }
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <h1>NetDocs</h1>
        <p>Mikrotik • Fiber Optic • FTTH</p>
      </div>
      <nav className="sidebar-nav">
        {navSections.map((section, idx) => (
          <div className="nav-section" key={idx}>
            <div className="nav-section-title">
              {section.title}
            </div>
            {section.items.map((item, itemIdx) => (
              <a
                key={itemIdx}
                className={'nav-item' + (activeId === item.id ? ' active' : '')}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
              >
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