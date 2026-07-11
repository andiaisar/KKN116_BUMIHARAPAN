import LOGO from "../assets/LOGOKKENG.png"

const steps = [
  {
    number: '01',
    title: 'Siapkan Wadah & Lokasi',
    desc: 'Gunakan ember plastik atau kotak kayu ukuran 60×40 cm. Letakkan di tempat teduh, tidak terkena hujan langsung, dan beraliran udara baik. Lubangi bagian bawah untuk drainase.',
    tips: 'Hindari panas langsung dan suhu di atas 40°C. Maggot tidak suka gerah!',
    icon: '📦',
    color: 'green',
    supplies: ['Ember/kotak plastik', 'Penutup/jaring halus', 'Nampan penampung'],
  },
  {
    number: '02',
    title: 'Dapatkan Telur / Prepupa BSF',
    desc: 'Beli telur BSF dari peternak lokal atau ambil prepupa dari koloni yang sudah ada. Anda juga bisa membuat kandang dewasa BSF untuk memproduksi telur sendiri secara mandiri.',
    tips: 'Harga telur BSF sekitar Rp 20.000–50.000 per gram. Satu gram berisi ±2.000 telur.',
    icon: '🥚',
    color: 'amber',
    supplies: ['Telur BSF (1–2 gram)', 'Kardus bekas', 'Tali penggantung'],
  },
  {
    number: '03',
    title: 'Siapkan Media Pakan Awal',
    desc: 'Campurkan sisa makanan (nasi, sayuran, buah), ampas tahu, dedak, atau kotoran ternak. Pastikan media tidak terlalu kering atau terlalu basah. Kadar air ideal sekitar 60–70%.',
    tips: 'Hindari makanan berminyak, daging mentah, dan bahan kimia. Bisa meracuni larva.',
    icon: '🥦',
    color: 'emerald',
    supplies: ['Sisa sayuran/buah', 'Ampas tahu', 'Dedak padi'],
  },
  {
    number: '04',
    title: 'Tebar Telur & Mulai Inkubasi',
    desc: 'Letakkan kertas telur BSF di atas media pakan. Dalam 3–4 hari, telur akan menetas menjadi larva kecil. Jaga kelembapan media dengan menyemprotkan air jika terasa kering.',
    tips: 'Suhu ideal 25–30°C. Jika dingin, gunakan lampu 5 watt untuk menghangatkan.',
    icon: '🌡️',
    color: 'teal',
    supplies: ['Sprayer air', 'Termometer', 'Lampu 5W (opsional)'],
  },
  {
    number: '05',
    title: 'Pemberian Pakan Rutin',
    desc: 'Tambahkan sampah organik setiap hari sesuai kebutuhan larva. Pada hari 1–7 berikan 50g/hari, hari 8–14 berikan 100–200g/hari. Pantau suhu dan kelembapan setiap hari.',
    tips: 'Jangan berlebihan memberi pakan. Sisa pakan yang berlebih memicu bau tidak sedap.',
    icon: '🍽️',
    color: 'lime',
    supplies: ['Sampah organik segar', 'Timbangan kecil', 'Jadwal harian'],
  },
  {
    number: '06',
    title: 'Panen Maggot Segar (Hari ke-14)',
    desc: 'Larva siap panen ketika berusia ±14 hari dan berwarna krem/putih. Ukuran ideal 2–3 cm. Pisahkan dengan cara sifting (ayak) atau beri cahaya lampu—maggot akan menjauhi cahaya.',
    tips: 'Panen pagi hari. Maggot segar lebih aktif dan bobot optimal sebelum kena panas.',
    icon: '🎉',
    color: 'yellow',
    supplies: ['Ayakan plastik', 'Wadah panen', 'Timbangan'],
  },
  {
    number: '07',
    title: 'Pengolahan & Penjualan',
    desc: 'Maggot segar langsung dijual ke peternak ikan, ayam, atau bebek. Bisa juga dikeringkan (dried maggot) untuk nilai jual lebih tinggi atau diolah menjadi tepung maggot protein tinggi.',
    tips: 'Maggot segar: Rp 5.000–8.000/kg. Maggot kering: Rp 25.000–40.000/kg.',
    icon: '💰',
    color: 'orange',
    supplies: ['Wadah penyimpanan', 'Oven/pengering', 'Kemasan plastik'],
  },
]

