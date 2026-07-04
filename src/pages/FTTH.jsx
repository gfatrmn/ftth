import DocContent from '../components/DocContent'

const topics = [
  {
    id: 'ftth-pengenalan',
    title: 'Pengenalan FTTH',
    content: {
      sections: [
        { type: 'heading', content: 'Apa itu FTTH?' },
        { type: 'paragraph', content: 'Fiber to The Home (FTTH) adalah arsitektur jaringan akses serat optik yang menghubungkan langsung dari Central Office (OLT) ke rumah pelanggan (ONT/ONU). Tidak seperti FTTB atau FTTC yang masih menggunakan tembaga di bagian akhir, FTTH menggunakan serat optik 100% sampai ke dalam rumah.' },
        { type: 'heading', content: 'Keunggulan FTTH' },
        { type: 'list', items: [
          'Bandwidth sangat besar hingga Gigabit per detik',
          'Latensi rendah (low latency)',
          'Tidak terpengaruh interferensi elektromagnetik',
          'Stabil dan handal untuk cuaca ekstrem',
          'Mendukung triple-play (data, suara, video)',
          'Future-proof untuk kebutuhan masa depan',
        ]},
        { type: 'heading', content: 'Komponen Utama FTTH' },
        { type: 'list', items: [
          'OLT (Optical Line Terminal) Ada di sisi provider/CO (Central Office). Berfungsi mengirim sinyal optik ke banyak pelanggan sekaligus lewat 1 port PON.',
          'ODN (Optical Distribution Network) - Untuk seluruh jaringan distribusi optik pasif antara OLT dan ONT (mencakup kabel feeder, splitter, ODC, ODP, drop cable semuanya). Jadi ODN bukan 1 alat, tapi keseluruhan sistem distribusinya.',
          'Splitter - Alat pasif (tanpa listrik) yang membagi 1 sinyal optik jadi banyak (1:8, 1:16, 1:32, 1:64). Karena pasif, makanya disebut PON (Passive Optical Network).',
          { label: 'ODC/ODP', children: [
            'ODC (Optical Distribution Cabinet) — kabinet lebih besar, biasa tempat splitter tahap 1, kapasitas lebih banyak',
            'ODP (Optical Distribution Point) — titik distribusi lebih kecil dekat pelanggan (biasa di tiang), tempat splitter tahap 2 atau titik terminasi buat drop cable ke rumah-rumah',
          ]},
          'ONT/ONU - Perangkat di rumah pelanggan yang convert sinyal cahaya jadi data digital (Ethernet/WiFi). ONT dan ONU sering dianggap sama, bedanya ONU biasa butuh device tambahan (NTU), sedangkan ONT udah all-in-one.',
          'Drop Cable - kabel terakhir dari ODP masuk ke rumah pelanggan.',
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
        { type: 'paragraph', content: 'Arsitektur FTTH umumnya menggunakan topologi Point-to-Multipoint (P2MP) dengan passive optical splitter.' },
        { type: 'paragraph', content: 'Jaringan FTTH terdiri dari beberapa segmen:' },
        { type: 'list', items: [
          'Feeder - Dari OLT ke ODC (Optical Distribution Cabinet)',
          'Distribusi - Dari ODC ke ODP (Optical Distribution Point)',
          'Drop - Dari ODP ke ONT pelanggan',
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
    id: 'ftth-gpon',
    title: 'GPON (Gigabit Passive Optical Network)',
    content: {
      sections: [
        { type: 'heading', content: 'Apa itu GPON?' },
        { type: 'paragraph', content: 'GPON (Gigabit Passive Optical Network) adalah teknologi PON berbasis standar ITU-T G.984 yang menyediakan kecepatan hingga 2.5 Gbps downstream dan 1.25 Gbps upstream. GPON adalah teknologi FTTH yang paling banyak diadopsi oleh operator telekomunikasi di seluruh dunia termasuk Indonesia.' },
        { type: 'heading', content: 'Standar GPON (ITU-T G.984.x)' },
        { type: 'table', headers: ['Standar', 'Deskripsi'], rows: [
          ['G.984.1', 'Arsitektur dan requirement umum GPON'],
          ['G.984.2', 'Physical layer (PMD) — spesifikasi optik'],
          ['G.984.3', 'Transmission Convergence (TC) layer — frame, mapping, encapsulation'],
          ['G.984.4', 'ONT Management Control Interface (OMCI) — manajemen ONT dari OLT'],
          ['G.984.5', 'Bandwidth upgrade — wavelength filter untuk coexisting dengan XGS-PON'],
          ['G.984.6', 'Reach extension — GPON jarak jauh hingga 60 km'],
          ['G.984.7', 'Long-reach GPON'],
        ]},
        { type: 'heading', content: 'Cara Kerja GPON' },
        { type: 'paragraph', content: 'GPON menggunakan mekanisme downstream broadcast dan upstream TDMA (Time Division Multiple Access):' },
        { type: 'list', items: [
          'Downstream (OLT → ONT): Data dikirim secara broadcast ke semua ONT dengan enkripsi AES. Setiap ONT hanya memproses data yang ditujukan kepadanya berdasarkan GEM Port-ID.',
          'Upstream (ONT → OLT): Setiap ONT mendapat timeslot dari OLT untuk mengirim data. OLT mengatur jadwal pengiriman (DBA — Dynamic Bandwidth Allocation) agar tidak terjadi tabrakan.',
          'Wavelength: Downstream 1490 nm, Upstream 1310 nm, Video overlay 1550 nm (opsional).',
          'Frame GPON menggunakan GEM (GPON Encapsulation Method) yang dapat membawa Ethernet, TDM, atau trafik lainnya.',
        ]},
        { type: 'heading', content: 'Keamanan GPON' },
        { type: 'list', items: [
          'AES-128 encryption untuk data downstream (wajib di GPON)',
          'Autentikasi ONT berdasarkan Serial Number (SN) atau Password/LoID',
          'OMCI channel terenkripsi untuk manajemen',
          'Ploam messaging untuk control plane yang aman',
        ]},
        { type: 'heading', content: 'Perbandingan Teknologi PON' },
        { type: 'table', headers: ['Teknologi', 'Standar', 'Downstream', 'Upstream', 'Split Ratio'], rows: [
          ['GPON', 'ITU-T G.984', '2.5 Gbps', '1.25 Gbps', '1:64'],
          ['EPON', 'IEEE 802.3ah', '1 Gbps', '1 Gbps', '1:32'],
          ['10G-EPON', 'IEEE 802.3av', '10 Gbps', '10 Gbps / 1 Gbps', '1:128'],
          ['XGS-PON', 'ITU-T G.9807', '10 Gbps', '10 Gbps', '1:128'],
          ['NG-PON2', 'ITU-T G.989', '40 Gbps', '10 Gbps', '1:256'],
        ]},
        { type: 'info', content: 'GPON simetris (XGS-PON) mulai banyak diadopsi untuk memenuhi kebutuhan bandwidth yang semakin besar. Teknologi GPON dan XGS-PON dapat coexist di satu jaringan ODN yang sama menggunakan WDM filter.', variant: '' },
      ]
    }
  },
  {
    id: 'ftth-pppoe',
    title: 'PPPoE (Point-to-Point Protocol over Ethernet)',
    content: {
      sections: [
        { type: 'heading', content: 'Apa itu PPPoE?' },
        { type: 'paragraph', content: 'PPPoE (Point-to-Point Protocol over Ethernet) adalah protokol jaringan yang mengenkapsulasi PPP (Point-to-Point Protocol) di atas Ethernet. PPPoE banyak digunakan oleh ISP (termasuk layanan FTTH) untuk mengelola autentikasi, otorisasi, dan penagihan (billing) pelanggan.' },
        { type: 'heading', content: 'Komponen PPPoE' },
        { type: 'table', headers: ['Komponen', 'Fungsi'], rows: [
          ['PPPoE Client', 'Perangkat pelanggan (ONT/Router) yang memulai koneksi PPPoE dengan mengirimkan username & password'],
          ['PPPoE Server / BRAS', 'Server di sisi ISP (Broadband Remote Access Server) yang mengautentikasi dan mengelola sesi PPPoE'],
          ['PPP Session', 'Koneksi point-to-point logis antara client dan server setelah autentikasi berhasil'],
          ['RADIUS Server', 'Server backend untuk autentikasi, akuntansi (billing), dan manajemen bandwidth pelanggan'],
        ]},
        { type: 'heading', content: 'Tahapan Koneksi PPPoE' },
        { type: 'ordered-list', items: [
          'Discovery Stage: Client mengirim PADI (PPPoE Active Discovery Initiation) untuk mencari server',
          'Server merespon dengan PADO (PPPoE Active Discovery Offer) yang berisi nama/nomor sesi',
          'Client merespon PADR (PPPoE Active Discovery Request) untuk meminta koneksi',
          'Server mengirim PADS (PPPoE Active Discovery Session-confirmation) dengan Session-ID unik',
          'Session Stage: Koneksi PPP dimulai — LCP (Link Control Protocol) negosiasi, autentikasi PAP/CHAP, NCP (IPCP) untuk mendapatkan IP Address',
          'Termination Stage: Koneksi diakhiri dengan PADT (PPPoE Active Discovery Terminate)',
        ]},
        { type: 'heading', content: 'PPP di Layer 2 / Konfigurasi PPPoE di MikroTik' },
        { type: 'paragraph', content: 'Berikut adalah konfigurasi PPPoE Server di MikroTik (BRAS) untuk jaringan FTTH:' },
        { type: 'heading', content: '1. Buat PPP Profile' },
        { type: 'code', content: '/ppp profile\nadd name=ftth-profile local-address=10.10.10.1 remote-address=pppoe-pool\n  dns-server=8.8.8.8,8.8.4.4 only-one=yes' },
        { type: 'heading', content: '2. Buat IP Pool' },
        { type: 'code', content: '/ip pool\nadd name=pppoe-pool ranges=10.10.10.2-10.10.10.254' },
        { type: 'heading', content: '3. Buat PPP Secret (User Pelanggan)' },
        { type: 'code', content: '/ppp secret\nadd name=pelanggan1 password=pass123 service=pppoe profile=ftth-profile\nadd name=pelanggan2 password=pass456 service=pppoe profile=ftth-profile' },
        { type: 'heading', content: '4. Buat PPPoE Server di Interface' },
        { type: 'code', content: '/interface pppoe-server server\nadd interface=bridge-isp service-name=ftth authentication=pap,chap\n  default-profile=ftth-profile enabled=yes max-mtu=1492 max-mru=1492' },
        { type: 'heading', content: '5. Queue Management (Bandwidth Limiter)' },
        { type: 'code', content: '/queue simple\nadd name=pelanggan1 target=10.10.10.2/32 max-limit=50M/10M parent=bridge-isp\nadd name=pelanggan2 target=10.10.10.3/32 max-limit=100M/25M parent=bridge-isp' },
        { type: 'heading', content: 'Konfigurasi PPPoE Client di ONT/Router Pelanggan' },
        { type: 'paragraph', content: 'Berikut contoh konfigurasi PPPoE Client di MikroTik (RouterOS) di sisi pelanggan:' },
        { type: 'code', content: '/interface pppoe-client\nadd name=pppoe-out1 interface=ether1 user=pelanggan1 password=pass123\n  service-name=ftth add-default-route=yes use-peer-dns=yes' },
        { type: 'heading', content: 'Keuntungan PPPoE untuk ISP FTTH' },
        { type: 'list', items: [
          'Autentikasi per pelanggan (username & password) — keamanan lebih terjamin',
          'Manajemen IP Address — IP bisa di-assign dinamis via pool, tidak perlu IP statis untuk semua pelanggan',
          'Bandwidth management — setiap sesi PPPoE bisa di-limit bandwidthnya secara individual',
          'Session control — ISP bisa memutus sesi PPPoE jarak jauh (forced disconnect)',
          'Billing integration — PPPoE terintegrasi dengan RADIUS server untuk penagihan dan monitoring',
          'Isolasi Layer 2 — setiap pelanggan terisolasi di sesi PPP masing-masing, tidak bisa saling akses',
        ]},
        { type: 'info', content: 'PPPoE menggunakan MTU 1492 (1500 - 8 byte header PPPoE). Pastikan router pelanggan menggunakan MTU yang sesuai untuk menghindari fragmentasi atau koneksi gagal.', variant: '' },
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
    id: 'ftth-splitter',
    title: 'Splitter & ODP',
    content: {
      sections: [
        { type: 'heading', content: 'Optical Splitter' },
        { type: 'paragraph', content: 'Splitter adalah komponen pasif yang membagi daya optik dari satu serat menjadi beberapa serat output.' },
        { type: 'table', headers: ['Tipe Splitter', 'Redaman', 'Jumlah Output'], rows: [
          ['Splitter 1:2', '3.5 dB', '2'],
          ['Splitter 1:4', '7 dB', '4'],
          ['Splitter 1:8', '10.5 dB', '8'],
          ['Splitter 1:16', '13.5 dB', '16'],
          ['Splitter 1:32', '16.5 dB', '32'],
          ['Splitter 1:64', '19.5 dB', '64'],
        ]},
        { type: 'heading', content: 'ODP (Optical Distribution Point)' },
        { type: 'paragraph', content: 'ODP adalah titik distribusi optik yang menghubungkan kabel distribusi ke kabel drop pelanggan.' },
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
        <h2>FTTH</h2>
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