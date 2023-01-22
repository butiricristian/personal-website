import styles from "../../styles/Home.module.css";
import Button from "../common/Button";
import development from "../../public/Development2.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function HomeSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.twoColumns} id="home">
      <div className={styles.leftColumn}>
        <h3>{t("home.hi_my_name_is")}</h3>
        <h1>Cristian Butiri</h1>
        <h4>{t("home.subtitle")}</h4>
        <Button
          href="mailto:butiri.cristian@gmail.com"
          style={{ marginTop: "4rem" }}
          size="lg"
        >
          {t("home.get_in_touch")}
        </Button>
      </div>
      <div className={styles.rightColumn}>
        <Image src={development} alt="development" className={styles.image} />
      </div>
    </section>
  );
}
