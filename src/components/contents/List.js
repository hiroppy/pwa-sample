import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const List = () => (
  <div>
    <div className={styles.node} />
    <ul>
      <li><Link to="/argon">Argon</Link></li>
      <li><Link to="/boron">Boron</Link></li>
      <li><Link to="/carbon">Carbon</Link></li>
    </ul>
  </div>
);

export default List;
