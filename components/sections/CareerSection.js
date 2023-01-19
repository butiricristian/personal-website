import styles from "../../styles/Career.module.css";
import Card from "../common/Card";
import graphics2 from "../../public/graphics/Graphics 2.svg";
import graphics3 from "../../public/graphics/Graphics 3.svg";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";

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
      <div key={`job-${index}`}>
        <Button
          type="text"
          style={{ width: "100%", marginBottom: "0.2rem" }}
          onClick={() => handleJobChange(index)}
          active={crtIndex === index}
        >
          {job.name}
        </Button>
        <p className={styles.period}>{job.period}</p>
      </div>
    );
  };

  return (
    <section id="career" className={styles.container}>
      <h4 className={styles.sectionTitle}>Career</h4>
      <div className={styles.container} style={{ padding: "0 4rem" }}>
        <Image src={graphics2} className={styles.graphics2} alt="graphics"/>
        <Image src={graphics3} className={styles.graphics3} alt="graphics"/>
        <Card>
          <div className={styles.twoColumns}>
            <div className={styles.leftColumn}>{jobs.map(jobMapper)}</div>
            <div className={styles.rightColumn}>{jobs[crtIndex].description}</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
