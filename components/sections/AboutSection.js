import styles from '../../styles/About.module.css'
import Card from '../common/Card'
import avatar from '../../public/Avatar.png'
import graphics1 from '../../public/graphics/Graphics 1.svg'
import Image from 'next/image'

export default function AboutSection() {
  const aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, mauris eget posuere congue, ex libero aliquet mi, vel suscipit metus sem ut velit. Vivamus ut metus in ligula mollis fringilla eu vel lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas est nulla, viverra a sem ut, luctus consectetur nunc. In vehicula cursus ante mollis condimentum. Fusce tempor euismod laoreet. Phasellus fermentum porttitor velit sit amet scelerisque. Phasellus placerat dapibus tempus.'

  return (
    <section id="about" className={styles.container}>
      <Image src={graphics1} className={styles.graphics1} alt="graphics"/>
      <Card>
        <Image src={avatar} alt="avatar"/>
        <h4 className={styles.cardTitle}>About me</h4>
        <div className={styles.content}>
          <p>{aboutMe}</p>
        </div>
      </Card>
    </section>
  )
}