import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms of Service | Hadiwijaya</title>
      </Head>

      <main className={styles.main} style={{ alignItems: 'flex-start', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Hadiwijaya ("we", "us", or "our"), concerning your access to and use of the https://hadiwijaya.co website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>

        <h3 style={{ marginTop: '2rem' }}>1. Agreement to Terms</h3>
        <p>By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.</p>

        <h3 style={{ marginTop: '2rem' }}>2. AI Playground and Services</h3>
        <p>We provide AI consulting services and an AI Playground for testing and demonstrating machine learning capabilities. You agree not to use the AI Playground for any illegal, malicious, or abusive activities, including attempting to reverse engineer, bypass security, or overload our systems.</p>

        <h3 style={{ marginTop: '2rem' }}>3. Intellectual Property Rights</h3>
        <p>Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>

        <h3 style={{ marginTop: '2rem' }}>4. Modifications and Interruptions</h3>
        <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</p>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/">
            <a style={{ color: '#0070f3', textDecoration: 'underline' }}>&larr; Back to Home</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer} style={{ flexDirection: 'column', padding: '2rem 0', height: 'auto' }}>
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
          >
            &copy; {new Date().getFullYear()} Hadiwijaya.co
          </a>
        </div>
      </footer>
    </div>
  )
}
