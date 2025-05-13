import React from 'react'
import { FaAward } from 'react-icons/fa';
import { achievementsData } from '../data/achievementsData';

function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Achievements
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <FaAward className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{achievement.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{achievement.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.date}</p>
                    {achievement.description && (
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{achievement.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Achievements