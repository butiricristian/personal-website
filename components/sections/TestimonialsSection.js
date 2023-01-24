import Image from "next/image";
import graphics6 from "../../public/graphics/Graphics 6.svg";
import avatar from "../../public/Avatar.png";
import ziv from "../../public/testimonials/Ziv.png";
import john from "../../public/testimonials/John.png";
import star from "../../public/Star.svg";
import styles from "../../styles/Testimonials.module.css";
import Card from "../common/Card";
import { useTranslation } from "next-i18next";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });
  const images = { avatar, ziv, john };

  const ratingRenderer = (numberOfStars) => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <Image
          style={{ width: "30px", margin: "5px" }}
          src={star}
          alt="star"
          key={`star-${i}`}
        />
      );
    }

    return stars;
  };

  const testimonialRenderer = (testimonial, index) => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "0 2rem" }}
        key={`testimonial-${index}`}
      >
        <Card maxWidth="500px">
          <Image width={110} src={images[testimonial.avatar]} alt="avatar" />
          <h4 className={styles.author}>{testimonial.author}</h4>
          <h5 className={styles.role}>{testimonial.role}</h5>
          <p className={styles.description}>
            <em>{testimonial.description}</em>
          </p>
          <div className={styles.ratingContainer}>
            {ratingRenderer(testimonial.rating)}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className={styles.container} id="testimonials">
      <h4 className={styles.sectionTitle}>{t('header.testimonials')}</h4>
      <div className={styles.carouselContainer}>
        {testimonials.map(testimonialRenderer)}
      </div>
      <Image priority src={graphics6} alt="graphics" className={styles.graphics6} />
    </section>
  );
}
