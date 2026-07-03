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
      const allIds = [
        'home',
        'mikrotik-pengenalan', 'mikrotik-konfigurasi-dasar', 'mikrotik-firewall-nat', 'mikrotik-routing',
        'mikrotik-wireless', 'mikrotik-bandwidth-management', 'mikrotik-vpn', 'mikrotik-troubleshooting',
        'fiber-pengenalan', 'fiber-jenis-kabel', 'fiber-komponen', 'fiber-instalasi',
        'fiber-splicing', 'fiber-pengukuran', 'fiber-perawatan',
        'ftth-pengenalan', 'ftth-arsitektur', 'ftth-perangkat', 'ftth-splitter-odp',
        'ftth-desain', 'ftth-instalasi-ont', 'ftth-troubleshooting'
      ]
      let current = 'home'
      allIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop - 120
          if (window.scrollY >= top) {
            current = id
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
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
      </div>
    </header>
  )
}

export default Navbar