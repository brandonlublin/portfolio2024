import AboutMe from "../components/AboutMe/AboutMe";
import Details from "../components/Details/Details";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import '../index.css';
import Header from '../components/Header/Header';
import { Project } from '../types';
import { projects } from '../data/data';

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

const findProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => slugify(p.title) === slug);
};

const Home = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      const project = findProjectBySlug(slug);
      if (project) {
        setSelectedProject(project);
      } else {
        navigate('/404', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [slug, navigate]);

  const openProjectDetails = (project: Project) => {
    navigate(`/project/${slugify(project.title)}`);
  };

  const closeProjectDetails = () => {
    navigate('/');
  };

  return (
    <div className='app'>
      <Header />
      <div className='appContainer'>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={closeProjectDetails} />
        ) : (
          <>
            <div className='aboutMe'>
              <AboutMe />
            </div>
            <div className='details'>
              <Details openProjectDetails={openProjectDetails} selectedProject={selectedProject} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
