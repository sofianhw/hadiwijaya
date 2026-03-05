import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.25rem 2rem', 
        borderBottom: '1px solid var(--card-border)',
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div>
          <Link href="/">
            <a style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
              Hadiwijaya<span style={{ color: 'var(--accent-color)' }}>.</span>
            </a>
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/">
            <a style={{ color: router.pathname === '/' ? '#fff' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }}>Home</a>
          </Link>
          <Link href="/playground">
            <a style={{ color: router.pathname === '/playground' ? '#fff' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }}>Playground</a>
          </Link>
        </nav>
      </header>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>

      <footer style={{ 
        width: '100%', 
        borderTop: '1px solid var(--card-border)', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '3rem 2rem',
        backgroundColor: '#000'
      }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Link href="/privacy-policy">
            <a style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service">
            <a style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Terms of Service</a>
          </Link>
        </div>
        <div>
          <a
            href="https://hadiwijaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#555', textDecoration: 'none', fontSize: '0.85rem' }}
          >
            &copy; {new Date().getFullYear()} Hadiwijaya.co. All rights reserved.
          </a>
        </div>
      </footer>
    </div>
  );
}
