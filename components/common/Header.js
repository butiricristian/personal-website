import styles from "../../styles/Header.module.css";
import Button from "./Button";
import Image from "next/image";
import logo from "../../public/Cristian B..svg";
import { useState, useEffect } from "react";
import Drawer from "./Drawer";
import clsx from "clsx";

export const LINKS = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Career", href: "#career" },
  { title: "Projects", href: "#projects" },
  { title: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const navMapper = ({ title, href }) => {
    return (
      <Button key={href} type="text" href={href} className={styles.navLink}>
        {title}
      </Button>
    );
  };

  const [yOffset, setYOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yOffset]);

  async function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <nav className={styles.container} style={{ top: visible ? 0 : "-100px" }}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.separator} />
      <div className={styles.navContainer}>
        {LINKS.map(navMapper)}
        <Button className={styles.contact}>Contact</Button>
      </div>
      <div id={styles["nav-icon3"]} onClick={() => setShowDrawer(!showDrawer)} className={clsx({[styles.open]: showDrawer})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer show={showDrawer} setShow={setShowDrawer}/>
    </nav>
  );
}
