import React, { useState, useEffect } from 'react';

const useWidthAndHeight = () => {
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(700);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    const handleHeight = () => setHeight(window.innerHeight);

    // add event listener
    window.addEventListener('resize', handleWidth);
    window.addEventListener('resize', handleHeight);
    return () => {
      window.removeEventListener('resize', handleWidth);
      window.removeEventListener('resize', handleHeight);
    };
  }, []);

  return { width, height };
};

export default useWidthAndHeight;
