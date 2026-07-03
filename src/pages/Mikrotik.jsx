import React from 'react'
import DocContent from '../components/DocContent'

const topics = [
  {
    id: 'mikrotik-pengenalan',
    title: 'Pengenalan Mikrotik',
    content: {
      sections: [
        { type: 'paragraph', content: 'MikroTik adalah perusahaan teknologi asal Latvia yang memproduksi perangkat keras dan perangkat lunak untuk jaringan komputer. Produk utamanya adalah RouterOS, sistem operasi berbasis Linux yang dirancang khusus untuk routing, firewall, dan manajemen bandwidth.' },
        { type: 'heading', content: 'Sejarah Singkat' },
        { type: 'paragraph', content: 'MikroTik didirikan pada tahun 1996 oleh John Tully dan Arnis Riekstins. Awalnya mereka mengembangkan sistem routing untuk platform PC, kemudian merilis RouterOS pertama pada tahun 1997. Pada tahun 2002, MikroTik meluncurkan perangkat keras pertama mereka yaitu RouterBOARD.' },
        { type: 'heading', content: 'Produk Mikrotik' },
        { type: 'table', headers: ['Produk', 'Deskripsi', 'Penggunaan'], rows: [
          ['RouterBOARD', 'Perangkat keras router', 'Router/Switch jaringan'],
          ['RouterOS', 'Sistem operasi routing', 'Instalasi di perangkat RB atau PC'],
          ['RouterOS Cloud', 'Manajemen cloud', 'Monitoring jaringan jarak jauh'],
          ['Switch', 'Switch manageable', 'Manajemen traffic LAN'],
          ['Wireless', 'Perangkat wireless', 'Hotspot, Point-to-Point, WISP'],
        ]},
        { type: 'heading', content: 'Fitur Utama RouterOS' },
        { type: 'list', items: [
          'Routing (BGP, OSPF, RIP, MME)',
          'Firewall & NAT (Network Address Translation)',
          'Bandwidth Management (Queue Tree, Simple Queue)',
          'Wireless (Access Point, Bridge, WDS)',
          'VPN (PPTP, L2TP, SSTP, OpenVPN, IPsec)',
          'Hotspot & Captive Portal',
          'DHCP Server/Client',
          'DNS Server & Cache',
          'Proxy (Web Proxy, Transparent Proxy)',
          'Monitoring & Logging',
        ]},
        { type: 'info', content: 'RouterOS tersedia dalam beberapa level lisensi mulai dari Level 0 (trial) hingga Level 6. Semakin tinggi level, semakin banyak fitur yang didukung.', variant: '' },
      ]
    }
  },
  {
    id: 'mikrotik-konfigurasi-dasar',
    title: 'Konfigurasi Dasar Mikrotik',
    content: {
      sections: [
        { type: 'paragraph', content: 'Berikut adalah panduan konfigurasi dasar Mikrotik menggunakan WinBox dan command line (CLI).' },
        { type: 'heading', content: '1. Akses ke Mikrotik' },
        { type: 'paragraph', content: 'Ada beberapa cara untuk mengakses Mikrotik:' },
        { type: 'list', items: [
          'WinBox (GUI) - Aplikasi desktop untuk Windows',
          'WebFig - Antarmuka web berbasis browser',
          'SSH/ Telnet - Akses CLI jarak jauh',
          'Console - Akses langsung melalui port serial',
        ]},
        { type: 'heading', content: '2. Konfigurasi IP Address' },
        { type: 'code', content: '/ip address add address=192.168.1.1/24 interface=ether1\n/ip address print' },
        { type: 'heading', content: '3. Setting DHCP Server' },
        { type: 'code', content: '/ip dhcp-server setup\ndhcp-server interface: ether2\ndhcp-server address space: 192.168.1.0/24\ngateway for network: 192.168.1.1\naddress to give out: 192.168.1.2-192.168.1.254\ndns servers: 8.8.8.8,8.8.4.4' },
        { type: 'heading', content: '4. Konfigurasi DNS' },
        { type: 'code', content: '/ip dns set servers=8.8.8.8,8.8.4.4 allow-remote-requests=yes' },
        { type: 'heading', content: '5. Setting NAT (Internet Sharing)' },
        { type: 'code', content: '/ip firewall nat add chain=srcnat action=masquerade out-interface=ether1' },
        { type: 'info', content: 'Pastikan interface ether1 terhubung ke modem/internet dan ether2 ke switch/LAN lokal.', variant: '' },
        { type: 'heading', content: '6. Konfigurasi Default Gateway' },
        { type: 'code', content: '/ip route add gateway=192.168.1.1' },
      ]
    }
  },
  {
    id: 'mikrotik-firewall-nat',
    title: 'Firewall & NAT pada Mikrotik',
    content: {
      sections: [
        { type: 'paragraph', content: 'Firewall adalah sistem keamanan jaringan yang memonitor dan mengontrol traffic berdasarkan aturan yang telah ditentukan. NAT (Network Address Translation) memungkinkan banyak perangkat berbagi satu alamat IP publik.' },
        { type: 'heading', content: 'Konsep Firewall di RouterOS' },
        { type: 'paragraph', content: 'RouterOS menggunakan sistem filtering berbasis chain dan rules. Terdapat 3 chain utama:' },
        { type: 'table', headers: ['Chain', 'Fungsi'], rows: [
          ['input', 'Traffic yang masuk ke router itu sendiri'],
          ['forward', 'Traffic yang melewati router (dari LAN ke WAN)'],
          ['output', 'Traffic yang keluar dari router'],
        ]},
        { type: 'heading', content: 'Filter Rules Dasar' },
        { type: 'code', content: '/ip firewall filter\nadd chain=input connection-state=established,related action=accept\nadd chain=input connection-state=invalid action=drop\nadd chain=input src-address=192.168.1.0/24 action=accept\nadd chain=input action=drop' },
        { type: 'heading', content: 'NAT (Network Address Translation)' },
        { type: 'paragraph', content: 'NAT memungkinkan perangkat di jaringan lokal (private) dapat mengakses internet menggunakan satu IP publik.' },
        { type: 'code', content: '// Masquerade (NAT standar)\n/ip firewall nat add chain=srcnat action=masquerade out-interface=ether1\n\n// Port Forwarding\n/ip firewall nat add chain=dstnat action=dst-nat \\\n   protocol=tcp dst-port=80 to-addresses=192.168.1.10 to-ports=80' },
        { type: 'info', content: 'Gunakan Masquerade jika IP WAN bersifat dinamis. Gunakan src-nat jika memiliki IP publik statis.', variant: '' },
      ]
    }
  },
  {
    id: 'mikrotik-routing',
    title: 'Routing pada Mikrotik',
    content: {
      sections: [
        { type: 'paragraph', content: 'Routing adalah proses menentukan jalur terbaik untuk mengirimkan paket data dari satu jaringan ke jaringan lainnya. Mikrotik mendukung routing statis maupun routing dinamis.' },
        { type: 'heading', content: 'Routing Statis' },
        { type: 'code', content: '/ip route add dst-address=10.0.0.0/24 gateway=192.168.2.1' },
        { type: 'heading', content: 'Routing Dinamis' },
        { type: 'paragraph', content: 'RouterOS mendukung beberapa protokol routing dinamis:' },
        { type: 'table', headers: ['Protokol', 'Tipe', 'Penggunaan'], rows: [
          ['OSPF', 'Link State', 'Jaringan enterprise/ISP skala menengah'],
          ['RIP', 'Distance Vector', 'Jaringan kecil/sederhana'],
          ['BGP', 'Path Vector', 'ISP dan koneksi antar AS'],
          ['MME', 'Mesh', 'Jaringan wireless mesh'],
        ]},
        { type: 'heading', content: 'Konfigurasi OSPF' },
        { type: 'code', content: '/routing ospf instance add name=default router-id=1.1.1.1\n/routing ospf area add instance=default area=backbone\n/routing ospf interface add interface=ether2 area=backbone\n/routing ospf network add network=192.168.1.0/24 area=backbone' },
        { type: 'heading', content: 'Konfigurasi BGP' },
        { type: 'code', content: '/routing bgp instance add name=default as=65001\n/routing bgp peer add name=peer1 instance=default remote-address=10.0.0.2 remote-as=65002' },
        { type: 'info', content: 'BGP umumnya digunakan oleh ISP untuk routing antar AS (Autonomous System).', variant: '' },
      ]
    }
  },
  {
    id: 'mikrotik-wireless',
    title: 'Wireless pada Mikrotik',
    content: {
      sections: [
        { type: 'heading', content: 'Mode Wireless' },
        { type: 'table', headers: ['Mode', 'Fungsi'], rows: [
          ['AP Bridge', 'Access Point standar, melayani banyak client'],
          ['Station', 'Client yang terhubung ke AP'],
          ['WDS', 'Wireless Distribution System untuk bridging AP'],
          ['Nstreme', 'Mode proprietary untuk koneksi point-to-point'],
        ]},
        { type: 'heading', content: 'Konfigurasi Access Point' },
        { type: 'code', content: '/interface wireless set wlan1 mode=ap-bridge ssid="Mikrotik-Hotspot" \\\n   frequency=2412 band=2ghz-b/g/n channel-width=20mhz \\\n   security-profile=default disabled=no' },
        { type: 'heading', content: 'Konfigurasi Keamanan Wireless' },
        { type: 'code', content: '/interface wireless security-profiles set [ find default=yes ] \\\n   authentication-types=wpa2-psk mode=dynamic-keys wpa2-pre-shared-key=password123' },
        { type: 'heading', content: 'Membatasi Jumlah Client' },
        { type: 'code', content: '/interface wireless access-list add interface=wlan1 mac-address=XX:XX:XX:XX:XX:XX \\\n   signal-range=-70..120 forward=yes' },
        { type: 'info', content: 'Untuk performa optimal, pilih frekuensi yang tidak terlalu padat dan gunakan encryption WPA2/WPA3.', variant: '' },
      ]
    }
  },
  {
    id: 'mikrotik-bandwidth-management',
    title: 'Bandwidth Management',
    content: {
      sections: [
        { type: 'heading', content: 'Simple Queue' },
        { type: 'code', content: '/queue simple add name=client1 target=192.168.1.10/32 \\\n   max-limit=10M/10M' },
        { type: 'heading', content: 'Queue Tree' },
        { type: 'code', content: '/queue tree add name=upload parent=ether1 packet-mark=upload mark-upload \\\n   max-limit=20M\n/queue tree add name=download parent=ether1 packet-mark=download mark-download \\\n   max-limit=50M' },
        { type: 'heading', content: 'PCQ (Per Connection Queue)' },
        { type: 'code', content: '/queue type add name=pcq-download kind=pcq pcq-classifier=dst-address\n/queue type add name=pcq-upload kind=pcq pcq-classifier=src-address\n\n/queue simple add name=pcq-all target=192.168.1.0/24 \\\n   queue=pcq-upload/pcq-download max-limit=100M/100M' },
        { type: 'info', content: 'PCQ sangat berguna untuk membagi bandwidth secara merata ke setiap client.', variant: 'success' },
      ]
    }
  },
  {
    id: 'mikrotik-vpn',
    title: 'VPN pada Mikrotik',
    content: {
      sections: [
        { type: 'heading', content: 'Jenis VPN di RouterOS' },
        { type: 'table', headers: ['Protokol', 'Port', 'Enkripsi'], rows: [
          ['PPTP', 'TCP 1723', 'MPPE 128-bit'],
          ['L2TP/IPsec', 'UDP 500, 4500, 1701', 'AES-256'],
          ['SSTP', 'TCP 443', 'SSL/TLS'],
          ['OpenVPN', 'TCP/UDP 1194', 'SSL/TLS'],
          ['IPsec', 'UDP 500, 4500', 'AES-256'],
        ]},
        { type: 'heading', content: 'Konfigurasi L2TP/IPsec Server' },
        { type: 'code', content: '/interface l2tp-server server set enabled=yes \\\n   default-profile=default-encryption use-ipsec=yes ipsec-secret=rahasia123\n\n/ppp profile add name=l2tp-profile local-address=10.0.0.1 \\\n   remote-address=10.0.0.2-10.0.0.100\n\n/ppp secret add name=user1 password=pass123 profile=l2tp-profile' },
        { type: 'heading', content: 'Konfigurasi OpenVPN Server' },
        { type: 'code', content: '/interface ovpn-server server set enabled=yes certificate=cert1 \\\n   port=1194 mode=ip require-client-certificate=no auth=sha1\n\n/ppp secret add name=ovpn-user password=pass123 profile=default-encryption' },
        { type: 'info', content: 'L2TP/IPsec lebih aman dibanding PPTP dan lebih kompatibel dibanding OpenVPN di berbagai platform.', variant: '' },
      ]
    }
  },
  {
    id: 'mikrotik-troubleshooting',
    title: 'Troubleshooting Mikrotik',
    content: {
      sections: [
        { type: 'heading', content: 'Tools Diagnostik' },
        { type: 'list', items: [
          'Ping - Tes konektivitas dasar',
          'Traceroute - Melacak jalur routing',
          'Torch - Menganalisis traffic real-time',
          'Bandwidth Test - Mengukur throughput',
          'Profile - Monitoring CPU & memory usage',
          'Log - Mengecek system log',
        ]},
        { type: 'heading', content: 'Masalah Umum & Solusi' },
        { type: 'table', headers: ['Masalah', 'Penyebab', 'Solusi'], rows: [
          ['Tidak bisa internet', 'NAT tidak terkonfigurasi', 'Cek /ip firewall nat, pastikan masquerade terdaftar'],
          ['DHCP tidak berfungsi', 'DHCP server mati', 'Aktifkan dengan /ip dhcp-server enable'],
          ['Koneksi lambat', 'Queue / bandwidth penuh', 'Cek /queue simple print, tambah limit'],
          ['Tidak bisa ping ke router', 'Firewall blok input', 'Cek /ip firewall filter chain=input'],
          ['WiFi tidak muncul', 'Radio disabled', 'Enable dengan /interface wireless enable'],
        ]},
        { type: 'heading', content: 'Reset Password Router' },
        { type: 'code', content: '1. Matikan router\n2. Tekan tombol reset sambil menyalakan\n3. Tahan hingga LED berkedip (reset config)\n4. Atau tahan lebih lama (reset config & backup)' },
        { type: 'info', content: 'Gunakan Netinstall untuk recovery total jika RouterOS corrupt.', variant: 'warning' },
      ]
    }
  }
]

function Mikrotik() {
  return (
    <div>
      <div className="section-intro">
        <h2>Mikrotik 🔧</h2>
        <p>Dokumentasi lengkap tentang konfigurasi dan administrasi perangkat Mikrotik.</p>
      </div>

      {topics.map((topic) => (
        <div id={topic.id} key={topic.id} className="topic-section">
          <DocContent title={topic.title} sections={topic.content.sections} />
        </div>
      ))}
    </div>
  )
}

export default Mikrotik