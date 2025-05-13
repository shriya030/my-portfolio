import { FaChevronRight, FaBriefcase } from 'react-icons/fa';

const ExperienceItem = ({ experience, isLast }) => {
  const { role, company, period, description, responsibilities, techStack } = experience;

  return (
    <div className="mb-12 relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>
      )}
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="mt-1.5">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center shadow-md">
            <FaBriefcase className="text-purple-600 dark:text-purple-400" size={24} />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{role}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">{company}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{period}</p>
            </div>
            
            {description && (
              <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            )}
            
            <ul className="space-y-2">
              {responsibilities.map((responsibility, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaChevronRight className="flex-shrink-0 mt-1 text-purple-500 dark:text-purple-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                </li>
              ))}
            </ul>
            
            {techStack && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;