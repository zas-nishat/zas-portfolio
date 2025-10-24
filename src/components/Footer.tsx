import React from 'react';
import personalInfo from '../data/personalinfo.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-16 border-t border-gray-200 shadow-lg rounded-t-lg">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-6">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-lg"
            >
              {/* In a real app, you'd use an icon component here */}
              <span className="sr-only">{social.name}</span>
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
