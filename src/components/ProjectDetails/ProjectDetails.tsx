import styles from './ProjectDetails.module.css';

interface ProjectProps {
  project: {
    img: string;
    imgAlt: string;
    title: string;
    description: string;
    research: string[];
    capabilities: string[];
    screenshots: { imgUrl: string; label: string }[];
    gitHubLink: string;
  };
  onBack: () => void;
}

const ProjectDetails = ({ project, onBack }: ProjectProps) => (
  <div className={styles.projectDetailsContent}>
    <button className={styles.backButton} onClick={onBack}>
      <span className={styles.icon}>←</span>
    </button>
    <div className={styles.projectHeader}>
      <img src={project.img} alt={project.imgAlt} />
      <h2 className={styles.projectTitle}>{project.title}</h2>
    </div>
    <div className={styles.projectDescription}>{project.description}</div>
    <div className={styles.projectResearch}>
      <div className={styles.sectionLabel}>Research</div>
      {project.research.map((research, index) => (
        <div key={index}>
          <li>{research}</li>
        </div>
      ))}
    </div>
    <div className={styles.projectResearch}>
      <div className={styles.sectionLabel}>Capabilities</div>
      {project.capabilities.map((capability, index) => (
        <div key={index}>
          <li>{capability}</li>
        </div>
      ))}
    </div>
    <div className={styles.projectScreenshots}>
      {project.screenshots.map((screenshot, index) => (
        <div key={index}>
          <img src={screenshot.imgUrl} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
          <div className={styles.screenshotLabel}>{screenshot.label}</div>
        </div>
      ))}
    </div>
    <div className={styles.gitHubLink}>
      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </div>
  </div>
);

export default ProjectDetails;
