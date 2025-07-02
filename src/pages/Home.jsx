import { useState } from "react";
import HeroSection from "../components/HeroSection";
import {ProjectShowcase} from "../components/ProjectShowcase";
import { ProjectDetails } from "../components/ProjectDetails";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import { useNavigate } from "react-router-dom";
import {projects} from '../data/projects';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();
  const handleViewProject = (projectId) => {
    console.log(projectId)
    setSelectedProject(projectId);
    navigate(`/project/${projectId}`)
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // If a project is selected, show its details page
  // if (selectedProject) {
  //   console.log(selectedProject);
  //   const project = projects.find((p) => p.id === selectedProject);
  //   if (project) {
  //     return (
  //       <ProjectDetails
  //         project={project}
  //         onBack={handleBackToProjects}
  //       />
  //     );
  //   }
  // }

  // Otherwise render the normal homepage
  return (
    <div>
      <HeroSection />
      <ProjectShowcase onViewProject={handleViewProject} />
      <Experience/>
      <Skills/>
      <Education/>
    </div>
  );
};

export default Home;
