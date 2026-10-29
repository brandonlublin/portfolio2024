import { Project } from '../../types';
import { projectHue, projectInitials } from '../../utils/projects';
import styles from './FriendPic.module.css';

type FriendPicProps = {
  project: Project;
  size?: 'small' | 'large';
};

const FriendPic = ({ project, size = 'small' }: FriendPicProps) => {
  const screenshot = project.screenshots[0]?.imgUrl;
  const className = size === 'large' ? `${styles.pic} ${styles.large}` : styles.pic;

  if (screenshot) {
    return <img className={className} src={screenshot} alt='' />;
  }

  const hue = projectHue(project);
  return (
    <span
      className={className}
      style={{ background: `linear-gradient(150deg, hsl(${hue} 60% 48%), hsl(${(hue + 40) % 360} 55% 18%))` }}
      aria-hidden='true'
    >
      {projectInitials(project.title)}
      <small>{project.languages[0]}</small>
    </span>
  );
};

export default FriendPic;
