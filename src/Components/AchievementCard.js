import { FaAward } from 'react-icons/fa';

const AchievementCard = ({ achievement }) => {
  const { title, issuer, date, description } = achievement;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <FaAward className="text-purple-600 dark:text-purple-400" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{issuer}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{date}</p>
          {description && (
            <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AchievementCard;