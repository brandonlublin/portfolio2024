import AboutMe from "../components/AboutMe/AboutMe";
import Details from "../components/Details/Details";
import { useState } from 'react';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

import '../index.css';
const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className='app'>
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
  )
}

export default Home;