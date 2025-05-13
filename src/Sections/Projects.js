import ProjectCard from '../Components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;