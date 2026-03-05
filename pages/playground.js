import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Playground() {
  const [apiKey, setApiKey] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !apiKey) return;

    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-openai-key': apiKey
        },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to fetch response');
      }

      const data = await response.json();
      const aiMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: data.reply };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>AI Playground | Hadiwijaya</title>
      </Head>

      <main className={styles.main} style={{ justifyContent: 'flex-start', paddingTop: '4rem', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI Playground</h1>
        <p>Test out conversational AI using your own OpenAI API key.</p>

        <div style={{ width: '100%', marginBottom: '2rem' }}>
          <input 
            type="password" 
            placeholder="Enter your OpenAI API Key (sk-...)" 
            value={apiKey} 
            onChange={e => setApiKey(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '0.5rem' }}>Your API key is only used for this session and is not stored on our servers.</small>
        </div>

        <div style={{ width: '100%', flex: 1, border: '1px solid #eaeaea', borderRadius: '10px', padding: '1.5rem', overflowY: 'auto', minHeight: '400px', maxHeight: '500px', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
          {messages.length === 0 ? (
            <div style={{ color: '#888', textAlign: 'center', marginTop: '2rem' }}>No messages yet. Start a conversation!</div>
          ) : (
            messages.map(m => (
              <div key={m.id} style={{ marginBottom: '1rem', textAlign: m.role === 'user' ? 'right' : 'left' }}>
                <span style={{ display: 'inline-block', padding: '0.75rem 1rem', borderRadius: '10px', background: m.role === 'user' ? '#0070f3' : '#fff', color: m.role === 'user' ? 'white' : 'black', maxWidth: '85%', border: m.role === 'user' ? 'none' : '1px solid #eaeaea', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem', opacity: 0.8 }}>{m.role === 'user' ? 'You' : 'AI Assistant'}</strong>
                  {m.content}
                </span>
              </div>
            ))
          )}
          {isLoading && (
            <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
               <span style={{ display: 'inline-block', padding: '0.75rem 1rem', borderRadius: '10px', background: '#fff', border: '1px solid #eaeaea', color: '#666' }}>
                  Typing...
               </span>
            </div>
          )}
          {error && (
            <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center', padding: '1rem', border: '1px solid red', borderRadius: '5px', backgroundColor: '#fff0f0' }}>
              Error: {error.message}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', marginTop: '1.5rem' }}>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={apiKey ? "Type your message..." : "Please enter your API key first"}
            disabled={!apiKey || isLoading}
            style={{ flex: 1, padding: '0.75rem', borderRadius: '5px 0 0 5px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <button type="submit" disabled={!apiKey || isLoading} style={{ padding: '0.75rem 1.5rem', background: apiKey ? '#0070f3' : '#ccc', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: apiKey ? 'pointer' : 'not-allowed', fontSize: '1rem', fontWeight: 'bold' }}>
            Send
          </button>
        </form>
      </main>
    </>
  );
}
