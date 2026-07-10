import { useState, useRef, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_XAI_API_KEY
const API_URL = 'https://api.x.ai/v1/chat/completions'

const SYSTEM_PROMPT = `Kamu adalah asisten AI untuk program KKN 116 Bumi Harapan yang berfokus pada budidaya maggot (larva Black Soldier Fly / BSF) sebagai solusi pengelolaan sampah organik dan pakan ternak alternatif.

Tugasmu adalah membantu warga dengan:
- Informasi seputar budidaya maggot BSF (cara, tips, pemecahan masalah)
- Cara pengelolaan sampah organik menggunakan maggot
- Manfaat maggot sebagai pakan ternak dan ikan
- Harga jual dan potensi ekonomi maggot
- Informasi program KKN 116 Bumi Harapan

Berikan jawaban yang ramah, singkat, dan mudah dipahami masyarakat umum. Gunakan Bahasa Indonesia yang baik. Boleh gunakan emoji secukupnya untuk membuat jawaban lebih menarik. Jika pertanyaan di luar topik, arahkan kembali ke topik maggot dengan sopan.`

const QUICK_QUESTIONS = [
  '🌱 Berapa modal awal budidaya maggot?',
  '📅 Berapa lama maggot siap panen?',
  '🍽️ Apa saja pakan yang cocok untuk maggot?',
  '💰 Berapa harga jual maggot segar?',
  '❌ Mengapa maggot saya mati?',
  '🏠 Bisakah dibudidayakan di dalam rumah?',
]

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm flex-shrink-0">🐛</div>
      <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 150, 300].map(delay => (
            <div
              key={delay}
              className="w-2 h-2 rounded-full bg-green-400 animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TanyaAI() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya asisten AI KKN 116 Bumi Harapan 🐛\n\nSaya siap membantu Anda dengan segala pertanyaan seputar **budidaya maggot BSF** dan **pengelolaan sampah organik**.\n\nAda yang bisa saya bantu hari ini?',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px'
    }
  }, [input])

  const sendMessage = async (text) => {
    const userText = (text || input).trim()
    if (!userText || isLoading) return

    const userMsg = { role: 'user', content: userText }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'grok-3-mini',
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...newMessages],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.choices[0].message.content },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '⚠️ Maaf, terjadi gangguan koneksi. Silakan coba lagi dalam beberapa saat.' },
      ])
    } finally {
      setIsLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Simple markdown-like bold rendering
  const renderText = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <div className="w-full min-h-screen bg-stone-50 flex flex-col pt-16 md:pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-green-600/50 border border-green-400/40 text-green-200 text-xs font-bold uppercase tracking-widest mb-4">
            AI Konsultasi
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Tanya AI Maggot 🤖
          </h1>
          <p className="text-green-200 text-base max-w-md mx-auto">
            Didukung oleh Grok AI · Siap menjawab pertanyaan seputar budidaya maggot 24/7
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4" style={{ minHeight: 0 }}>
        {/* Chat Box */}
        <div className="flex-1 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4" style={{ maxHeight: 'calc(100vh - 380px)', minHeight: '300px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                    🐛
                  </div>
                )}
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                    Sy
                  </div>
                )}

                {/* Bubble */}
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm sm:text-base leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-tr-sm shadow-sm'
                      : 'bg-white border border-stone-200 text-stone-700 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {renderText(msg.content)}
                </div>
              </div>
            ))}

            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-stone-100 p-3 sm:p-4">
            <div className="flex items-end gap-2.5">
              <textarea
                ref={textareaRef}
                id="ai-chat-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pertanyaan Anda di sini..."
                disabled={isLoading}
                rows={1}
                className="flex-1 resize-none rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm sm:text-base text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50 leading-relaxed"
                style={{ maxHeight: '120px' }}
              />
              <button
                id="ai-chat-send"
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 w-11 h-11 rounded-2xl bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-600/30"
                aria-label="Kirim pesan"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">
              Tekan <kbd className="px-1.5 py-0.5 bg-stone-100 rounded text-stone-500 font-mono text-[10px]">Enter</kbd> untuk kirim ·
              <kbd className="px-1.5 py-0.5 bg-stone-100 rounded text-stone-500 font-mono text-[10px] ml-1">Shift+Enter</kbd> untuk baris baru
            </p>
          </div>
        </div>

        {/* Quick Questions */}
        <div>
          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2.5">
            Pertanyaan Cepat:
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_QUESTIONS.map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                disabled={isLoading}
                className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-600 text-xs sm:text-sm font-medium hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-all duration-150 disabled:opacity-40"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-stone-400">
          🤖 AI ini dapat membuat kesalahan. Selalu verifikasi informasi penting dengan ahli peternakan setempat.
        </p>
      </div>
    </div>
  )
}
