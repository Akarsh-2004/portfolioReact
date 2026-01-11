import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AnimatedSection.css';

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['50px', '0px', '0px', '-50px']);

  return (
    <motion.div
      ref={ref}
      className={`animated-section ${className}`}
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
