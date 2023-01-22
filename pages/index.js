import Head from "next/head";
import Header from "../components/common/Header";
import AboutSection from "../components/sections/AboutSection";
import CareerSection from "../components/sections/CareerSection";
import FooterSection from "../components/sections/FooterSection";
import HomeSection from "../components/sections/HomeSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Overlay from "../components/common/Overlay";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LoadingScreen from "../components/loading/LoadingScreen";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'translation',
      ])),
    },
  }
}

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <Head>
        <title>Cristian Butiri - Senior Software Engineer</title>
        <link rel="icon" href="/CB.ico" />
      </Head>

      <LoadingScreen />
      <Overlay show={showDrawer} setShow={setShowDrawer} />
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

      <main className={styles.container}>
        <HomeSection />
        <AboutSection />
        <CareerSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>

      <footer></footer>
    </div>
  );
}
