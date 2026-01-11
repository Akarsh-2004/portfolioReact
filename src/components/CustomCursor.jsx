import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from './CursorProvider';
import './CustomCursor.css';

const CustomCursor = ({ cursorPosition }) => {
  const { cursorVariant } = useContext(CursorContext);

  const variants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      mixBlendMode: 'difference',
    },
    link: {
      height: 150,
      width: 150,
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      border: '1px solid rgba(59, 130, 246, 0.5)',
      mixBlendMode: 'normal',
    },
    card: {
      height: 200,
      width: 200,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      mixBlendMode: 'soft-light',
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
