import Head from 'next/head'
import AboutSection from '../components/sections/AboutSection';
import HomeSection from '../components/sections/HomeSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cristian Butiri - Senior Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <HomeSection/>
        <AboutSection/>
      </main>

      <footer>
      </footer>
    </div>
  )
}