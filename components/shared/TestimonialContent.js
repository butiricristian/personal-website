import styles from "../../styles/TestimonialCard.module.css";
import Image from "next/image";
import avatar from "../../public/Avatar.png";
import ziv from "../../public/testimonials/Ziv.png";
import john from "../../public/testimonials/John.png";
import jane from "../../public/testimonials/Jane.png";
import star from "../../public/Star.svg";
import { useEffect, useState } from "react";

export default function TestimonialContent({ testimonial, onViewMoreClick, viewAll }) {
  const images = { avatar, ziv, john, jane };

  return (
    <div className={styles.container}>
      <Image width={110} src={images[testimonial.avatar]} alt="avatar" />
      <h4 className={styles.author}>{testimonial.author}</h4>
      <h5 className={styles.role}>{testimonial.role}</h5>
      <p className={styles.description}>
        <Description
          description={testimonial.description}
          onViewMoreClick={onViewMoreClick}
          viewAll={viewAll}
        />
      </p>
      <div className={styles.ratingContainer}>
        <Rating numberOfStars={testimonial.rating} />
      </div>
    </div>
  );
}

export function Description({ description, onViewMoreClick, viewAll }) {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(500)

  useEffect(() => {
    if (typeof window == undefined) return;

    const mql1 = window.matchMedia('(max-width: 600px)')
    const handler = () => {
      if(mql1.matches) setMaxDescriptionLength(400)
      else setMaxDescriptionLength(500)
    }
    handler()

    mql1.addEventListener('change', handler)

    return () => {
      mql1.removeEventListener('change', () => {})
    }

  }, [])

  if (viewAll || description.length < maxDescriptionLength) {
    return <em>{description}</em>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    onViewMoreClick();
  };

  return (
    <em>
      {`${description.substring(0, maxDescriptionLength)}... `}
      <span>
        <a href="#" className={styles.viewMore} onClick={handleClick}>
          View More
        </a>
      </span>
    </em>
  );
}

export function Rating({ numberOfStars }) {
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

  return <> {stars} </>;
}
