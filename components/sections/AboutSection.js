import styles from '../../styles/About.module.css'
import Card from '../common/Card'
// import avatar from '../../public/Avatar.png'
import avatar2 from '../../public/toptal-profile.jpg'
import graphics1 from '../../public/graphics/Graphics 1.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function AboutSection() {
  const { t } = useTranslation(['translation'])
  const aboutMe = (
    <>
      {t('aboutMe.text.0')}
      <br/><br/>
      {t('aboutMe.text.1')}
      <br/><br/>
      {t('aboutMe.text.2')}
      <br/><br/>
      {t('aboutMe.text.3')}
      <br/><br/>
      {t('aboutMe.text.4')}
    </>
  )

  return (
    <section id="about" className={styles.container}>
      <Image src={graphics1} className={styles.graphics1} alt="graphics"/>
      <Card>
        <Image src={avatar2} alt="avatar" className={styles.avatar} />
        <h4 className={styles.cardTitle}>{t('aboutMe.title')}</h4>
        <div className={styles.content}>
          <p>{aboutMe}</p>
        </div>
      </Card>
    </section>
  )
}