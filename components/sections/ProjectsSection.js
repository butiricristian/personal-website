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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lorem et neque porttitor vehicula. Suspendisse a tellus tempus, ultricies purus ac, fermentum tellus:",
      items: [
        "Praesent elementum nisi eget leo finibus, sit amet placerat torto",
        "Nam sit amet scelerisque felis, porta tempus augue. Nulla nunc purus, pharetra eget porttitor a, bibendum sit amet lacus",
        "Nunc nisi turpis, bibendum id dignissim ac, porta non mi. Nam venenatis dolor nibh, vitae tempus risus convallis sit amet",
      ],
    },
    {
      name: "Flourish",
      url: "",
      image: macbook,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lorem et neque porttitor vehicula. Suspendisse a tellus tempus, ultricies purus ac, fermentum tellus:",
      items: [
        "Praesent elementum nisi eget leo finibus, sit amet placerat torto",
        "Nam sit amet scelerisque felis, porta tempus augue. Nulla nunc purus, pharetra eget porttitor a, bibendum sit amet lacus",
        "Nunc nisi turpis, bibendum id dignissim ac, porta non mi. Nam venenatis dolor nibh, vitae tempus risus convallis sit amet",
      ],
    },
    {
      name: "eCommerce API",
      url: "",
      image: apiImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lorem et neque porttitor vehicula. Suspendisse a tellus tempus, ultricies purus ac, fermentum tellus:",
      items: [
        "Praesent elementum nisi eget leo finibus, sit amet placerat torto",
        "Nam sit amet scelerisque felis, porta tempus augue. Nulla nunc purus, pharetra eget porttitor a, bibendum sit amet lacus",
        "Nunc nisi turpis, bibendum id dignissim ac, porta non mi. Nam venenatis dolor nibh, vitae tempus risus convallis sit amet",
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
          <List items={project.items} />
        </p>
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
      {projects.map(projectRenderer)}
      <Image src={graphics4} alt="graphics" className={styles.graphics4}/>
      <Image src={graphics5} alt="graphics" className={styles.graphics5}/>
    </section>
  );
}
