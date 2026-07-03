import React from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Mikrotik from './pages/Mikrotik'
import FiberOptic from './pages/FiberOptic'
import FTTH from './pages/FTTH'

function App() {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export default App
