import Image from "next/image";
import graphics6 from "../../public/graphics/Graphics 6.svg";
import graphics7 from "../../public/graphics/Graphics 7.svg";
import avatar from "../../public/Avatar.png";
import star from "../../public/Star.svg";
import styles from "../../styles/Testimonials.module.css";
import Card from "../common/Card";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Separator from "../common/Separator";

export default function TestimonialsSection() {
  const testimonials = [
    {
      avatar: avatar,
      author: "Ziv Gonen",
      role: "VP of Engineering @Influnece Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis risus erat. Donec ut justo id quam vulputate tincidunt. Quisque vitae dui a justo aliquet condimentum et id est. In bibendum dignissim nisl, vitae auctor orci ultrices non. Quisque sit amet semper dui. Nullam rhoncus pellentesque urna, id malesuada odio.",
      rating: 5,
    },
    {
      avatar: avatar,
      author: "Fintan Fairmichael",
      role: "Director of Engineering @&Open",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis risus erat. Donec ut justo id quam vulputate tincidunt. Quisque vitae dui a justo aliquet condimentum et id est. In bibendum dignissim nisl, vitae auctor orci ultrices non. Quisque sit amet semper dui. Nullam rhoncus pellentesque urna, id malesuada odio.",
      rating: 5,
    },
  ];

  const ratingRenderer = (numberOfStars) => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<Image style={{width: '50px', margin: '5px'}} src={star} alt="star" key={`star-${i}`}/>);
    }

    return stars;
  };

  const testimonialRenderer = (testimonial, index) => {
    return (
      <div style={{width: '800px', display: 'flex', justifyContent: 'center'}}>
        <Card width="600px" height="80vh" key={`testimonial-${index}`}>
          <Image width="50px" src={testimonial.avatar} alt="avatar" />
          <h4 className={styles.author}>{testimonial.author}</h4>
          <h5 className={styles.role}>{testimonial.role}</h5>
          <p className={styles.description}>{testimonial.description}</p>
          <div className={styles.ratingContainer}>
            {ratingRenderer(testimonial.rating)}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h4 className={styles.sectionTitle}>Testimonials</h4>
      <div className={styles.carouselContainer}>
        {testimonials.map(testimonialRenderer)}
      </div>
      <Image src={graphics6} alt="graphics" className={styles.graphics6} />
    </section>
  );
}
