import React, { useState, useEffect } from 'react'

const sectionTitles = {
  'home': 'Beranda',
  'mikrotik': 'Mikrotik - Pengenalan',
  'mikrotik-konfigurasi-dasar': 'Mikrotik - Konfigurasi Dasar',
  'mikrotik-firewall-nat': 'Mikrotik - Firewall & NAT',
  'mikrotik-routing': 'Mikrotik - Routing',
  'mikrotik-wireless': 'Mikrotik - Wireless',
  'mikrotik-bandwidth-management': 'Mikrotik - Bandwidth Management',
  'mikrotik-vpn': 'Mikrotik - VPN',
  'mikrotik-troubleshooting': 'Mikrotik - Troubleshooting',
  'fiber-optic': 'Fiber Optic - Pengenalan',
  'fiber-jenis-kabel': 'Fiber Optic - Jenis Kabel',
  'fiber-komponen': 'Fiber Optic - Komponen Jaringan',
  'fiber-instalasi': 'Fiber Optic - Instalasi',
  'fiber-splicing': 'Fiber Optic - Splicing & Connector',
  'fiber-pengukuran': 'Fiber Optic - Pengukuran & Testing',
  'fiber-perawatan': 'Fiber Optic - Perawatan',
  'ftth': 'FTTH - Pengenalan',
  'ftth-arsitektur': 'FTTH - Arsitektur Jaringan',
  'ftth-perangkat': 'FTTH - OLT & ONT',
  'ftth-splitter-odp': 'FTTH - Splitter & ODP',
  'ftth-desain': 'FTTH - Desain Jaringan',
  'ftth-instalasi-ont': 'FTTH - Instalasi ONT',
  'ftth-troubleshooting': 'FTTH - Troubleshooting',
}

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach((section) => {
        const top = section.offsetTop - 100
        if (window.scrollY >= top) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    document.getElementById('sidebar')?.classList.toggle('open')
  }

  return (
    <header className="top-navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <span className="page-title">
          {sectionTitles[activeSection] || 'TechDocs'}
        </span>
      </div>
      <div className="navbar-actions">
        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Cari dokumentasi..." />
        </div>
      </div>
    </header>
  )
}

export default Navbar