import { Link } from 'react-router-dom';
import { profile } from '../../data/data';
import { allProjects, projectSlug } from '../../utils/projects';
import FriendPic from '../FriendPic/FriendPic';
import { InfoBox } from '../InfoBox/InfoBox';
import styles from './TopFriends.module.css';

const TopFriends = () => {
  return (
    <InfoBox title={`${profile.name}'s Friend Space`} id='top8' variant='friends'>
      <p className={styles.count}>
        {profile.name} has <b>{allProjects.length}</b> projects.
      </p>
      <ul className={styles.grid}>
        {allProjects.slice(0, 8).map((project) => (
          <li key={project.id}>
            <Link className={styles.friend} to={`/project/${projectSlug(project)}`}>
              <span className={styles.name}>{project.title}</span>
              <FriendPic project={project} />
            </Link>
          </li>
        ))}
      </ul>
    </InfoBox>
  );
};

export default TopFriends;
