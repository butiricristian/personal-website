import styles from "../../styles/Header.module.css";
import Button from "./Button";
import Image from "next/image";
import logo from "../../public/Cristian B..svg";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Drawer from "./Drawer";

export const LINKS = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Career", href: "#career" },
  { title: "Projects", href: "#projects" },
  { title: "Testimonials", href: "#testimonials" },
];

export default function Header({ showDrawer, setShowDrawer }) {
  const navMapper = ({ title, href }) => {
    return (
      <Button underline key={href} type="text" href={href} className={styles.navLink}>
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

  const BurgerButton = (
    <div className={styles.burgerContainer} style={{ top: visible || showDrawer ? 0 : "-100px"}}>
      <div
        id={styles["nav-icon3"]}
        onClick={() => setShowDrawer(!showDrawer)}
        className={clsx({ [styles.open]: showDrawer })}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )

  return (
    <>
      <nav className={styles.container} style={{ top: visible ? 0 : "-100px", zIndex: 30}}>
        <Image src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.separator} />
        <div className={styles.navContainer}>
          {LINKS.map(navMapper)}
          <Button href="mailto:butiri.cristian@gmail.com" className={styles.contact}>Contact</Button>
        </div>
      </nav>
      {BurgerButton}
      <Drawer show={showDrawer} setShow={setShowDrawer} />
    </>
  );
}
