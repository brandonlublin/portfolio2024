import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundContainer}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Page not found</p>
        <p className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button onClick={() => navigate('/')} className={styles.homeButton}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;



