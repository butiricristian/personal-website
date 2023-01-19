import Head from 'next/head'
import Separator from '../components/common/Separator';
import AboutSection from '../components/sections/AboutSection';
import CareerSection from '../components/sections/CareerSection';
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
        <Separator height="20vh"/>
        <CareerSection/>
      </main>

      <footer>
      </footer>
    </div>
  )
}