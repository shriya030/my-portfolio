import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData } from '../data/profileData';
import { SiCodechef, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 dark:bg-gray-900 text-white transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-purple-400">{profileData.name}</h3>
              <p className="text-gray-400 mt-2">{profileData.title}</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all"
              >
                <FaEnvelope size={18} />
                <span>{profileData.email}</span>
              </a>
              <a 
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all"
              >
                <FaPhone size={18} />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex gap-4">
              <a 
                href={profileData.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-400 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={profileData.linkedinUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-400 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              {profileData.codechefUrl && (
                <a 
                  href={profileData.codechefUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-purple-400 transition-all"
                  aria-label="CodeChef"
                >
                  <SiCodechef size={20} />
                </a>
              )}
              {profileData.leetcodeUrl && (
                <a 
                  href={profileData.leetcodeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-purple-400 transition-all"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={20} />
                </a>
              )}
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
