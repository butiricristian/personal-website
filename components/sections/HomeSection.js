import styles from '../../styles/Home.module.css'
import Button from '../common/Button'

export default function HomeSection() {
  return (
    <section className={styles.twoColumns} id="home">
      <div className={styles.leftColumn}>
        <h3>Hi, my name is</h3>
        <h1>Cristian Butiri</h1>
        <h4>Let's grow your business into the digital world</h4>
        <Button style={{marginTop: '4rem'}} size="lg">Get in touch</Button>
      </div>
      <div className={styles.rightColumn}>
      </div>
    </section>
  )
}