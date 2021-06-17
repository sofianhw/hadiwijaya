import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SlipiconValley</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="bukit algoritma, silicon valley, teknologi, teknopolis, slipicon valley" />
        <meta name="description" content="Asal muasal banyak ekosistem perusahaan rintisan (startup), tempat bertemunya Industri, Investor, dan Inventor"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://slipiconvalley.com">SlipiconValley!</a>
        </h1>

        <p className={styles.description}>
          If you landing on this page and have some Ideas, <br />
          Please reach me on <a href="https://www.linkedin.com/in/sofianhw/">Linkedin</a> or <a href="https://www.instagram.com/sofianhw/">Instagram</a>
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
