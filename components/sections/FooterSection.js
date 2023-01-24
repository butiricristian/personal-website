import Image from "next/image";
import graphics8 from "../../public/graphics/Graphics 8.svg";
import facebook from "../../public/social/Facebook.svg";
import linkedin from "../../public/social/LinkedIn.svg";
import github from "../../public/social/Github.svg";
import figma from "../../public/social/Figma.svg";
import styles from "../../styles/Footer.module.css";
import ContactButton from "../shared/ContactButton";
import { useTranslation } from "next-i18next";

export default function FooterSection() {
  const { t } = useTranslation()

  return (
    <section className={styles.container} id="footer">
      <Image priority src={graphics8} alt="graphics" className={styles.graphics8} />
      <div className={styles.content}>
        <h1>{t('footer.want_to_digitalize_your_business')}</h1>
        <ContactButton size="lg">
          {t('footer.lets_get_in_touch')}
        </ContactButton>
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
          <h4>{t('footer.made_by')}</h4>
        </div>
      </div>
    </section>
  );
}
