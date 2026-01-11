import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedLink.css';

const AnimatedLink = ({ href, children }) => {
  return (
    <a href={href} className="animated-link">
      {children}
      <motion.div
        className="underline"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </a>
  );
};

export default AnimatedLink;
