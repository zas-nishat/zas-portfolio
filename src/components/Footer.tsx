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
      <div className="w-full px-10 py-14">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between w-full">
          {/* About Section - Hidden on small screens */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I’m a passionate Flutter developer focused on building seamless,
              scalable, and high-performing mobile and web experiences that make
              a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
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
                    className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 dark:after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Expertise
            </h4>
            <ul className="space-y-2">
              {[
                "Flutter App Development",
                "Firebase Integration",
                "REST API & Backend",
                "UI/UX Design",
                "State Management (GetX, Provider)",
                "Responsive Web Design",
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Follow Me
            </h4>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Let’s connect and collaborate on exciting ideas.
            </p>

            <div className="flex space-x-5">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
