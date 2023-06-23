import React, { useRef, useState } from 'react';
import styles from '../styles/Fool.module.css';
import useWidthAndHeight from '../customHooks/useWidthAndHeight';

const Fool = () => {
  const [position, setPosition] = useState({
    left: 1000,
    top: 170,
  });
  const [fool, setFool] = useState(false);
  const handleYes = () => {
    setFool(true);
  };
  const { height, width } = useWidthAndHeight();

  const handleNo = () => {
    setFool(false);
    setPosition({
      left: Math.random() * width,
      top: Math.random() * height,
    });
  };
  return (
    <div className={styles.container}>
      <h1>Are you a Fool?</h1>
      {fool ? <h1>I knew it.</h1> : <div style={{ height: '100px' }}></div>}
      <div className={styles.buttonContainer}>
        <button className={styles.buttonYes} onClick={handleYes}>
          Yes
        </button>
        <button
          className={styles.buttonNo}
          onClick={handleNo}
          style={{
            position: 'absolute',
            left: `${position.left}px`,
            top: `${position.top}px`,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Fool;
