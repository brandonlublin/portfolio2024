import { FormEvent, ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SkinPicker from '../SkinPicker/SkinPicker';
import { profile } from '../../data/data';
import { projectSlug, searchProjects } from '../../utils/projects';
import styles from './ProfileLayout.module.css';

type ProfileLayoutProps = {
  children: ReactNode;
};

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const match = searchProjects(query);
    setNoResults(!match);
    if (match) navigate(`/project/${projectSlug(match)}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <div className={styles.inner}>
          <Link className={styles.logo} to='/'>
            brandonspace
            <small>a place for projects</small>
          </Link>
          <form className={styles.search} onSubmit={handleSearch} role='search'>
            <label htmlFor='project-search'>Search:</label>
            <input
              id='project-search'
              type='search'
              placeholder='projects, skills'
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setNoResults(false);
              }}
            />
            <button type='submit'>Search</button>
            {noResults && <span className={styles.noResults} role='status'>No projects found</span>}
          </form>
        </div>
      </header>
      <nav className={styles.nav} aria-label='Main'>
        <div className={styles.inner}>
          <Link to='/'>Home</Link>
          <Link to='/#top8'>Projects</Link>
          <Link to='/#comments'>Feedback</Link>
          <a href={profile.resumeUrl} target='_blank' rel='noopener noreferrer'>Résumé</a>
          <a href={profile.githubUrl} target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href={profile.linkedinUrl} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
      <main className={styles.sheet}>
        <div className={styles.inner}>
          <div className={styles.skinBar}>
            <SkinPicker />
          </div>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <Link to='/'>Home</Link> | <Link to='/contact'>Contact</Link> | <a href={profile.githubUrl}>GitHub</a>
          <p>Built by {profile.fullName} with React and Vite</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfileLayout;
