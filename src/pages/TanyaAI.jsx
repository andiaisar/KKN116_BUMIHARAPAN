import { useState, useRef, useEffect } from 'react';

// Groq API - GRATIS 14.400 req/hari, tidak perlu kartu kredit
// Daftar di: https://console.groq.com
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY="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"

const SYSTEM_PROMPT = `Kamu adalah asisten virtual yang ramah, sopan, dan menggunakan bahasa Indonesia yang mudah dipahami warga desa. Tugasmu membantu warga Desa Bumi Harapan. Fokus utamamu adalah memberikan informasi edukatif tentang pengelolaan sampah dan budidaya Maggot BSF (Black Soldier Fly). Jawablah semua pertanyaan warga dengan ringkas, jelas, dan baik. Gunakan bahasa yang sederhana dan mudah dipahami.`;

const QUICK_QUESTIONS = [
  '🌱 Berapa modal awal budidaya maggot?',
  '📅 Berapa lama maggot siap panen?',
  '🍽️ Apa saja pakan yang cocok untuk maggot?',
  '💰 Berapa harga jual maggot segar?',
  '❌ Mengapa maggot saya mati?',
];

export default function TanyaAI() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya asisten virtual Bumi Harapan 🐛\n\nSaya siap membantu Anda dengan pertanyaan seputar pengelolaan sampah dan budidaya Maggot BSF. Ada yang bisa saya bantu hari ini?',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const sendMessage = async (textOverride) => {
    const userText = (textOverride || input).trim();
    if (!userText || isLoading) return;

    const newUserMsg = { role: 'user', content: userText };
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages.map(m => ({ role: m.role, content: m.content })),
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!res.ok) {
        const errBody = await res.text();
        console.error('xAI Error:', res.status, errBody);
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      const aiText = data.choices?.[0]?.message?.content || 'Maaf, tidak ada respons.';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '⚠️ Terjadi kesalahan koneksi. Silakan coba lagi.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-16 md:pt-20 pb-8 px-4">
      <div className="flex flex-col max-w-2xl mx-auto" style={{ height: 'calc(100vh - 7rem)' }}>

        {/* Header */}
        <div className="bg-green-600 text-white px-5 py-4 rounded-t-2xl flex-shrink-0">
          <h1 className="text-lg font-bold">🤖 Tanya AI — Bumi Harapan</h1>
          <p className="text-green-100 text-xs mt-0.5">Didukung oleh Grok AI (xAI)</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 border-x border-stone-200 px-4 py-4 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1 ${
                msg.role === 'assistant' ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white'
              }`}>
                {msg.role === 'assistant' ? '🐛' : 'Sy'}
              </div>
              <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-green-500 text-white rounded-tr-sm'
                  : 'bg-white border border-stone-200 text-gray-800 rounded-tl-sm shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs flex-shrink-0 mt-1">🐛</div>
              <div className="bg-white border border-stone-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                {[0, 150, 300].map(d => (
                  <span key={d} className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="bg-stone-100 border-x border-stone-200 px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0">
          {QUICK_QUESTIONS.map(q => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={isLoading}
              className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-stone-300 bg-white text-stone-600 hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-all disabled:opacity-40"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border border-stone-200 border-t-0 rounded-b-2xl px-4 py-3 flex-shrink-0">
          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pertanyaanmu di sini..."
              rows={1}
              disabled={isLoading}
              className="flex-1 resize-none border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-700 placeholder-stone-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all disabled:opacity-50"
              style={{ maxHeight: '120px' }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <p className="text-center text-xs text-stone-400 mt-1.5">
            Enter kirim · Shift+Enter baris baru
          </p>
        </div>

      </div>
    </div>
  );
}
