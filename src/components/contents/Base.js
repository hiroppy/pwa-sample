import React from 'react';
import styles from './style.css';

const Base = (props) => (
  <div className={styles.container}>
    <h2>{props.title}</h2>
  </div>
);

export default Base;
