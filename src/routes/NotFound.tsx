import { Link } from 'react-router-dom';
import ProfileLayout from '../components/ProfileLayout/ProfileLayout';
import { InfoBox } from '../components/InfoBox/InfoBox';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <ProfileLayout>
      <div className={styles.content}>
        <InfoBox title='Sorry! an unexpected error has occurred.'>
          <p className={styles.message}>This profile may be set to private, or it was never here at all.</p>
          <p className={styles.message}>
            <Link to='/'>Return to Brandon&apos;s profile</Link>
          </p>
        </InfoBox>
      </div>
    </ProfileLayout>
  );
};

export default NotFound;
