import Image from "next/image";
import graphics6 from "../../public/graphics/Graphics 6.svg";
import styles from "../../styles/Testimonials.module.css";
import { useTranslation } from "next-i18next";
import Modal from "../common/Modal";
import { useState } from "react";
import TestimonialContent from "../shared/TestimonialContent";
import Card from "../common/Card";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });

  const [crtTestimonialIndex, setCrtTestimonialIndex] = useState(null);
  const [showViewMoreModal, setShowViewMoreModal] = useState(false);

  const testimonialRenderer = (testimonial, index) => {
    const handleClick = () => {
      setCrtTestimonialIndex(index);
      setShowViewMoreModal(true);
    };

    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "0 2rem" }}
        key={`testimonial-${index}`}
      >
        <Card maxWidth="500px">
          <TestimonialContent
            testimonial={testimonial}
            onViewMoreClick={handleClick}
            viewAll={false}
          />
        </Card>
      </div>
    );
  };

  return (
    <section className={styles.container} id="testimonials">
      <h4 className={styles.sectionTitle}>{t("header.testimonials")}</h4>
      <div className={styles.carouselContainer}>
        {testimonials.map(testimonialRenderer)}
      </div>
      <Image
        priority
        src={graphics6}
        alt="graphics"
        className={styles.graphics6}
      />
      <Modal showModal={showViewMoreModal} setShowModal={setShowViewMoreModal}>
        {crtTestimonialIndex && (
          <TestimonialContent
            testimonial={testimonials[crtTestimonialIndex]}
            viewAll={true}
          />
        )}
      </Modal>
    </section>
  );
}
