import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.5rem 2rem', 
        borderBottom: '1px solid #eaeaea',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div>
          <Link href="/">
            <a style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
              Hadiwijaya
            </a>
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/">
            <a style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          </Link>
          <Link href="/playground">
            <a style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>AI Playground</a>
          </Link>
        </nav>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>

      <footer style={{ 
        width: '100%', 
        borderTop: '1px solid #eaeaea', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem 0',
        backgroundColor: '#fafafa'
      }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
          <Link href="/privacy-policy">
            <a style={{ color: '#0070f3', textDecoration: 'none' }}>Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service">
            <a style={{ color: '#0070f3', textDecoration: 'none' }}>Terms of Service</a>
          </Link>
        </div>
        <div>
          <a
            href="https://hadiwijaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#666', textDecoration: 'none' }}
          >
            &copy; {new Date().getFullYear()} Hadiwijaya.co
          </a>
        </div>
      </footer>
    </div>
  );
}
