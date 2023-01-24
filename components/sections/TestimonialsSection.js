import Image from "next/image";
import graphics6 from "../../public/graphics/Graphics 6.svg";
import styles from "../../styles/Testimonials.module.css";
import { useTranslation } from "next-i18next";
import Modal from "../common/Modal";
import { useEffect, useState } from "react";
import TestimonialContent from "../shared/TestimonialContent";
import Card from "../common/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });

  const [crtTestimonialIndex, setCrtTestimonialIndex] = useState(null);
  const [showViewMoreModal, setShowViewMoreModal] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (typeof window == undefined) return;

    if(window.matchMedia('(max-width: 768px)').matches) setSlidesPerView(1)
    if(window.matchMedia('(min-width: 768px)').matches) setSlidesPerView(2)
    if(window.matchMedia('(min-width: 1500px)').matches) setSlidesPerView(3)

  }, [])

  const testimonialRenderer = (testimonial, index) => {
    const handleClick = () => {
      setCrtTestimonialIndex(index);
      setShowViewMoreModal(true);
    };

    return (
      <SwiperSlide
        key={`testimonial-${index}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card maxWidth="500px" style={{height: '700px'}}>
          <TestimonialContent
            testimonial={testimonial}
            onViewMoreClick={handleClick}
            viewAll={false}
          />
        </Card>
      </SwiperSlide>
    );
  };

  return (
    <section className={styles.container} id="testimonials">
      <h4 className={styles.sectionTitle}>{t("header.testimonials")}</h4>
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={slidesPerView}
          spaceBetween={50}
          style={{ width: "100%", margin: "0", maxWidth: '2000px' }}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={true}
          simulateTouch={false}
        >
          {testimonials.map(testimonialRenderer)}
        </Swiper>
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
