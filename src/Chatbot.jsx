import { useState, useRef, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_XAI_API_KEY
const API_URL = 'https://api.x.ai/v1/chat/completions'

const SYSTEM_PROMPT = `Kamu adalah asisten AI untuk program KKN 116 Bumi Harapan yang berfokus pada budidaya maggot (larva Black Soldier Fly / BSF) sebagai solusi pengelolaan sampah organik dan pakan ternak alternatif. 

Tugasmu adalah membantu warga dengan:
- Informasi seputar budidaya maggot BSF
- Cara pengelolaan sampah organik menggunakan maggot
- Manfaat maggot sebagai pakan ternak dan ikan
- Tips dan teknik budidaya yang benar
- Mengatasi masalah umum dalam budidaya maggot
- Informasi program KKN 116 Bumi Harapan

Berikan jawaban yang ramah, informatif, dan mudah dipahami oleh masyarakat umum. Gunakan Bahasa Indonesia yang baik.`

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya asisten AI KKN 116 Bumi Harapan 🐛. Saya siap membantu Anda dengan informasi seputar budidaya maggot dan pengelolaan sampah organik. Ada yang bisa saya bantu?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'grok-3-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages
          ],
          temperature: 0.7,
          max_tokens: 1024
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '⚠️ Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        id="chatbot-toggle"
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {!isOpen && <span className="chatbot-badge">AI</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div id="chatbot-window" className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">🐛</div>
              <div>
                <h3 className="chatbot-title">Asisten Maggot AI</h3>
                <span className="chatbot-status">
                  <span className="status-dot"></span>
                  Powered by Grok AI
                </span>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div id="chatbot-messages" className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.role === 'user' ? 'chatbot-message--user' : 'chatbot-message--assistant'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="message-avatar">🐛</div>
                )}
                <div className="message-bubble">
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message chatbot-message--assistant">
                <div className="message-avatar">🐛</div>
                <div className="message-bubble message-bubble--loading">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <textarea
              ref={inputRef}
              id="chatbot-input"
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tanya seputar budidaya maggot..."
              rows={1}
              disabled={isLoading}
            />
            <button
              id="chatbot-send"
              className="chatbot-send"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Kirim pesan"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="chatbot-footer">Tekan Enter untuk kirim · Shift+Enter untuk baris baru</p>
        </div>
      )}
    </>
  )
}
