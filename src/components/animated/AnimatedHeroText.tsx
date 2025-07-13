import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedHeroTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedHeroText = ({ children, className, delay = 0 }: AnimatedHeroTextProps) => {
  return (
    <motion.h2
      initial={{ 
        opacity: 0, 
        y: 30, 
        filter: 'blur(10px)' 
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedHeroText; 