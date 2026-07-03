import React from 'react'
import DocContent from '../components/DocContent'

const topics = [
  {
    id: 'ftth-pengenalan',
    title: 'Pengenalan FTTH',
    content: {
      sections: [
        { type: 'paragraph', content: 'FTTH (Fiber to The Home) adalah arsitektur jaringan akses serat optik yang menghubungkan langsung dari penyedia layanan (provider) ke rumah pelanggan menggunakan kabel serat optik. FTTH menyediakan koneksi internet berkecepatan tinggi hingga Gigabit per detik.' },
        { type: 'heading', content: 'Mengapa FTTH?' },
        { type: 'list', items: [
          'Kecepatan internet hingga 1 Gbps atau lebih',
          'Latensi rendah, cocok untuk gaming dan streaming 4K/8K',
          'Stabil dan tidak terpengaruh cuaca atau interferensi',
          'Future-proof untuk kebutuhan masa depan',
          'Simetris (upload dan download sama cepat)',
        ]},
        { type: 'heading', content: 'Perbandingan Teknologi Akses' },
        { type: 'table', headers: ['Parameter', 'ADSL', 'VDSL', 'Fiber (FTTH)'], rows: [
          ['Kecepatan max', '24 Mbps', '100 Mbps', '1+ Gbps'],
          ['Jarak max', '5 km', '1.2 km', '20+ km'],
          ['Media', 'Tembaga', 'Tembaga', 'Serat optik'],
          ['Latensi', '10-50 ms', '5-20 ms', '1-5 ms'],
          ['Stabilitas', 'Kurang stabil', 'Cukup stabil', 'Sangat stabil'],
        ]},
        { type: 'heading', content: 'Komponen Utama FTTH' },
        { type: 'list', items: [
          'OLT (Optical Line Terminal) - Di sisi provider (CO)',
          'ODN (Optical Distribution Network) - Jaringan distribusi optik',
          'Splitter - Membagi sinyal optik 1:N',
          'ODC/ODP - Kabinet dan titik distribusi',
          'ONT/ONU - Perangkat di sisi pelanggan',
          'Drop Cable - Kabel dari ODP ke rumah pelanggan',
        ]},
        { type: 'info', content: 'FTTH adalah standar jaringan akses masa depan. Banyak negara telah beralih dari tembaga ke fiber untuk memenuhi kebutuhan bandwidth yang terus meningkat.', variant: 'success' },
      ]
    }
  },
  {
    id: 'ftth-arsitektur',
    title: 'Arsitektur Jaringan FTTH',
    content: {
      sections: [
        { type: 'heading', content: 'Topologi Jaringan FTTH' },
        { type: 'paragraph', content: 'FTTH umumnya menggunakan topologi Point-to-Multipoint (P2MP) dengan arsitektur GPON (Gigabit Passive Optical Network). Jaringan bersifat pasif (tidak menggunakan perangkat aktif di jalur distribusi).' },
        { type: 'heading', content: 'Segmen Jaringan FTTH' },
        { type: 'table', headers: ['Segmen', 'Rentang', 'Deskripsi'], rows: [
          ['Feeder', 'CO ke ODC', 'Kabel backbone dari OLT ke ODC, biasanya 24-96 core'],
          ['Distribusi', 'ODC ke ODP', 'Kabel distribusi ke area pelanggan, 8-24 core'],
          ['Drop', 'ODP ke ONT', 'Kabel drop ke rumah pelanggan, 1-2 core'],
        ]},
        { type: 'heading', content: 'Arsitektur GPON' },
        { type: 'list', items: [
          'Downstream: 1490 nm (dari OLT ke ONT)',
          'Upstream: 1310 nm (dari ONT ke OLT)',
          'Video/RF: 1550 nm (opsional untuk TV kabel)',
          'Split ratio: 1:32 atau 1:64',
          'Jarak max: 20 km',
        ]},
        { type: 'heading', content: 'Tipe Arsitektur FTTH' },
        { type: 'list', items: [
          'Point-to-Point (P2P) - Satu serat langsung dari OLT ke ONT',
          'Point-to-Multipoint (P2MP) - Menggunakan splitter, satu serat dibagi ke banyak ONT',
          'Active Optical Network (AON) - Menggunakan switch aktif di lapisan distribusi',
        ]},
        { type: 'info', content: 'GPON (ITU-T G.984) adalah standar FTTH yang paling banyak digunakan di dunia, mendukung kecepatan hingga 2.5 Gbps downstream dan 1.25 Gbps upstream.', variant: '' },
      ]
    }
  },
  {
    id: 'ftth-perangkat',
    title: 'Perangkat OLT & ONT',
    content: {
      sections: [
        { type: 'heading', content: 'OLT (Optical Line Terminal)' },
        { type: 'paragraph', content: 'OLT adalah perangkat di sisi penyedia layanan (Central Office / CO). OLT berfungsi sebagai agregator dan gateway yang menghubungkan jaringan optik ke jaringan IP backbone.' },
        { type: 'table', headers: ['Spesifikasi', 'Keterangan'], rows: [
          ['Port PON', '4-32 port per chassis'],
          ['Split ratio', '1:32 atau 1:64 per port PON'],
          ['Kecepatan', '2.5 Gbps down / 1.25 Gbps up (GPON)'],
          ['Interface uplink', '10GbE, 40GbE, atau 100GbE'],
          ['Fungsi', 'Aggregasi, routing, manajemen ONT'],
        ]},
        { type: 'heading', content: 'ONT / ONU (Optical Network Terminal)' },
        { type: 'table', headers: ['Tipe ONT', 'Port / Fitur', 'Penggunaan'], rows: [
          ['ONT Basic', '1 GE, 1 VoIP', 'Rumah tangga standar'],
          ['ONT WiFi', '1 GE, WiFi, 1 VoIP', 'Rumah dengan WiFi bawaan'],
          ['ONT 4 Port', '4 GE, 1 VoIP, WiFi', 'Rumah besar / kantor kecil'],
          ['ONT Multi-dwelling', '8+ port, WiFi mesh', 'Apartemen / gedung bertingkat'],
          ['SFU', '1-4 GE, tanpa WiFi', 'ONT sederhana dengan switch'],
        ]},
        { type: 'heading', content: 'Merek OLT & ONT Populer' },
        { type: 'list', items: [
          'Huawei (MA5600T, MA5800, HG系列 ONT)',
          'ZTE (C300, C320, F系列 ONT)',
          'Nokia/Alcatel-Lucent (7360, 7342)',
          'Fiberhome (AN5516, AN6000)',
          'VSOL (OLT dan ONT ekonomis)',
        ]},
        { type: 'info', content: 'ONT harus terdaftar (authorized) di OLT agar dapat berkomunikasi. Proses registrasi menggunakan serial number atau password.', variant: '' },
      ]
    }
  },
  {
    id: 'ftth-splitter-odp',
    title: 'Splitter & ODP',
    content: {
      sections: [
        { type: 'heading', content: 'Optical Splitter' },
        { type: 'paragraph', content: 'Splitter optik adalah komponen pasif yang membagi satu sinyal optik menjadi beberapa sinyal dengan daya yang lebih rendah.' },
        { type: 'table', headers: ['Tipe Splitter', 'Ratio', 'Redaman'], rows: [
          ['1:2', '50:50', '~3.5 dB'],
          ['1:4', '25% masing-masing', '~7 dB'],
          ['1:8', '12.5%', '~10.5 dB'],
          ['1:16', '6.25%', '~13.5 dB'],
          ['1:32', '3.125%', '~16.5 dB'],
          ['1:64', '1.56%', '~19.5 dB'],
        ]},
        { type: 'heading', content: 'ODP (Optical Distribution Point)' },
        { type: 'table', headers: ['Tipe ODP', 'Kapasitas', 'Jumlah Pelanggan'], rows: [
          ['ODP 4 port', '1:4', '4 pelanggan'],
          ['ODP 8 port', '1:8', '8 pelanggan'],
          ['ODP 12 port', '1:12', '12 pelanggan'],
          ['ODP 16 port', '1:16', '16 pelanggan'],
        ]},
        { type: 'heading', content: 'Konfigurasi Splitter' },
        { type: 'list', items: [
          'Centralized Splitting - Splitter terpusat di ODC (1 stage)',
          'Distributed Splitting - Splitter bertingkat (2 stage)',
          'Cascaded Splitting - Splitter berantai untuk area luas',
        ]},
        { type: 'info', content: 'Konfigurasi distributed splitting lebih fleksibel untuk pengembangan pelanggan bertahap.', variant: 'success' },
      ]
    }
  },
  {
    id: 'ftth-desain',
    title: 'Desain Jaringan FTTH',
    content: {
      sections: [
        { type: 'heading', content: 'Langkah Desain FTTH' },
        { type: 'ordered-list', items: [
          'Survey lokasi dan pemetaan area coverage',
          'Penentuan titik OLT dan ODC',
          'Perencanaan rute kabel feeder dan distribusi',
          'Penempatan ODP berdasarkan sebaran pelanggan',
          'Perhitungan budget daya optik (link budget)',
          'Penentuan tipe splitter dan konfigurasi',
          'Pembuatan as-built drawing',
        ]},
        { type: 'heading', content: 'Perhitungan Budget Daya (Link Budget)' },
        { type: 'paragraph', content: 'Link budget adalah perhitungan total redaman dari OLT ke ONT.' },
        { type: 'code', content: 'Contoh Link Budget:\nTx Power OLT: +5 dBm\nRx Sensitivity ONT: -27 dBm\nTotal budget: 32 dB\n\nRedaman:\n- Kabel feeder (5 km x 0.3 dB/km) = 1.5 dB\n- Kabel distribusi (2 km x 0.3 dB/km) = 0.6 dB\n- Kabel drop (0.5 km x 0.3 dB/km) = 0.15 dB\n- Splitter 1:32 = 16.5 dB\n- Connector (6 pair x 0.3 dB) = 1.8 dB\n- Splice (4 titik x 0.05 dB) = 0.2 dB\n- Margin 3 dB\nTotal: 23.75 dB (aman)' },
        { type: 'info', content: 'Sisakan margin 3-5 dB dalam perhitungan link budget untuk antisipasi degradasi komponen.', variant: '' },
      ]
    }
  },
  {
    id: 'ftth-instalasi-ont',
    title: 'Instalasi ONT',
    content: {
      sections: [
        { type: 'heading', content: 'Prosedur Instalasi' },
        { type: 'ordered-list', items: [
          'Inspeksi lokasi dan tentukan titik instalasi ONT',
          'Tarik kabel drop dari ODP ke rumah pelanggan',
          'Pasang termination box / FTP (Fiber Termination Point)',
          'Splicing atau konektorisasi kabel drop ke pigtail di FTP',
          'Pasang ONT dan hubungkan ke FTP dengan patch cord',
          'Hubungkan ONT ke listrik dan perangkat user (PC/WiFi)',
          'Registrasi ONT ke OLT (jika belum terdaftar)',
          'Pengukuran daya optik di ONT',
          'Testing koneksi internet dan layanan',
          'Dokumentasi instalasi',
        ]},
        { type: 'heading', content: 'Persyaratan Daya Optik' },
        { type: 'table', headers: ['Parameter', 'Nilai'], rows: [
          ['Daya terima di ONT', '-8 dBm hingga -24 dBm'],
          ['Daya ideal', '-15 dBm hingga -20 dBm'],
          ['Sensitivitas ONT', '-27 dBm (max)'],
          ['Overpower warning', '> -8 dBm (dapat rusak)'],
        ]},
      ]
    }
  },
  {
    id: 'ftth-troubleshooting',
    title: 'Troubleshooting FTTH',
    content: {
      sections: [
        { type: 'heading', content: 'Indikator Masalah pada ONT' },
        { type: 'table', headers: ['Indikator', 'Status', 'Masalah'], rows: [
          ['PON (Hijau)', 'Menyala', 'Koneksi normal ke OLT'],
          ['PON (Hijau)', 'Berkedip', 'ONT mencoba registrasi'],
          ['LOS (Merah)', 'Menyala', 'Tidak ada sinyal optik'],
          ['LOS (Merah)', 'Berkedip', 'Daya optik terlalu rendah'],
          ['LAN (Hijau)', 'Menyala', 'Koneksi ke perangkat normal'],
        ]},
        { type: 'heading', content: 'Langkah Troubleshooting' },
        { type: 'ordered-list', items: [
          'Cek indikator ONT (PON/LOS)',
          'Ukur daya optik di ONT dengan power meter',
          'Jika daya rendah, cek konektor dan patch cord',
          'OTDR tracing dari OLT jika daya sangat rendah',
          'Cek status ONT di OLT (registered atau tidak)',
          'Cek konfigurasi VLAN dan service port di OLT',
        ]},
        { type: 'heading', content: 'Masalah Umum & Solusi' },
        { type: 'table', headers: ['Masalah', 'Penyebab', 'Solusi'], rows: [
          ['ONT PON berkedip terus', 'ONT belum terdaftar', 'Registrasi SN/password ONT ke OLT'],
          ['LOS merah menyala', 'Kabel putus / splitter rusak', 'OTDR tracing, cari titik putus'],
          ['Daya rendah (-25 dBm)', 'Konektor kotor / bending', 'Bersihkan konektor, cek bending'],
          ['Internet lambat', 'Bandwidth tidak sesuai', 'Cek limitasi di OLT atau NMS'],
        ]},
        { type: 'info', content: 'Sebagian besar masalah FTTH disebabkan oleh konektor kotor atau bending kabel yang terlalu tajam.', variant: '' },
      ]
    }
  }
]

function FTTH() {
  return (
    <div>
      <div className="section-intro">
        <h2>FTTH 🏡</h2>
        <p>Dokumentasi lengkap tentang Fiber to The Home, arsitektur, perangkat, instalasi, dan troubleshooting.</p>
      </div>

      {topics.map((topic) => (
        <div id={topic.id} key={topic.id} className="topic-section">
          <DocContent title={topic.title} sections={topic.content.sections} />
        </div>
      ))}
    </div>
  )
}

export default FTTH