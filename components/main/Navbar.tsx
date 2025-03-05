'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#career-timeline', label: 'Career' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
];

const Navbar = () => {
  
  return (
    <>
      <nav className="flex flex-row w-full py-6">
        <div
          className="fixed w-full flex justify-center px-3 z-50 transition-transform duration-300">
          <div
            className="flex justify-between items-center w-full bg-[#03001442] backdrop-blur-lg border border-border-custom rounded-2xl py-4 px-4 md:max-w-2xl sm:max-w-lg"
          >
            {/* <div className="flex space-x-3 md:space-x-8 sm:space-x-4"> */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white sm:text-base md:text-base lg:text-lg text-xs transition duration-300 hover:text-gray-400 borderBottom"
                >
                  {link.label}
                </Link>
              ))}
            {/* </div> */}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
