import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileLayout from '../components/ProfileLayout/ProfileLayout';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import ContactBox from '../components/ContactBox/ContactBox';
import { InfoBox, InfoTable } from '../components/InfoBox/InfoBox';
import LatestActivity from '../components/LatestActivity/LatestActivity';
import TopFriends from '../components/TopFriends/TopFriends';
import FriendComments from '../components/FriendComments/FriendComments';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import { blurbs, interests, profile, profileDetails, workHistory } from '../data/data';
import { findProjectBySlug } from '../utils/projects';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const { hash, key } = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const selectedProject = slug ? findProjectBySlug(slug) : undefined;

  useEffect(() => {
    const target = !slug && hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug, hash, key]);

  if (slug && !selectedProject) {
    return <Navigate to='/404' replace />;
  }

  return (
    <ProfileLayout>
      {selectedProject ? (
        <ProjectDetails project={selectedProject} onBack={() => navigate('/#top8')} />
      ) : (
        <div className={styles.profile}>
          <div className={`${styles.column} ${styles.identity}`}>
            <ProfileCard />
            <MusicPlayer />
            <ContactBox />
            <section className={styles.url}>
              <b>BrandonSpace URL:</b>
              <a href={profile.siteUrl}>{profile.siteUrl}</a>
            </section>
          </div>

          <div className={`${styles.column} ${styles.rail}`}>
            <InfoBox title={`${profile.name}'s Interests`}>
              <InfoTable rows={interests} />
            </InfoBox>
            <InfoBox title={`${profile.name}'s Details`}>
              <InfoTable rows={profileDetails} />
            </InfoBox>
            <InfoBox title={`${profile.name}'s Companies`}>
              <InfoTable
                rows={workHistory.map((job) => ({
                  label: job.company,
                  value: (
                    <>
                      {job.title}
                      <br />
                      {job.location}
                      <br />
                      {job.dates}
                    </>
                  ),
                }))}
              />
            </InfoBox>
          </div>

          <div className={`${styles.column} ${styles.main}`}>
            <p className={styles.extended}>{profile.name} is in your extended network</p>
            <LatestActivity />
            <InfoBox title={`${profile.name}'s Blurbs`}>
              <div className={styles.blurbs}>
                <h3>About me:</h3>
                {blurbs.aboutMe.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                <h3>Who I&apos;d like to meet:</h3>
                <p>{blurbs.meet}</p>
              </div>
            </InfoBox>
            <TopFriends />
            <FriendComments />
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default Home;
