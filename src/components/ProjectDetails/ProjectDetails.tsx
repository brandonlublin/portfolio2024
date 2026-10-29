import { ReactNode } from 'react';
import { Project } from '../../types';
import { profile } from '../../data/data';
import FriendPic from '../FriendPic/FriendPic';
import { InfoBox, InfoTable } from '../InfoBox/InfoBox';
import styles from './ProjectDetails.module.css';

type ProjectProps = {
  project: Project;
  onBack: () => void;
};

const ProjectDetails = ({ project, onBack }: ProjectProps) => {
  const links: { label: string; value: ReactNode }[] = [
    { label: 'Source', value: <a href={project.gitHubLink} target='_blank' rel='noopener noreferrer'>View on GitHub</a> },
    { label: 'Stack', value: project.languages.join(', ') },
  ];
  if (project.liveDemoUrl) {
    links.unshift({ label: 'Live demo', value: <a href={project.liveDemoUrl} target='_blank' rel='noopener noreferrer'>View live demo</a> });
  }

  return (
    <div className={styles.page}>
      <button className={styles.back} type='button' onClick={onBack}>
        « Back to {profile.name}&apos;s profile
      </button>
      <div className={styles.profile}>
        <div className={styles.column}>
          <section>
            <h1 className={styles.title}>{project.title}</h1>
            <FriendPic project={project} size='large' />
            <p className={styles.status}>Built by {profile.fullName}</p>
          </section>
          <InfoBox title={`${project.title}'s Details`}>
            <InfoTable rows={links} />
          </InfoBox>
        </div>

        <div className={styles.column}>
          <p className={styles.extended}>{project.title} is in your extended network</p>
          <InfoBox title={`About ${project.title}`}>
            <p className={styles.text}>{project.description}</p>
          </InfoBox>
          {project.research.length > 0 && (
            <InfoBox title='Research'>
              <ul className={styles.list}>
                {project.research.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoBox>
          )}
          {project.capabilities.length > 0 && (
            <InfoBox title='Capabilities'>
              <ul className={styles.list}>
                {project.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoBox>
          )}
          {project.todos && project.todos.length > 0 && (
            <InfoBox title='To-Dos'>
              <ul className={styles.list}>
                {project.todos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoBox>
          )}
          {project.screenshots.length > 0 && (
            <InfoBox title={`${project.title}'s Photos`} variant='friends'>
              <ul className={styles.photos}>
                {project.screenshots.map((shot) => (
                  <li key={shot.imgUrl}>
                    <a href={shot.imgUrl} target='_blank' rel='noopener noreferrer'>
                      <img src={shot.imgUrl} alt={shot.label} loading='lazy' />
                    </a>
                    <span>{shot.label}</span>
                  </li>
                ))}
              </ul>
            </InfoBox>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
