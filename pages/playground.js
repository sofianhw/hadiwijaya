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

      <main className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>AI Playground</h1>
        <p className={styles.pageSubtitle}>Test out conversational AI using your own OpenAI API key.</p>

        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Enter your OpenAI API Key (sk-...)" 
            value={apiKey} 
            onChange={e => setApiKey(e.target.value)}
            className={styles.input}
          />
          <small style={{ color: 'var(--text-secondary)', display: 'block', marginTop: '0.75rem', fontSize: '0.85rem' }}>Your API key is only used for this session and is not stored on our servers.</small>
        </div>

        <div className={styles.chatBox}>
          {messages.length === 0 ? (
            <div style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '2rem' }}>No messages yet. Start a conversation!</div>
          ) : (
            messages.map(m => (
              <div key={m.id} className={styles.messageWrapper} style={{ alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <span className={`${styles.message} ${m.role === 'user' ? styles.messageUser : styles.messageAi}`}>
                  <strong className={styles.messageLabel}>{m.role === 'user' ? 'You' : 'AI Assistant'}</strong>
                  {m.content}
                </span>
              </div>
            ))
          )}
          {isLoading && (
            <div className={styles.messageWrapper} style={{ alignItems: 'flex-start' }}>
               <span className={`${styles.message} ${styles.messageAi}`} style={{ color: 'var(--text-secondary)' }}>
                  Typing...
               </span>
            </div>
          )}
          {error && (
            <div style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center', padding: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
              Error: {error.message}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className={styles.chatForm}>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={apiKey ? "Type your message..." : "Please enter your API key first"}
            disabled={!apiKey || isLoading}
            className={styles.input}
            style={{ marginBottom: 0 }}
          />
          <button type="submit" disabled={!apiKey || isLoading} className={styles.button}>
            Send
          </button>
        </form>
      </main>
    </>
  );
}
