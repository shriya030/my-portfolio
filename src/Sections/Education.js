import React from 'react';
import { FaBook } from 'react-icons/fa';
import { educationData } from '../data/educationData';

function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline line */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="mt-1.5">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center shadow-md">
                      <FaBook className="text-purple-600 dark:text-purple-400" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                          <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                          {edu.grade && (
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.grade}</p>
                          )}
                        </div>
                      </div>
                      
                      {edu.description && (
                        <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Education