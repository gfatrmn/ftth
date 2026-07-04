import React, { useState, useEffect, useRef } from 'react'

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
      { label: 'GPON', id: 'ftth-gpon' },
      { label: 'PPPoE', id: 'ftth-pppoe' },
      { label: 'OLT & ONT', id: 'ftth-perangkat' },
      { label: 'Splitter & ODP', id: 'ftth-splitter' },
      { label: 'Desain Jaringan', id: 'ftth-desain' },
      { label: 'Instalasi ONT', id: 'ftth-instalasi-ont' },
      { label: 'Troubleshooting', id: 'ftth-troubleshooting' },
    ]
  }
]

function Sidebar({ isOpen, onClose }) {
  const [activeId, setActiveId] = useState('home')
  const scrollLockRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockRef.current) return

      const allIds = ['home']
      navSections.forEach(section => {
        section.items.forEach(item => {
          if (item.id !== 'home') allIds.push(item.id)
        })
      })

      const scrollPos = window.scrollY + 60

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
    setActiveId(id)
    scrollLockRef.current = true
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setTimeout(() => {
      scrollLockRef.current = false
    }, 600)
    if (onClose) onClose()
  }

  return (
    <>
    <div className={`sidebar${isOpen ? ' open' : ''}`} id="sidebar">
      {isOpen && <button className="sidebar-close" onClick={onClose}>&times;</button>}
      <div className="sidebar-header">
        <h1>NetDocs</h1>
        <p>Network Documentation</p>
      </div>
      <div className="sidebar-scrollable">
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
    </div>
    </>
  )
}

export default Sidebar