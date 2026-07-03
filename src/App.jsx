import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Mikrotik from './pages/Mikrotik'
import FiberOptic from './pages/FiberOptic'
import FTTH from './pages/FTTH'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <section id="home">
            <Home />
          </section>
          <section id="mikrotik">
            <Mikrotik />
          </section>
          <section id="fiber-optic">
            <FiberOptic />
          </section>
          <section id="ftth">
            <FTTH />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App