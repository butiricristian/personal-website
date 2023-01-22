import Image from "next/image";
import graphics8 from "../../public/graphics/Graphics 8.svg";
import facebook from "../../public/social/Facebook.svg";
import linkedin from "../../public/social/LinkedIn.svg";
import github from "../../public/social/Github.svg";
import figma from "../../public/social/Figma.svg";
import styles from "../../styles/Footer.module.css";
import Button from "../common/Button";

export default function FooterSection() {
  return (
    <section className={styles.container} id="footer">
      <Image src={graphics8} alt="graphics" className={styles.graphics8} />
      <div className={styles.content}>
        <h1>Want to digitalize your business?</h1>
        <Button href="mailto:butiri.cristian@gmail.com" size="lg">
          Let's get in touch
        </Button>
        <div className={styles.social}>
          <a href="https://www.facebook.com/butiri.cristian">
            <Image src={facebook} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/cristian-butiri-614598127/">
            <Image src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/butiricristian">
            <Image src={github} alt="github" />
          </a>
          <a href="https://www.figma.com/files/user/1194254918360199898?fuid=1194254918360199898">
            <Image src={figma} alt="figma" />
          </a>
        </div>
        <div className={styles.copyright}>
          <h4>Made by Cristian Butiri © 2023</h4>
        </div>
      </div>
    </section>
  );
}
