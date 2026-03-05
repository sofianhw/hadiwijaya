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
        <h1 className={styles.title}>
          Welcome to <span style={{ color: '#0070f3' }}>Hadiwijaya</span>
        </h1>

        <p className={styles.description}>
          Empowering your business with cutting-edge <b>Artificial Intelligence</b> solutions.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>AI Consulting &rarr;</h3>
            <p>Expert guidance on integrating AI into your existing workflows to maximize efficiency.</p>
          </div>

          <div className={styles.card}>
            <h3>Custom ML Models &rarr;</h3>
            <p>Tailor-made machine learning models designed specifically for your unique business needs.</p>
          </div>

          <Link href="/playground">
            <a className={styles.card}>
              <h3>AI Playground &rarr;</h3>
              <p>Explore and test our latest AI capabilities, interactive demos, and experimental tools.</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
