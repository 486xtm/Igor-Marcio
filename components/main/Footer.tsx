'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {theme} = useTheme();
  return (
    <>
      <footer className="w-full py-12 bg-[#d6d5df42] dark:bg-[#03001442] backdrop-blur-sm mt-5 border-t border-[#645AFF] z-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
            <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
              <h2 className={`text-3xl font-semibold mb-2 ${theme === "dark" ? "Welcome-text" : "text-purple-700"}`}>
                Igor Marcio
              </h2>
              <p className="text-gray-900 dark:text-gray-400 italic">Senior Software Engineer</p>
              <p className="text-gray-900 dark:text-gray-400 text-sm mt-4">
                © {currentYear} All rights reserved.
              </p>
            </div>
            <address className="flex justify-center space-x-8 pb-4">
              <a
                href="https://github.com/486xtm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Igor Marcio on GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-marcio-155099391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Igor Marcio on Linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:igormarcio0114@gmail.com"
                className="text-black dark:text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Igor Marcio on Email"
              >
                <FaEnvelope />
              </a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
