// src/components/Typewriter.js

import React, { useEffect, useState, useRef } from "react";

function Typewriter({ roles = [], speed = 150, pause = 1000 }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const fullText = currentRole;

      if (isDeleting) {
        setText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      let typingSpeed = speed;

      if (isDeleting) typingSpeed /= 2;

      if (!isDeleting && charIndex === fullText.length) {
        typingSpeed = pause;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }

      timerRef.current = setTimeout(handleTyping, typingSpeed);
    };

    timerRef.current = setTimeout(handleTyping, speed);

    return () => clearTimeout(timerRef.current);
  }, [charIndex, isDeleting, roleIndex, roles, speed, pause]);

  return (
    <span>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default Typewriter;
