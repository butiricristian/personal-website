import Head from "next/head";
import Separator from "../components/common/Separator";
import AboutSection from "../components/sections/AboutSection";
import CareerSection from "../components/sections/CareerSection";
import FooterSection from "../components/sections/FooterSection";
import HomeSection from "../components/sections/HomeSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cristian Butiri - Senior Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <HomeSection />
        <AboutSection />
        <Separator height="20vh" />
        <CareerSection />
        <ProjectsSection />
        <TestimonialsSection />
        <Separator height="20vh" />
        <FooterSection />
      </main>

      <footer></footer>
    </div>
  );
}
