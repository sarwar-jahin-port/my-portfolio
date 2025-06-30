import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import {ProjectShowcase} from "../components/ProjectShowcase";
import { ProjectDetails } from "../components/ProjectDetails";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // If a project is selected, show its details page
  if (selectedProject) {
    const project = projects.find((p) => p.id === selectedProject);
    if (project) {
      return (
        <ProjectDetails
          project={project}
          onBack={handleBackToProjects}
        />
      );
    }
  }

  // Otherwise render the normal homepage
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectShowcase onViewProject={handleViewProject} />
      <Experience/>
      <Skills/>
      <Education/>
    </div>
  );
};

export default Home;
