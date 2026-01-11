import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
