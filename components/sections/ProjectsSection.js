import Image from "next/image";
import iMac from "../../public/tools/iMac.svg";
import macbook from "../../public/tools/Macbook.svg";
import apiImage from "../../public/tools/API.svg";
import graphics4 from '../../public/graphics/Graphics 4.svg'
import graphics5 from '../../public/graphics/Graphics 5.svg'
import styles from "../../styles/Projects.module.css";
import List from "../common/List";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Draw Cells",
      url: "https://draw-cells.netlify.app",
      image: iMac,
      description:
        "A project co-founded by me and my friend Jane who is a PhD at Oxford. The aim of the platform is to make presentations easier and less time consuming for scientists",
      items: [
        "Was built with React 17+ and currently has a Firebase back-end",
        "Uses Konva as a canvas library allowing users to drag and drop, resize and do all kinds of customizations for their sprites",
        "Uses React Spring 4 as an animation tool",
      ],
    },
    {
      name: "Flourish",
      url: "",
      image: macbook,
      description:
        "Flourish was created as a replacement for a company's service that used to manage campaigns and offers for mobile games and apps. The project was designed and built by me to help the company I was working for with their business",
      items: [
        "Created with Ruby on Rails 6 for the back-end and React for the front-end",
        "Integrated with a legacy systems by using AWS's SQS queing system",
        "Built a real-time notification system for the users to know when their offers or campaings stopped working",
      ],
    },
    {
      name: "eCommerce API",
      url: "",
      image: apiImage,
      description:
        "As a participant in Toptal's Node.js accelerator program, I was assigned with building 2 demo eCommerce services: a user authentication service and a product management service",
      items: [
        "The user service was built using Node.js, Express and Auth0 as an authentication server",
        "The products service was created with Node.js, Nest and MongoDB as a database",
        "Both services were exposing REST APIs documented with the help of Swagger",
      ],
    },
  ];

  const projectRenderer = (project, index) => {
    const img = (
      <div className={styles.imageColumn}>
        <Image src={project.image} alt="device" />
      </div>
    );
    const description = (
      <div className={styles.descriptionColumn}>
        <h3>{project.name}</h3>
        {project.url && <a href={project.url} className={styles.url} target="_blank">{project.url}</a>}
        <p className={styles.description}>
          {project.description}
        </p>
        <List items={project.items} />
      </div>
    );

    if (index % 2 === 0) {
      return (
        <div className={styles.twoColumns} key={`project-${index}`}>
          {img}
          {description}
        </div>
      );
    } else {
      return (
        <div className={styles.twoColumns} key={`project-${index}`}>
          {description}
          {img}
        </div>
      );
    }
  };

  return (
    <section className={styles.container} id="projects">
      <h4 className={styles.sectionTitle}>Projects</h4>
      {projects.map(projectRenderer)}
      <Image src={graphics4} alt="graphics" className={styles.graphics4}/>
      <Image src={graphics5} alt="graphics" className={styles.graphics5}/>
    </section>
  );
}
