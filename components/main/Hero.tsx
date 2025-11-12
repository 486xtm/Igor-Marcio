'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode } from 'react-icons/fa';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import StarsCanvas from './StarBackground';
import { useTheme } from 'next-themes';

const socialLinks = [
  {
    href: 'https://github.com/486xtm',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/igor-marcio-155099391',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'mailto:igormarcio0114@gmail.com',
    label: 'Email',
    icon: <FaEnvelope />,
  },
];

const Hero = () => {
  const [showStars, setShowStars] = useState(true);
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="flex items-center h-auto md:min-h-[70vh] lg:min-h-[80vh] py-2 px-2 mt-12 text-white"
    >
      <div className="container mx-auto justify-center flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1)}
          className="w-full md:w-2/3 flex flex-col md:items-start items-center"
        >
          <div className="flex items-center mb-2">
            <div className="Welcome-box py-2 px-2 border dark:border-[#7042f88b] border-[#6a3fec] opacity-[0.9]">
              <FaCode className="dark:text-[#b49bff] text-[#6a3fec] mr-[10px] h-5 w-5" />
              <div className={`${theme === "dark" ? "Welcome-text" : "text-[#6a3fec]"} italic md:text-xl text-xs px-2 ml-[-12px] font-semibold`}>
                I&rsquo;m Igor Marcio - Senior Software Engineer
              </div>
            </div>
          </div>
          <h2 className="md:text-5xl dark:text-white text-gray-800 text-xl font-bold leading-tight">
            Always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              learning
            </span>
            , always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              building
            </span>
          </h2>
          <h4 className="md:text-xl text-base font-medium dark:text-gray-400 text-black mt-1 mb-[-6px] italic flex ">
            {/* <Image
              src="/sweden.png"
              alt="Sweden Flag"
              width={24}
              height={24}
              className="mr-2"
            /> */}
            Based in Brazil
          </h4>

          <TextGenerateEffect
            words="I'm a self-motivated software developer with 10+ years of experience in web and mobile applications. 
            I have a Bachelor's in Computer Science and am pursuing a Master's in Software Engineering to keep learning new skills.
            Proficient in OpenAI technologies, utilizing modern development tools and creating effective CI/CD pipelines.
            I specialize in  React, Next, Vue, React Native, Node, TypeScript and so on.
            "
          />
          <div className="flex flex-col md:flex-row items-center mt-2 z-20">
            <button
              className=" md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-sm md:text-base lg:text-lg text-sm rounded-xl transition-colors button-3d-primary text-black dark:text-white"
              onClick={() => setShowStars(!showStars)}
            >
              Disable Background
            </button>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-center mt-6 md:mt-0 md:ml-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="dark:text-white text-black text-2xl md:text-4xl hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <StarsCanvas show={showStars} />
    </section>
  );
};

export default Hero;
