import styles from "../../styles/Drawer.module.css";
import { LINKS } from "./Header";
import Button from "./Button";
import { useTranslation } from "next-i18next";

const DRAWER_WIDTH = 320;

export default function Drawer({ show, setShow }) {
  const { t } = useTranslation();

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
          transition: `transform 0.3s ease ${(index+1) * 0.03}s`,
          transform: `translate(${show ? 0 : DRAWER_WIDTH}px)`
        }}
      >
        {t(`header.${title}`)}
      </Button>
    );
  };

  return (
    <div
      className={styles.drawer}
      style={{ right: show ? 0 : -DRAWER_WIDTH, width: DRAWER_WIDTH, zIndex: 120 }}
    >
      <div className={styles.container}>
        {LINKS.map(navMapper)}
        <Button
          className={styles.contact}
          style={{
            transition: `transform 0.3s ease ${(LINKS.length) * 0.03}s`,
            transform: `translate(${show ? 0 : DRAWER_WIDTH}px)`
          }}
          href="mailto:butiri.cristian@gmail.com"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
