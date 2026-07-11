import { Link } from 'react-router-dom'
import LOGO from "../assets/LOGOKKENG.png"

/* ---------- Data ---------- */
const problemStats = [
  { icon: '🗑️', value: '±2,4 Ton', label: 'Sampah Organik / Hari', color: 'red' },
  { icon: '💧', value: '60%', label: 'Berakhir di Lahan Terbuka', color: 'orange' },
  { icon: '🦟', value: '3x', label: 'Risiko Penyakit Meningkat', color: 'yellow' },
]

const solutions = [
  {
    icon: '♻️',
    title: 'Kurangi Sampah Organik',
    desc: 'Maggot mampu mengurai 1 kg sampah organik dalam 24 jam. Lebih cepat dan alami dibanding metode kompos biasa.',
    color: 'green',
  },
  {
    icon: '💰',
    title: 'Bernilai Ekonomi Tinggi',
    desc: 'Maggot segar dijual Rp 5.000–8.000/kg sebagai pakan ternak. Menjadi sumber penghasilan tambahan warga.',
    color: 'amber',
  },
  {
    icon: '🌱',
    title: 'Ramah Lingkungan',
    desc: 'Tidak berbau, tidak menghasilkan cairan beracun. Residu budidaya menjadi pupuk kompos organik berkualitas.',
    color: 'emerald',
  },
  {
    icon: '🔄',
    title: 'Mudah & Mandiri',
    desc: 'Dapat dijalankan dari rumah dengan modal kecil. Tidak butuh lahan luas atau peralatan mahal.',
    color: 'teal',
  },
]

const colorMap = {
  green:   { bg: 'bg-green-50',   border: 'border-green-200',   icon: 'bg-green-100',   text: 'text-green-700' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   icon: 'bg-amber-100',   text: 'text-amber-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'bg-emerald-100', text: 'text-emerald-700' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    icon: 'bg-teal-100',    text: 'text-teal-700' },
}

/* ---------- Component ---------- */
export default function Home() {
  return (
    <main className="w-full">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 pt-20">
        {/* decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-700/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-800/40 blur-3xl" />
          {/* grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-700/50 border border-green-500/40 text-green-200 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Program KKN 116 Universitas Hasanuddin
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Sampah Jadi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Berkah
            </span>
            <br />
            untuk Bumi Harapan
          </h1>

          <p className="text-lg sm:text-xl text-green-200/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bersama warga Desa Bumi Harapan, kami mengubah masalah sampah organik menjadi
            peluang usaha melalui budidaya maggot <em>(Black Soldier Fly)</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/budidaya"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-green-800 font-bold text-base hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/20"
            >
              🐛 Pelajari Cara Budidaya
            </Link>
            <Link
              to="/tanya-ai"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-green-400/60 text-green-200 font-bold text-base hover:bg-green-800/40 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              🤖 Tanya AI Sekarang
            </Link>
          </div>

          {/* scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-1 text-green-400/60 text-xs font-medium animate-bounce">
            <span>Scroll ke bawah</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM STATEMENT ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
              Masalah
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-4 tracking-tight">
              Sampah Organik: Ancaman Nyata<br className="hidden sm:block" /> bagi Desa Kita
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Desa Bumi Harapan menghadapi krisis pengelolaan sampah yang berdampak langsung
              pada kesehatan dan lingkungan warga.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {problemStats.map(stat => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-stone-800 mb-1">{stat.value}</div>
                <div className="text-stone-500 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Visual problem timeline */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold text-stone-700 mb-8 text-center">
              🔴 Dampak Buruk Sampah yang Tidak Dikelola
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: '01', title: 'Bau Menyengat', desc: 'Sampah membusuk menghasilkan gas metana dan amonia yang mencemari udara dan mengganggu kesehatan warga.', icon: '😷' },
                { step: '02', title: 'Sarang Penyakit', desc: 'Genangan air di tempat sampah menjadi tempat berkembangbiak nyamuk penyebab DBD, malaria, dan diare.', icon: '🦠' },
                { step: '03', title: 'Pencemaran Air', desc: 'Lindi dari tumpukan sampah meresap ke tanah dan mencemari sumber air bersih warga sekitar.', icon: '💧' },
              ].map(item => (
                <div key={item.step} className="flex gap-4 p-4 rounded-2xl bg-red-50/70 border border-red-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-lg mb-1">{item.icon}</div>
                    <h4 className="font-bold text-stone-800 mb-1 text-sm">{item.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              Solusi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-4 tracking-tight">
              Budidaya Maggot BSF:<br className="hidden sm:block" /> Solusi Cerdas dari Alam
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Maggot <em>Black Soldier Fly</em> (BSF) adalah larva yang secara alami
              mengurai sampah organik menjadi protein berkualitas tinggi.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {solutions.map(sol => {
              const c = colorMap[sol.color]
              return (
                <div
                  key={sol.title}
                  className={`${c.bg} border ${c.border} rounded-2xl p-6 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl`}>
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${c.text} mb-1`}>{sol.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-center">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10">
              <div className="text-5xl mb-4">🐛</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Siap Memulai Budidaya Maggot?
              </h3>
              <p className="text-green-100 mb-6 max-w-md mx-auto">
                Ikuti panduan langkah demi langkah yang mudah dipahami, atau tanyakan langsung ke AI kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/budidaya"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-green-700 font-bold hover:bg-green-50 transition-colors shadow-lg"
                >
                  📖 Lihat Panduan
                </Link>
                <Link
                  to="/tanya-ai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/60 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  🤖 Tanya AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-green-200/60 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <img src={LOGO} alt="Logo KKN 116 Bumi Harapan" className="h-12 w-auto mx-auto mb-2 object-contain" />
          <p className="font-semibold text-green-200/80 mb-1">@kknt116.bumiharapan</p>
          <p>Universitas Hasanuddin · 2026</p>
        </div>
      </footer>
    </main>
  )
}
