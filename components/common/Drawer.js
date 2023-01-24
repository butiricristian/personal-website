import styles from "../../styles/Drawer.module.css";
import { LINKS } from "./Header";
import Button from "./Button";
import { useTranslation } from "next-i18next";
import ContactButton from "../shared/ContactButton";
import { useState } from "react";
import clsx from "clsx";
import Overlay from "./Overlay";

const DRAWER_WIDTH = 320;

export default function Drawer({ burgerButtonProps }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const navMapper = ({ title, href }, index) => {
    return (
      <Button
        key={href}
        type="text"
        href={href}
        className={styles.navLink}
        onClick={() => setShow(false)}
        underline
        style={{
          transition: `transform 0.3s ease ${(index + 1) * 0.03}s`,
          transform: `translate(${show ? 0 : DRAWER_WIDTH}px)`,
        }}
      >
        {t(`header.${title}`)}
      </Button>
    );
  };

  const BurgerButton = (
    <div
      className={styles.burgerContainer}
      style={{ top: burgerButtonProps.visible || show ? 0 : "-100px" }}
    >
      <div
        id={styles["nav-icon3"]}
        onClick={() => setShow(!show)}
        className={clsx({ [styles.open]: show })}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={styles.drawer}
        style={{
          right: show ? 0 : -DRAWER_WIDTH,
          width: DRAWER_WIDTH,
          zIndex: 150,
        }}
      >
        <div className={styles.container}>
          {LINKS.map(navMapper)}
          <ContactButton
            className={styles.contact}
            style={{
              transition: `transform 0.3s ease ${LINKS.length * 0.03}s`,
              transform: `translate(${show ? 0 : DRAWER_WIDTH}px)`,
            }}
          >
            Contact
          </ContactButton>
        </div>
        {BurgerButton}
      </div>
      <Overlay
        showOverlay={show}
        setShowOverlay={setShow}
        onClick={() => setShow(false)}
        zIndex={140}
      />
    </>
  );
}
