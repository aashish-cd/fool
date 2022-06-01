import React from 'react';
import Fool from '../components/Fool';
import styles from '../styles/Home.module.css';

const Home = () => {
  const cube = [1, 2, 3];
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <Fool />
      </div>
    </div>
  );
};

export default Home;
