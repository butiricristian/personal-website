import Image from "next/image";
import iMac from "../../public/tools/iMac.svg";
import macbook from "../../public/tools/Macbook.svg";
import apiImage from "../../public/tools/API.svg";
import graphics4 from "../../public/graphics/Graphics 4.svg";
import graphics5 from "../../public/graphics/Graphics 5.svg";
import styles from "../../styles/Projects.module.css";
import List from "../common/List";
import { useTranslation } from "next-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  const images = { macbook, iMac, apiImage };

  const projectRenderer = (project, index) => {
    const img = (
      <div className={styles.imageColumn}>
        <Image src={images[project.image]} alt="device" />
      </div>
    );
    const description = (
      <div className={styles.descriptionColumn}>
        <h3>{project.name}</h3>
        {project.url && (
          <a href={project.url} className={styles.url} target="_blank">
            {project.url}
          </a>
        )}
        <p className={styles.description}>{project.description}</p>
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
      <h4 className={styles.sectionTitle}>{t('header.projects')}</h4>
      {projects.map(projectRenderer)}
      <Image src={graphics4} alt="graphics" className={styles.graphics4} />
      <Image src={graphics5} alt="graphics" className={styles.graphics5} />
    </section>
  );
}