const colorMap = {
  green:   { dot: 'bg-green-500',   badge: 'bg-green-100 text-green-700',   line: 'border-green-200',  ring: 'ring-green-200', card: 'border-green-100 hover:border-green-300', tip: 'bg-green-50 text-green-700 border-green-200' },
  amber:   { dot: 'bg-amber-500',   badge: 'bg-amber-100 text-amber-700',   line: 'border-amber-200',  ring: 'ring-amber-200', card: 'border-amber-100 hover:border-amber-300', tip: 'bg-amber-50 text-amber-700 border-amber-200' },
  emerald: { dot: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700', line: 'border-emerald-200', ring: 'ring-emerald-200', card: 'border-emerald-100 hover:border-emerald-300', tip: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  teal:    { dot: 'bg-teal-500',    badge: 'bg-teal-100 text-teal-700',    line: 'border-teal-200',  ring: 'ring-teal-200', card: 'border-teal-100 hover:border-teal-300', tip: 'bg-teal-50 text-teal-700 border-teal-200' },
  lime:    { dot: 'bg-lime-500',    badge: 'bg-lime-100 text-lime-700',    line: 'border-lime-200',  ring: 'ring-lime-200', card: 'border-lime-100 hover:border-lime-300', tip: 'bg-lime-50 text-lime-700 border-lime-200' },
  yellow:  { dot: 'bg-yellow-500',  badge: 'bg-yellow-100 text-yellow-700', line: 'border-yellow-200', ring: 'ring-yellow-200', card: 'border-yellow-100 hover:border-yellow-300', tip: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  orange:  { dot: 'bg-orange-500',  badge: 'bg-orange-100 text-orange-700', line: 'border-orange-200', ring: 'ring-orange-200', card: 'border-orange-100 hover:border-orange-300', tip: 'bg-orange-50 text-orange-700 border-orange-200' },
}

export default function Budidaya() {
  return (
    <main className="w-full min-h-screen bg-stone-50 pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-green-600/50 border border-green-400/40 text-green-200 text-xs font-bold uppercase tracking-widest mb-5">
            Panduan Budidaya
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Cara Budidaya Maggot BSF
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto leading-relaxed">
            7 langkah mudah yang bisa langsung dipraktikkan di rumah.
            Tidak perlu keahlian khusus — cukup niat dan konsistensi! 🐛
          </p>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-stone-200 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-stone-600">
          {[
            { icon: '⏱️', label: '14–21 hari panen pertama' },
            { icon: '💵', label: 'Modal awal Rp 100.000–300.000' },
            { icon: '📏', label: 'Lahan minimal 1 m²' },
            { icon: '📈', label: 'Potensi 5–10 kg/bulan' },
          ].map(info => (
            <div key={info.label} className="flex items-center gap-1.5 font-medium">
              <span>{info.icon}</span>
              <span>{info.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-stone-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => {
              const c = colorMap[step.color]
              return (
                <div key={step.number} className="relative flex gap-4 sm:gap-6">
                  {/* Step Number Dot */}
                  <div className="flex-shrink-0 z-10">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full ${c.dot} ring-4 ring-white flex items-center justify-center text-white font-extrabold text-sm sm:text-base shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-white rounded-2xl border ${c.card} shadow-sm hover:shadow-md transition-all duration-200 p-5 sm:p-6 mb-1`}>
                    {/* Card Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-3xl sm:text-4xl">{step.icon}</div>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${c.badge} mb-1`}>
                          Langkah {idx + 1}
                        </span>
                        <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                      {step.desc}
                    </p>

                    {/* Supplies needed */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                        Yang Dibutuhkan:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.supplies.map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 text-xs font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div className={`flex gap-2 p-3 rounded-xl border ${c.tip} text-xs sm:text-sm`}>
                      <span className="text-base flex-shrink-0">💡</span>
                      <p className="font-medium leading-relaxed">{step.tips}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* YouTube Video */}
        <div className="mt-14">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
              Video Tutorial
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-800 mb-2 tracking-tight">
              🎬 Tonton Video Panduan Budidaya
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Pelajari cara budidaya maggot BSF secara langsung melalui video tutorial berikut.
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/DluxJaB4vYA"
              title="Panduan Budidaya Maggot BSF"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-3 text-center">
            <a
              href="https://youtu.be/DluxJaB4vYA?si=4YwOay-Wb2k93qkv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Buka di YouTube
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-r from-green-700 to-emerald-600 rounded-3xl p-8 text-center text-white">
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="text-2xl font-extrabold mb-2">Ada Pertanyaan?</h3>
          <p className="text-green-100 mb-5 max-w-sm mx-auto">
            Tanyakan langsung ke AI kami yang siap membantu 24 jam sehari, 7 hari seminggu.
          </p>
          <a
            href="/tanya-ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-green-700 font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            🤖 Tanya AI Sekarang
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-950 text-green-200/60 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <img src={LOGO} alt="Logo KKN 116 Bumi Harapan" className="h-12 w-auto mx-auto mb-2 object-contain" />
          <p className="font-semibold text-green-200/80 mb-1">@kknt116.bumiharapan</p>
          <p>Universitas Hasanuddin · 2025/2026</p>
        </div>
      </footer>
    </main>
  )
}
