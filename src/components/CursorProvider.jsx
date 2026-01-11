import React, { createContext, useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const value = {
    cursorVariant,
    setCursorVariant,
  };

  return (
    <CursorContext.Provider value={value}>
      <CustomCursor cursorPosition={cursorPosition} />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
