import styles from './Projects.module.css';
import Pill from '../Pill/Pill';
const ProjectCard = ({ key, title, description, img, languages, imgAlt }) => {
  return (
    <div className={styles.projectCard} id={key}>
      <div className={styles.projectContent}>
        <div className={styles.projectDetails}>
          <div className={styles.projectTopRow}>         
            <img className={styles.projectImg} src={img} alt={imgAlt} />
            <h3 className={styles.projectTitle}>{title}</h3>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.languageArrowContainer}>
        <div className={styles.languageContainer}>
          {languages.map((language, index) => (
            <Pill data={language} key={index} />
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;