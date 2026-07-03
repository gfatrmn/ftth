import React from 'react'

function Home() {
  return (
    <div>
      <div className="home-hero">
        <h1>Selamat Datang di TechDocs 📚</h1>
        <p>
          Platform dokumentasi lengkap tentang Mikrotik, Fiber Optic, dan FTTH.
          Pelajari konsep, konfigurasi, dan troubleshooting untuk membangun
          jaringan yang handal.
        </p>
      </div>

      <div className="tech-cards">
        <a href="#mikrotik" className="tech-card tech-card-1" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="tech-card-icon">🔧</div>
          <h3>Mikrotik</h3>
          <p>
            Pelajari konfigurasi RouterOS, firewall, routing, bandwidth management,
            VPN, wireless, dan troubleshooting perangkat Mikrotik untuk kebutuhan
            jaringan Anda.
          </p>
        </a>

        <a href="#fiber-optic" className="tech-card tech-card-2" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="tech-card-icon">💡</div>
          <h3>Fiber Optic</h3>
          <p>
            Pahami teknologi serat optik, jenis kabel, komponen jaringan,
            instalasi, teknik splicing, pengukuran, dan perawatan sistem fiber optic.
          </p>
        </a>

        <a href="#ftth" className="tech-card tech-card-3" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="tech-card-icon">🏡</div>
          <h3>FTTH (Fiber to The Home)</h3>
          <p>
            Dokumentasi lengkap tentang arsitektur FTTH, perangkat OLT/ONT,
            splitter ODP, desain jaringan, instalasi, dan troubleshooting FTTH.
          </p>
        </a>
      </div>

      <div className="overview-section" style={{ marginTop: '48px' }}>
        <div className="overview-item">
          <span className="number">8</span>
          <span className="label">Topik Mikrotik</span>
        </div>
        <div className="overview-item">
          <span className="number">7</span>
          <span className="label">Topik Fiber Optic</span>
        </div>
        <div className="overview-item">
          <span className="number">7</span>
          <span className="label">Topik FTTH</span>
        </div>
      </div>
    </div>
  )
}

export default Home