import React from 'react';
import Image from 'next/image';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';

interface ServiceData {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const ServiceItem = ({ id, name, description, icon }: ServiceData) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { theme } = useTheme();
  return (
    <motion.div
      className="flex flex-col mb-10 md:mb-14 dark:bg-[rgba(33,149,243,0.07)] bg-[rgba(7,11,15,0.07)] rounded-lg shadow-lg shadow-blue-700/20 p-4 backdrop-blur-sm"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInFromTop(0.2)}
    >
        <div className="flex">
          <Image className='mr-2' src={icon} width={18} height={18} alt={`Icon representing ${name}`} />
          <h6 className={`${theme === "dark"? "Welcome-text" : "text-purple-950"} text-base md:text-lg font-bold`}>
            {name}
          </h6>
        </div>
        <p className="dark:text-gray-400 text-gray-900 text-sm md:text-base italic mt-2">
          {description}
        </p>
    </motion.div>
  );
};

export default ServiceItem;
