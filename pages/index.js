import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofian Hadiwijaya`</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="sofianhw, sofian, hadiwijaya, sofian hadiwijaya" />
        <meta name="description" content="Sofian Hadiwijaya atau biasa dikenal sofianhw, adalah seorang konsultan dibidang teknologi dan perusahaan rintisan"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! My name is <br />
          Sofian <a href="https://hadiwijaya.co.id">Hadiwijaya!</a>
        </h1>

        <p className={styles.description}>
          If you have some Ideas <br />
          Please reach me on <a href="https://www.linkedin.com/in/sofianhw/">Linkedin</a>
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
