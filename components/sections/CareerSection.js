import styles from "../../styles/Career.module.css";
import Card from "../common/Card";
import graphics2 from "../../public/graphics/Graphics 2.svg";
import graphics3 from "../../public/graphics/Graphics 3.svg";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";
import clsx from "clsx";
import List from '../common/List'
import { useTranslation } from "next-i18next";

export default function CareerSection() {
  const [crtIndex, setCrtIndex] = useState(0);
  const { t } = useTranslation()
  const jobs = t('careers', { returnObjects: true })

  const handleJobChange = (index) => {
    setCrtIndex(index);
  };

  const jobMapper = (job, index) => {
    return (
      <div className={styles.jobContainer} key={`job-${index}`}>
        <Button
          type="text"
          onClick={() => handleJobChange(index)}
          active={crtIndex === index}
          className={styles.jobTitle}
        >
          {job.name}
        </Button>
        <p className={styles.period}>{job.period}</p>
      </div>
    );
  };

  const jobDescriptionMapper = (job, index) => {
    const translate = `${(index - crtIndex) * 200}vh`;
    const duration = 0.8

    return (
      <div
        key={`job-description-${index}`}
        className={styles.descriptionContainer}
        style={{
          transform: `translateY(${translate})`,
          transition: `transform ${duration}s ease-in-out`,
        }}
      >
        {job.description}
        <List items={job.items} />
      </div>
    );
  }

  return (
    <section id="career" className={styles.container}>
      <h4 className={styles.sectionTitle}>{t('header.career')}</h4>
      <div className={clsx(styles.container, styles.cardContainer)}>
        <Image src={graphics2} className={styles.graphics2} alt="graphics" />
        <Image src={graphics3} className={styles.graphics3} alt="graphics" />
        <Card style={{height: "auto"}}>
          <div className={styles.twoColumns}>
            <div className={styles.scrollContainer}>
              <div className={styles.leftColumn}>{jobs.map(jobMapper)}</div>
            </div>
            <div className={styles.rightColumn}>
              {jobs.map(jobDescriptionMapper)}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
