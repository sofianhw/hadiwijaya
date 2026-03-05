import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hadiwijaya | AI Consulting & Solutions</title>
        <meta name="keywords" content="AI consulting, artificial intelligence, hadiwijaya, sofian hadiwijaya, tech consultant" />
        <meta name="description" content="Hadiwijaya is an AI Consulting company providing cutting-edge artificial intelligence solutions, machine learning integrations, and a dedicated AI playground."/>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Architecting the future with <span>AI.</span>
          </h1>
          <p className={styles.description}>
            Hadiwijaya provides elite AI consulting, engineering custom machine learning models that transform enterprises and accelerate growth.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Strategic AI Consulting</h3>
            <p>We analyze your business workflows to identify high-impact opportunities for automation, generative AI, and predictive modeling.</p>
          </div>

          <div className={styles.card}>
            <h3>Custom ML Infrastructure</h3>
            <p>From fine-tuning LLMs to building proprietary prediction engines, we engineer scalable machine learning pipelines for your unique data.</p>
          </div>

          <Link href="/playground">
            <a className={styles.card}>
              <h3>Interactive Playground &rarr;</h3>
              <p>Experience our capabilities firsthand. Test conversational AI models and experimental features in our secure sandbox environment.</p>
            </a>
          </Link>
        </div>

        <div className={styles.teamSection}>
          <h2 className={styles.teamTitle}>The Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <h3 className={styles.teamName}>Sofian Hadiwijaya</h3>
              <p className={styles.teamRole}>Founder & Principal AI Consultant</p>
              <p className={styles.teamBio}>
                Forbes 30 Under 30 Asia honoree and a visionary technology leader with deep expertise in AI, digital banking, and scalable architectures. With a proven track record of scaling innovative platforms across Southeast Asia—from co-founding Warung Pintar to driving tech evangelism—Sofian engineers sophisticated machine learning solutions that transform enterprises. Let's connect on <a href="https://www.linkedin.com/in/sofianhw/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>LinkedIn</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
