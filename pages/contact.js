import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Hadiwijaya</title>
      </Head>

      <main className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Get in Touch</h1>
        <p className={styles.pageSubtitle}>
          Interested in our AI consulting services or custom ML infrastructure? Fill out the form below and we will get back to you shortly.
        </p>
        
        <div className={styles.card} style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem 0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We will review your inquiry and reply to the email provided.</p>
              <button 
                onClick={() => setStatus('idle')}
                className={styles.button}
                style={{ marginTop: '2rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" className={styles.messageLabel} style={{ color: '#fff' }}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="John Doe"
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label htmlFor="email" className={styles.messageLabel} style={{ color: '#fff' }}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="john@company.com"
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label htmlFor="message" className={styles.messageLabel} style={{ color: '#fff' }}>How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Tell us about your project or inquiry..."
                  style={{ resize: 'vertical', minHeight: '120px' }}
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              {status === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '0.9rem', padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={styles.button} 
                disabled={status === 'submitting'}
                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
