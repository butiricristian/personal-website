import styles from "../../styles/Career.module.css";
import Card from "../common/Card";
import graphics2 from "../../public/graphics/Graphics 2.svg";
import graphics3 from "../../public/graphics/Graphics 3.svg";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";
import clsx from "clsx";
import List from '../common/List'

export default function CareerSection() {
  const [crtIndex, setCrtIndex] = useState(0);

  const jobs = [
    {
      name: "Freelancing via Toptal @&Open",
      period: "Sep 2022 - Feb 2023",
      description: "I was responsible with improving the experience of Customer Support Managers by adding new features such as:",
      items: [
        "Built an administrative page for campaigns removing 80% of the software engineers' support work related to this area of the project",
        "Helped with the integration of a new client by customizing 2 new themes for their React front-end and for their Slim email templates",
        "Surfaced to the UI errors coming from fulfiller integrations enabling CSM's to solve their issues independently and removing another 20% of engineers' needed support",
      ]
    },
    {
      name: "Freelancing via Toptal @Influence Mobile",
      period: "Mar 2021 - Aug 2022",
      description: "",
      items: [
        "Designed and developed a new web application from the ground up, using Ruby on Rails 6 and React 17+, to manage various mobile games' and apps' campaigns and offers for more than 100 clients",
        "Integrated the new app with existing systems by using AWS's SQS to keep both systems in sync while handling 1000+ messages per day",
        "Created a real-time notification system by using web sockets to inform users of specific messages processed through the SQS queue to improve user experience from a score of 7.3 to 8.6",
        "Handled production deployments and maintenance of the web app while keeping a test coverage above 90%",
        "Collaborated closely with the PM and the clients by having weekly and daily meetings to establish new features and find solutions for existing issues"
      ]
    },
    {
      name: "Freelancing via Toptal @Spaceback",
      period: "Mar 2021 - Jun 2021",
      description: "",
      items: [
        "Improved error tracking and the time required for debugging by 80%, by adding new relevant details to the context of the errors reported",
        "Refactored 7 classes used to parse webpages by extracting the common functionality into a superclass and using inheritance and composition",
        "Adapted 1 page written in Stimulus to include React Components in order to improve code readability and page loading times"
      ]
    },
    {
      name: "Take Off Labs",
      period: "Feb 2019 - Mar 2021",
      description: "",
      items: [
        "Added 10+ endpoints to a REST API used by iOS and Android mobile apps, to allow golf players to register for events and track scores",
        "Converted a classic HAML Ruby page to React components and improved the response times from about 30 seconds to 3 seconds per request using caching, pagination, and other optimization methods",
        "Engineered an integration system with a different provider to synchronize more than 10000 golf players' data, both on a daily basis as well as whenever an SSO sign-in occurred",
        "Generated a new Player Dashboard using React and Ruby on Rails accessed by 1000+ users daily",
        "Extended the member profile page with 2 new pages loaded asynchronously through AJAX requests",
        "Created 1 background job to handle multi-threaded requests to an external API and process the results",
      ]
    },
    {
      name: "Accesa",
      period: "Jul 2018 - Feb 2019",
      description: "",
      items: [
        "Participated in creating an internal management tool for the HR department to track the interview processes for new internship candidates, by utilizing Java 8, Angular 2, PostgreSQL, and CQRS as an architecture",
        "Contributed to a B2B eCommerce platform for tracking orders to and from multiple physical stores, using Java 8 and Angular 2",
        "Experienced working in the Hybris ecosystem through an application built for training purposes in less than 6 weeks",
      ]
    },
    {
      name: "Take Off Labs",
      period: "Feb 2016 - Jul 2018",
      description: "Joined Take Off Labs as an intern, giving me the opportunity to work on a variety of projects:",
      items: [
        "Developed a Stock Portfolio Management System which required scraping data from 2 sources: Yahoo Finance and Bucharest Stock Exchange",
        "Worked on a Freight Management System by adding 50+ features and bug fixes",
        "Improved the responsiveness of the company's website using Bootstrap 3 classes and helpers"
      ]
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
    const translate = `${(index - crtIndex) * 200}vh`;
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
        <List items={job.items} />
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
