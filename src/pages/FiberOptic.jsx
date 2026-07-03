import React from 'react'
import DocContent from '../components/DocContent'

const topics = [
  {
    id: 'fiber-pengenalan',
    title: 'Pengenalan Fiber Optic',
    content: {
      sections: [
        { type: 'paragraph', content: 'Fiber Optic (serat optik) adalah teknologi transmisi data menggunakan kabel yang terbuat dari serat kaca atau plastik yang sangat halus. Data dikirimkan dalam bentuk cahaya, bukan sinyal listrik seperti pada kabel tembaga tradisional.' },
        { type: 'heading', content: 'Prinsip Kerja' },
        { type: 'paragraph', content: 'Serat optik bekerja berdasarkan prinsip pemantulan internal total (total internal reflection). Cahaya yang dikirimkan melalui inti serat (core) akan dipantulkan terus-menerus oleh lapisan cladding sehingga tetap berada di dalam core dan dapat menempuh jarak yang sangat jauh dengan kehilangan sinyal yang minimal.' },
        { type: 'heading', content: 'Kelebihan Fiber Optic' },
        { type: 'list', items: [
          'Bandwidth sangat tinggi (hingga Tbps)',
          'Jarak transmisi jauh (puluhan km tanpa repeater)',
          'Tidak terpengaruh interferensi elektromagnetik (EMI)',
          'Keamanan data lebih baik (sulit disadap)',
          'Ringan dan ukuran kecil',
          'Tahan terhadap korosi dan cuaca',
        ]},
        { type: 'heading', content: 'Kekurangan Fiber Optic' },
        { type: 'list', items: [
          'Biaya instalasi relatif mahal',
          'Perawatan dan perbaikan memerlukan keahlian khusus',
          'Kabel lebih rapuh dibanding tembaga',
          'Memerlukan perangkat khusus (splicer, OTDR, dll)',
        ]},
        { type: 'info', content: 'Fiber optik menjadi tulang punggung (backbone) internet global karena kemampuannya membawa data dalam jumlah besar dengan kecepatan tinggi.', variant: 'success' },
      ]
    }
  },
  {
    id: 'fiber-jenis-kabel',
    title: 'Jenis Kabel Fiber Optic',
    content: {
      sections: [
        { type: 'heading', content: 'Berdasarkan Mode Transmisi' },
        { type: 'table', headers: ['Jenis', 'Diameter Core', 'Jarak', 'Aplikasi'], rows: [
          ['Single Mode (SMF)', '9 µm', 'Hingga 100+ km', 'Telekomunikasi jarak jauh, ISP backbone'],
          ['Multimode (MMF)', '50/62.5 µm', 'Hingga 2 km', 'Jaringan lokal (LAN), data center'],
        ]},
        { type: 'heading', content: 'Berdasarkan Konstruksi' },
        { type: 'list', items: [
          'Tight Buffer - Untuk indoor, aplikasi patch cord',
          'Loose Tube - Untuk outdoor, tahan terhadap tarikan dan cuaca',
          'Armored - Dengan pelindung besi, tahan terhadap hewan pengerat',
          'Ribbon - Banyak serat dalam satu kabel, kapasitas tinggi',
          'Drop Cable - Untuk instalasi FTTH ke rumah pelanggan',
        ]},
        { type: 'heading', content: 'Kabel Fiber Optic Umum' },
        { type: 'table', headers: ['Tipe Kabel', 'Penggunaan'], rows: [
          ['G.652 (Standard SMF)', 'Backbone jarak jauh, standar ITU-T'],
          ['G.655 (NZ-DSF)', 'DWDM jarak jauh, non-zero dispersion'],
          ['OM1/OM2', 'Multimode tradisional, 200/500 MHz.km'],
          ['OM3', 'Multimode laser-optimized, 2000 MHz.km'],
          ['OM4', 'Multimode high bandwidth, 4700 MHz.km'],
          ['OM5', 'Multimode wideband, untuk SWDM'],
        ]},
        { type: 'info', content: 'Untuk FTTH, kabel yang paling umum digunakan adalah Single Mode (G.652) dan Drop Cable.', variant: '' },
      ]
    }
  },
  {
    id: 'fiber-komponen',
    title: 'Komponen Jaringan Fiber Optic',
    content: {
      sections: [
        { type: 'table', headers: ['Komponen', 'Fungsi'], rows: [
          ['Patch Cord', 'Kabel penghubung antar perangkat optik'],
          ['Pigtail', 'Kabel pendek dengan konektor untuk terminasi'],
          ['Adapter / Coupler', 'Menghubungkan dua konektor fiber'],
          ['Splitter', 'Membagi sinyal optik 1:N'],
          ['ODC (Optical Distribution Cabinet)', 'Kabinet distribusi untuk terminasi kabel'],
          ['ODP (Optical Distribution Point)', 'Titik distribusi ke pelanggan'],
          ['ROS (Remote Optical Splitter)', 'Splitter jarak jauh'],
          ['Fiber Closure', 'Pelindung sambungan kabel outdoor'],
        ]},
        { type: 'heading', content: 'Jenis Konektor Fiber' },
        { type: 'table', headers: ['Konektor', 'Tipe', 'Penggunaan'], rows: [
          ['SC', 'Push-pull', 'FTTH, ODN, yang paling umum'],
          ['LC', 'Small form-factor', 'Data center, perangkat padat'],
          ['FC', 'Screw-on', 'Instrumentasi, pengukuran'],
          ['ST', 'Bayonet', 'Jaringan lokal lama'],
          ['MPO/MTP', 'Multi-fiber', 'Data center kapasitas tinggi'],
        ]},
        { type: 'heading', content: 'Perangkat Aktif' },
        { type: 'list', items: [
          'OLT (Optical Line Terminal) - Perangkat di sisi provider',
          'ONT/ONU (Optical Network Terminal/Unit) - Perangkat di sisi pelanggan',
          'Media Converter - Konverter sinyal optik ke elektrik',
          'SFP Module - Transceiver optik untuk switch/router',
        ]},
        { type: 'info', content: 'Konektor SC adalah konektor yang paling banyak digunakan dalam jaringan FTTH karena kemudahan penggunaannya.', variant: '' },
      ]
    }
  },
  {
    id: 'fiber-instalasi',
    title: 'Instalasi Fiber Optic',
    content: {
      sections: [
        { type: 'heading', content: 'Tahapan Instalasi' },
        { type: 'ordered-list', items: [
          'Survey lokasi dan perencanaan rute',
          'Pemasangan kabel (pulling/penarikan)',
          'Terminasi kabel (splicing atau konektorisasi)',
          'Pengukuran dan pengujian',
          'Dokumentasi as-built',
        ]},
        { type: 'heading', content: 'Alat yang Diperlukan' },
        { type: 'list', items: [
          'Fusion Splicer - Untuk menyambung serat optik',
          'Cleaver - Untuk memotong serat dengan presisi',
          'Stripper - Untuk mengupas coating serat',
          'OTDR (Optical Time Domain Reflectometer) - Untuk mengukur redaman',
          'Power Meter & Light Source - Untuk mengukur daya optik',
          'Visual Fault Locator (VFL) - Untuk melacak kerusakan',
          'Tools Kit (gunting kabel, tang, dll)',
        ]},
        { type: 'heading', content: 'Prosedur Splicing' },
        { type: 'ordered-list', items: [
          'Strip coating serat menggunakan stripper',
          'Bersihkan serat dengan alkohol',
          'Cleave serat menggunakan cleaver',
          'Masukkan serat ke fusion splicer',
          'Proses splicing otomatis',
          'Pasang protection sleeve',
          'Test hasil splicing dengan OTDR',
        ]},
        { type: 'info', content: 'Redaman splicing yang baik adalah < 0.05 dB untuk single mode dan < 0.02 dB untuk fusion splicer berkualitas tinggi.', variant: 'success' },
        { type: 'heading', content: 'Hal yang Perlu Diperhatikan' },
        { type: 'list', items: [
          'Radius bending tidak boleh terlalu tajam (min 10x diameter kabel)',
          'Pastikan kabel tidak tertarik berlebihan (max 50-100 kg tergantung tipe)',
          'Gunakan pelindung (conduit/duct) untuk bagian yang rawan',
          'Beri label pada setiap ujung kabel untuk identifikasi',
        ]},
        { type: 'info', content: 'Radius bending yang terlalu tajam akan menyebabkan micro-bending yang meningkatkan redaman sinyal.', variant: 'warning' },
      ]
    }
  },
  {
    id: 'fiber-splicing',
    title: 'Splicing & Connector',
    content: {
      sections: [
        { type: 'heading', content: 'Fusion Splicing' },
        { type: 'paragraph', content: 'Fusion splicing adalah teknik menyambung dua ujung serat optik dengan melelehkannya menggunakan busur listrik sehingga menyatu menjadi satu serat kontinu. Metode ini menghasilkan redaman yang sangat rendah (< 0.05 dB).' },
        { type: 'heading', content: 'Mechanical Splicing' },
        { type: 'paragraph', content: 'Mechanical splicing menggunakan connector mekanis untuk menyambung serat tanpa peleburan. Redaman yang dihasilkan lebih tinggi (0.1 - 0.5 dB) tetapi lebih cepat dan tidak memerlukan alat splicer.' },
        { type: 'table', headers: ['Metode', 'Redaman', 'Kecepatan', 'Biaya'], rows: [
          ['Fusion Splicing', '< 0.05 dB', '30-60 detik/sambungan', 'Mahal (alat)'],
          ['Mechanical Splicing', '0.1 - 0.5 dB', '1-2 menit/sambungan', 'Murah (hanya connector)'],
        ]},
        { type: 'heading', content: 'Pemasangan Konektor' },
        { type: 'list', items: [
          'Pre-polished Connector - Konektor siap pakai dengan ferrule sudah dipoles',
          'Field Polished Connector - Konektor yang dipoles langsung di lapangan',
        ]},
        { type: 'heading', content: 'Standar Redaman yang Baik' },
        { type: 'list', items: [
          'Fusion splice: < 0.05 dB (ideal)',
          'Mechanical splice: < 0.5 dB',
          'Connector loss: < 0.3 dB per pair',
        ]},
        { type: 'info', content: 'Selalu bersihkan konektor sebelum menghubungkan dengan alkohol isopropyl 99% untuk menghindari kontaminasi.', variant: '' },
      ]
    }
  },
  {
    id: 'fiber-pengukuran',
    title: 'Pengukuran & Testing Fiber Optic',
    content: {
      sections: [
        { type: 'heading', content: 'Alat Ukur Utama' },
        { type: 'list', items: [
          'OTDR - Mengukur redaman total, lokasi fault, dan karakteristik link',
          'Power Meter - Mengukur daya optik yang diterima',
          'Light Source - Sumber cahaya untuk pengukuran bersama power meter',
          'VFL - Melacak kerusakan visual dengan laser merah',
          'Optical Microscope - Memeriksa kebersihan konektor',
        ]},
        { type: 'heading', content: 'Pengukuran dengan Power Meter & Light Source' },
        { type: 'code', content: 'Step:\n1. Hubungkan light source ke ujung kabel\n2. Hubungkan power meter ke ujung lain\n3. Catat daya yang diterima (dBm)\n4. Hitung redaman: Redaman = Daya TX - Daya RX (dB)\n5. Bandingkan dengan budget daya yang diizinkan' },
        { type: 'heading', content: 'Interpretasi Hasil OTDR' },
        { type: 'list', items: [
          'Fresnel Reflection - Puncak tajam di ujung kabel atau sambungan',
          'Splitter Loss - Penurunan level sinyal di splitter',
          'Fiber End / Break - Ujung kabel atau putus',
          'Macro-bending - Pelemahan gradual karena bending',
        ]},
        { type: 'heading', content: 'Standar Redaman' },
        { type: 'table', headers: ['Parameter', 'Standar'], rows: [
          ['Redaman kabel SM @1310nm', '< 0.35 dB/km'],
          ['Redaman kabel SM @1550nm', '< 0.25 dB/km'],
          ['Redaman splice', '< 0.05 dB'],
          ['Redaman konektor', '< 0.3 dB'],
        ]},
        { type: 'info', content: 'Pengukuran harus dilakukan dari kedua arah untuk hasil yang akurat.', variant: '' },
      ]
    }
  },
  {
    id: 'fiber-perawatan',
    title: 'Perawatan Fiber Optic',
    content: {
      sections: [
        { type: 'heading', content: 'Jadwal Perawatan Rutin' },
        { type: 'list', items: [
          'Bulanan: Cek daya optik di titik pelanggan (ONT)',
          'Bulanan: Inspeksi visual kabel di ODP/ODC',
          'Kuartal: Pembersihan konektor di OLT dan ODC',
          'Tahunan: Pengukuran OTDR untuk seluruh link',
          'Tahunan: Audit dokumentasi as-built',
        ]},
        { type: 'heading', content: 'Pembersihan Konektor' },
        { type: 'list', items: [
          'One-click cleaner / ferrule cleaner',
          'Cleaning stick dengan alkohol isopropyl 99%',
          'Kain bebas serat (lint-free wipes)',
          'Compressed air (optional)',
        ]},
        { type: 'info', content: 'Jangan pernah menyentuh ujung ferrule konektor dengan jari. Minyak dari kulit dapat menyebabkan redaman tinggi.', variant: 'warning' },
        { type: 'heading', content: 'Troubleshooting Umum' },
        { type: 'table', headers: ['Masalah', 'Kemungkinan Penyebab', 'Solusi'], rows: [
          ['Daya rendah di ONT', 'Konektor kotor', 'Bersihkan konektor dengan alat cleaner'],
          ['Link putus total', 'Kabel putus atau konektor lepas', 'Cek dengan VFL, splicer jika putus'],
          ['Redaman tinggi', 'Bending tajam atau splice jelek', 'OTDR tracing untuk lokalisasi'],
          ['Fluktuasi sinyal', 'Konektor longgar', 'Kencangkan atau ganti konektor'],
        ]},
      ]
    }
  }
]

function FiberOptic() {
  return (
    <div>
      <div className="section-intro">
        <h2>Fiber Optic 💡</h2>
        <p>Dokumentasi lengkap tentang teknologi serat optik, instalasi, dan perawatannya.</p>
      </div>

      {topics.map((topic) => (
        <div id={topic.id} key={topic.id} className="topic-section">
          <DocContent title={topic.title} sections={topic.content.sections} />
        </div>
      ))}
    </div>
  )
}

export default FiberOptic