import React, { useEffect, useState } from 'react';
import './Highlight.css';  // Import the CSS file

const Highlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='highlight'
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Highlight;