import React from "react";
import personalInfo from "../data/personalinfo.json";
import { Github, Linkedin, Facebook } from "lucide-react";

const socialIcons: { [key: string]: React.ElementType } = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-700 dark:text-gray-300 mt-20 border-t border-gray-200 dark:border-gray-800 w-full">
      <div className="w-full px-10 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 w-full">
          {/* Left Section - Brand Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
              Building beautiful, efficient, and scalable digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-5">
              {personalInfo.socials.map((social) => {
                const IconComponent = socialIcons[social.icon.toLowerCase()];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    {IconComponent && (
                      <IconComponent
                        size={22}
                        className="text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-transform duration-300"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex-1 text-left md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-0 md:flex md:flex-wrap md:justify-end md:gap-x-6">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-base text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 dark:after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
