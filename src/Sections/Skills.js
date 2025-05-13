import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;