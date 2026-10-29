import { peerFeedback, profile } from '../../data/data';
import { projectInitials } from '../../utils/projects';
import { InfoBox } from '../InfoBox/InfoBox';
import styles from './FriendComments.module.css';

const FriendComments = () => {
  return (
    <InfoBox title={`${profile.name}'s Friends Comments`} id='comments'>
      <p className={styles.count}>
        Displaying <b>{peerFeedback.length}</b> of {peerFeedback.length} comments
      </p>
      <table className={styles.table}>
        <tbody>
          {peerFeedback.map((comment) => (
            <tr key={comment.id}>
              <td className={styles.who}>
                <span className={styles.author}>{comment.name}</span>
                <span className={styles.avatar} aria-hidden='true'>
                  {projectInitials(comment.name.replace('.', ''))}
                </span>
              </td>
              <td className={styles.what}>
                {comment.feedback.split('\n').map((line, i) => (
                  <p key={i}>{line.trim()}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfoBox>
  );
};

export default FriendComments;
