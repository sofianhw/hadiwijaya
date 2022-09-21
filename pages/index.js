import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hadiwijaya`</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="sofianhw, sofian, hadiwijaya, sofian hadiwijaya" />
        <meta name="description" content="Hadiwijaya adalah perusahaan konsultan dibidang teknologi dan perusahaan rintisan"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World! <br />
        </h1>

        <p className={styles.description}>
          We are cooking something interesting.. <br />
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
