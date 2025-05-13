import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData } from '../data/profileData';
import { motion } from 'framer-motion';
import { SiCodechef, SiLeetcode } from "react-icons/si";

const Profile = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-50 to-transparent dark:from-primary-900/10 dark:to-transparent opacity-20"></div>
      <div className="absolute inset-0 dot-pattern text-primary-400/25 dark:text-primary-300/20"></div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-3/5 mb-12 md:mb-0 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="inline-flex text-sm font-semibold py-1 px-3 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 mb-4">
                {'<>'} Hello World {'</>'}
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-300% animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {profileData.name}
            </motion.h1>

            <motion.h2 
              className="text-xl md:text-2xl font-medium mb-6 text-secondary-700 dark:text-secondary-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {profileData.title}
            </motion.h2>

            <motion.p 
              className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {profileData.summary}
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a 
                href={`mailto:${profileData.email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-5 py-3 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full transition-all duration-300"
              >
                <span className="relative">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                </span>
                <span className="font-medium tracking-wide">{profileData.email}</span>
              </motion.a>

              <motion.a 
                href={`tel:${profileData.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-5 py-3 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full transition-all duration-300"
              >
                <span className="relative">
                  <FaPhone className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                </span>
                <span className="font-medium tracking-wide">{profileData.phone}</span>
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { icon: FaGithub, url: profileData.githubUrl, label: "GitHub" },
                { icon: FaLinkedin, url: profileData.linkedinUrl, label: "LinkedIn" },
                ...(profileData.codechefUrl ? [{ icon: SiCodechef, url: profileData.codechefUrl, label: "CodeChef" }] : []),
                ...(profileData.leetcodeUrl ? [{ icon: SiLeetcode, url: profileData.leetcodeUrl, label: "LeetCode" }] : [])
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-br from-primary-400 to-accent-400 text-white rounded-full hover:shadow-lg hover:shadow-primary-300/50 dark:hover:shadow-primary-400/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center relative z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-64 h-64">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-conic from-primary-500 via-accent-500 to-primary-500 rounded-full animate-spin-slow opacity-75 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-conic from-primary-500 via-accent-500 to-primary-500 rounded-full animate-spin-slow"></div>
                
                {/* Image container */}
                <div className="relative w-full h-full bg-gradient-to-br from-white to-primary-50 dark:from-secondary-900 dark:to-secondary-800 rounded-full overflow-hidden shadow-2xl border-2 border-white/50 dark:border-secondary-700/50">
                  <img 
                    src={profileData.avatarUrl || "/api/placeholder/400/400"} 
                    alt={profileData.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Role badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-secondary-800 px-4 py-2 rounded-xl shadow-xl border border-primary-100 dark:border-secondary-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  {profileData.currentRole}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;