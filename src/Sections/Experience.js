import ExperienceItem from '../Components/ExperienceItem';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              experience={exp} 
              isLast={index === experienceData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;