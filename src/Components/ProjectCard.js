import { FaExternalLinkAlt, FaGithub, FaCode, FaHackerrank } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, technologies, description, demoUrl, codeUrl } = project;

  const getDemoIcon = () => {
    if (title.includes("HackerRank Problem Setter")) {
      return <FaCode size={16} />;
    }
    if (title.includes("HackerRank")) {
      return <FaHackerrank size={16} />;
    }
    return <FaExternalLinkAlt size={16} />;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">{description}</p>
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-all"
            >
              {getDemoIcon()}
              Demo
            </a>
          )}
          {codeUrl && (
            <a 
              href={codeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-all"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;