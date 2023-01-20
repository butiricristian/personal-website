import styles from "../../styles/Drawer.module.css";
import { LINKS } from "./Header";
import Button from "./Button";

const DRAWER_WIDTH = 400;

export default function Drawer({ show, setShow }) {
  const navMapper = ({ title, href }) => {
    return (
      <Button
        key={href}
        type="text"
        href={href}
        className={styles.navLink}
        onClick={() => {
          console.log("Clicked link");
          setShow(false);
        }}
      >
        {title}
      </Button>
    );
  };

  return (
    <div
      className={styles.overlay}
      onClick={() => setShow(false)}
      style={{
        backgroundColor: show ? "rgba(0, 0, 0, 0.8)" : "transparent",
        zIndex: show ? 2 : -1,
        display: show ? "block" : "hide",
      }}
    >
      <div
        className={styles.drawer}
        style={{ right: show ? 0 : -DRAWER_WIDTH, width: DRAWER_WIDTH }}
      >
        {/* <div className={styles.closeButtonContainer}>
        </div> */}
        <div className={styles.container}>
          {LINKS.map(navMapper)}
          <Button className={styles.contact}>Contact</Button>
        </div>
      </div>
    </div>
  );
}
