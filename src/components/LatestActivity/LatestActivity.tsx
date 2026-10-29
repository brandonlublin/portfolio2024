import { useEffect, useState } from 'react';
import { profile } from '../../data/data';
import { InfoBox } from '../InfoBox/InfoBox';
import styles from './LatestActivity.module.css';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  pushed_at: string;
  fork: boolean;
};

const LatestActivity = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=10`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Repo[]) => setRepos(data.filter((r) => !r.fork).slice(0, 4)))
      .catch(() => setRepos([]));
    return () => controller.abort();
  }, []);

  if (repos?.length === 0) return null;

  return (
    <InfoBox title={`${profile.name}'s Latest Activity`}>
      {repos === null ? (
        <p className={styles.loading}>Loading recent pushes...</p>
      ) : (
        <ul className={styles.list}>
          {repos.map((repo) => (
            <li key={repo.id}>
              Pushed to <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
              <span className={styles.date}>
                {new Date(repo.pushed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </li>
          ))}
        </ul>
      )}
      <p className={styles.all}>
        <a href={profile.githubUrl} target='_blank' rel='noopener noreferrer'>View All Repositories</a>
      </p>
    </InfoBox>
  );
};

export default LatestActivity;
