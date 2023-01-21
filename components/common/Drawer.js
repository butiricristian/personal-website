import styles from "../../styles/Drawer.module.css";
import { LINKS } from "./Header";
import Button from "./Button";

const DRAWER_WIDTH = 320;

export default function Drawer({ show, setShow }) {
  const navMapper = ({ title, href }) => {
    return (
      <Button
        key={href}
        type="text"
        href={href}
        className={styles.navLink}
        onClick={() => setShow(false)}
        underline
      >
        {title}
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
        <Button className={styles.contact}>Contact</Button>
      </div>
    </div>
  );
}
