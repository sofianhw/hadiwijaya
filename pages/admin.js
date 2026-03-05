import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchContacts = async (pwd) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/contacts', {
        headers: {
          'x-admin-password': pwd
        }
      });
      if (!res.ok) {
        throw new Error('Invalid password');
      }
      const data = await res.json();
      setContacts(data);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchContacts(password);
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | Hadiwijaya</title>
      </Head>

      <main className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Admin Dashboard</h1>
        <p className={styles.pageSubtitle}>View secure contact form submissions.</p>

        {!isAuthenticated ? (
          <div className={styles.card} style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label htmlFor="password" className={styles.messageLabel} style={{ color: '#fff' }}>Admin Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter password..."
                required
              />
              {error && <p style={{ color: '#ef4444', fontSize: '0.9rem', margin: 0 }}>{error}</p>}
              <button type="submit" className={styles.button} disabled={isLoading} style={{ padding: '0.75rem' }}>
                {isLoading ? 'Checking...' : 'Login'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Recent Submissions ({contacts.length})</h2>
               <button onClick={() => fetchContacts(password)} className={styles.button} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Refresh</button>
            </div>
            
            {contacts.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)' }}>No contact submissions found.</p>
            ) : (
              contacts.map((contact) => (
                <div key={contact.id} className={styles.card} style={{ padding: '1.5rem', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{contact.name}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      {new Date(contact.created_at).toLocaleString()}
                    </span>
                  </div>
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent-color)', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
                    {contact.email}
                  </a>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                    {contact.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </>
  );
}
