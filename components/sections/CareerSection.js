import styles from "../../styles/Career.module.css";
import Card from "../common/Card";
import graphics2 from "../../public/graphics/Graphics 2.svg";
import graphics3 from "../../public/graphics/Graphics 3.svg";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";
import clsx from "clsx";

export default function CareerSection() {
  const [crtIndex, setCrtIndex] = useState(0);

  const jobs = [
    {
      name: "Freelancing via Toptal @&Open",
      period: "Sep 2022 - Feb 2023",
      description: "Freelancing via Toptal @&Open",
    },
    {
      name: "Freelancing via Toptal @Influence Mobile",
      period: "Mar 2021 - Aug 2022",
      description: "Freelancing via Toptal @Influence Mobile",
    },
    {
      name: "Freelancing via Toptal @Spaceback",
      period: "Mar 2021 - Jun 2021",
      description: "Freelancing via Toptal @Spaceback",
    },
    {
      name: "Take Off Labs",
      period: "Feb 2019 - Mar 2021",
      description: "Take Off Labs",
    },
    {
      name: "Accesa",
      period: "Jul 2018 - Feb 2019",
      description: "Accesa",
    },
    {
      name: "Take Off Labs",
      period: "Feb 2016 - Jul 2018",
      description: "Take Off Labs",
    },
  ];

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
    const translate = `${(index - crtIndex) * 500}px`;
    const duration = 0.8

    return (
      <div
        className={styles.descriptionContainer}
        style={{
          transform: `translateY(${translate})`,
          transition: `transform ${duration}s ease-in-out`,
        }}
      >
        {job.description}
      </div>
    );
  }

  return (
    <section id="career" className={styles.container}>
      <h4 className={styles.sectionTitle}>Career</h4>
      <div className={clsx(styles.container, styles.cardContainer)}>
        <Image src={graphics2} className={styles.graphics2} alt="graphics" />
        <Image src={graphics3} className={styles.graphics3} alt="graphics" />
        <Card height="auto">
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
