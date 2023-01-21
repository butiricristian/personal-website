import styles from '../../styles/About.module.css'
import Card from '../common/Card'
import avatar from '../../public/Avatar.png'
import avatar2 from '../../public/toptal-profile.jpg'
import graphics1 from '../../public/graphics/Graphics 1.svg'
import Image from 'next/image'

export default function AboutSection() {
  const aboutMe = (
    <>
      I've been working in the software engineering field for the past 6 years, specializing as a
      Full-Stack Web Developer. My career started as a Ruby on Rails intern working on projects such as a
      Stocks Portfolio Management System and a Freight Management System.
      <br/><br/>
      Aftwerads I started experimenting with Java and worked on 2 eCommerce projects, one using Spring Boot and Hibernate
      and one using SAP Hybris. However, after about a year and a half, I returned to my first love: Ruby 😄.
      <br/><br/>
      I've worked for 2 years on a huge Golf Tournament Management System helping me become a true Senior Engineer
      and even being promoted to a management position inside the company for a short while.
      <br/><br/>
      Lately I've discovered freelancing and my goal slowly became helping business owners build solid web systems
      that would finally allow them more time for their personal lives while also increasing their revenues.
      So far I've worked with businesses in the US as well as in Ireland and all the feedback I received
      was extremely positive.
      <br/><br/>
      So let's get in touch and start working on the business and life of your dreams 🚀'
    </>
  )

  return (
    <section id="about" className={styles.container}>
      <Image src={graphics1} className={styles.graphics1} alt="graphics"/>
      <Card>
        <Image src={avatar2} alt="avatar" className={styles.avatar} />
        <h4 className={styles.cardTitle}>Let me introduce myself</h4>
        <div className={styles.content}>
          <p>{aboutMe}</p>
        </div>
      </Card>
    </section>
  )
}