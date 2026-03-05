import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Hadiwijaya</title>
      </Head>

      <main className={styles.main} style={{ alignItems: 'flex-start', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <p>Welcome to Hadiwijaya (the "Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at contact@hadiwijaya.co.</p>

        <h3 style={{ marginTop: '2rem' }}>1. Information We Collect</h3>
        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as using our AI Playground) or otherwise when you contact us. This includes basic account info, OAuth data (from Google if you use our verified Google Auth platform integration), and usage data.</p>

        <h3 style={{ marginTop: '2rem' }}>2. How We Use Your Information</h3>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

        <h3 style={{ marginTop: '2rem' }}>3. Will Your Information Be Shared With Anyone?</h3>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h3 style={{ marginTop: '2rem' }}>4. Google OAuth API Scopes</h3>
        <p>Our applications use Google OAuth to provide services. The data collected through Google OAuth is used strictly to provide the features of our application and is not sold to third parties. Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>

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
