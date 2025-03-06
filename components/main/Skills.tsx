'use client';
import { SkillsData } from '@/data/Skills';
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from 'react-intersection-observer';
import SkillsGallery from '../ui/SkillsGallery';
import { useTheme } from 'next-themes';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-4 sm:py-96"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <SectionHeader
          title="My Technical Knowledge"
          subtitle="These are the skills I enjoy working with, but not the only tools in my toolbox."
          Icon={<BeakerIcon />}
        />
      </div>
      <SkillsGallery skillsData={SkillsData} />
      {theme === "dark" && <div className="w-full h-full absolute top-0 left-0 z-[-10] dark:opacity-30 opacity-100 ">
        <video
          className="w-full h-full object-cover dark:opacity-40 opacity-100"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          src="/video/death_star.mp4"
        />
      </div>}
    </section>
  );
};

export default Skills;
