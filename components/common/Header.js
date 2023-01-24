import styles from "../../styles/Header.module.css";
import Button from "./Button";
import Image from "next/image";
import logo from "../../public/Cristian B..svg";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Drawer from "./Drawer";
import { useTranslation } from "next-i18next";
import { useAppContext } from "../context/state";
import ContactButton from "../shared/ContactButton";

export const LINKS = [
  { title: "home", href: "#home" },
  { title: "about", href: "#about" },
  { title: "career", href: "#career" },
  { title: "projects", href: "#projects" },
  { title: "testimonials", href: "#testimonials" },
  { title: "resume", href: "/resume.pdf", target: '_blank' },
];

export default function Header() {
  const { t } = useTranslation();

  const navMapper = ({ title, href, target }) => {
    return (
      <Button
        underline
        key={href}
        type="text"
        href={href}
        className={styles.navLink}
        target={target}
      >
        {t(`header.${title}`)}
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

  return (
    <>
      <nav
        className={styles.container}
        style={{ top: visible ? 0 : "-100px", zIndex: 30 }}
      >
        <Image src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.separator} />
        <div className={styles.navContainer}>
          {LINKS.map(navMapper)}
          <ContactButton className={styles.contact} >
            Contact
          </ContactButton>
        </div>
      </nav>
      <Drawer burgerButtonProps={{visible}}/>
    </>
  );
}
