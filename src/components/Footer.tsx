import React from 'react';
import personalInfo from '../data/personalinfo.json';
import { Github, Linkedin, Facebook } from 'lucide-react'; // Removed Mail import

const socialIcons: { [key: string]: React.ElementType } = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  // Removed mail from mapping
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-0 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Follow Us Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {personalInfo.socials.map((social) => {
                const IconComponent = socialIcons[social.icon.toLowerCase()];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-2xl"
                    aria-label={social.name}
                  >
                    {IconComponent ? <span className="group-hover:animate-rotate-once"><IconComponent size={24} /></span> : social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:flex-wrap md:justify-end md:gap-x-6">
              <li>
                <a href="#home" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ease-in-out text-base">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;