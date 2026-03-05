import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Team() {
  return (
    <>
      <Head>
        <title>The Team | Hadiwijaya</title>
      </Head>

      <main className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>The Team</h1>
        <p className={styles.pageSubtitle}>Meet the experts driving AI innovation.</p>
        
        <div className={styles.teamGrid} style={{ maxWidth: '100%', marginTop: '2rem' }}>
          <div className={styles.teamCard} style={{ padding: '3rem' }}>
            <h3 className={styles.teamName} style={{ fontSize: '2rem' }}>Sofian Hadiwijaya</h3>
            <p className={styles.teamRole} style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Founder & Principal AI Consultant</p>
            <div className={styles.pageContent}>
              <p>
                Sofian Hadiwijaya is a visionary technology leader and entrepreneur with deep expertise in digital banking, AI, and scalable architectures. Currently serving as the Group Head of Product at Superbank and Co-Founder of AvataraLabs, Sofian has a proven track record of building and scaling innovative platforms across Southeast Asia.
              </p>
              <p>
                Recognized as a <strong>Forbes 30 Under 30 Asia</strong> honoree and a "Developer Hero" award winner, he combines a strong technical background in robotics and data science with a passion for driving digital transformation. His notable ventures include co-founding <strong>Warung Pintar</strong>, an e-commerce platform that successfully digitized Indonesia's traditional kiosks before its acquisition by Sirclo.
              </p>
              <p>
                As a prominent tech evangelist, mentor, and co-founder of the Deep Tech Foundation, Sofian remains at the forefront of emerging technologies. He is dedicated to engineering sophisticated machine learning solutions and creating scalable, user-centric ecosystems that transform modern enterprises.
              </p>
              <p style={{ marginTop: '2rem' }}>
                <a href="https://www.linkedin.com/in/sofianhw/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600 }}>
                  Connect with Sofian on LinkedIn &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
