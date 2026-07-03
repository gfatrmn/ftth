import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app-layout">
      <div className={`sidebar-overlay${sidebarOpen ? ' visible' : ''}`} onClick={closeSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <main className="main-content">
        <Navbar onMenuToggle={toggleSidebar} />
        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout
