import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Budidaya from './pages/Budidaya'
import TanyaAI from './pages/TanyaAI'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budidaya" element={<Budidaya />} />
        <Route path="/tanya-ai" element={<TanyaAI />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-4">
              <div className="text-8xl mb-4">😅</div>
              <h1 className="text-4xl font-extrabold text-stone-800 mb-3">Halaman tidak ditemukan</h1>
              <p className="text-stone-500 mb-6">Sepertinya Anda tersesat. Mari kembali ke beranda.</p>
              <a href="/" className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors">
                ← Kembali ke Beranda
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
