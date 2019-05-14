import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default function ColorPicker({ ColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() =>ColorHandler('red')}>Red</button>
      <button className={styles.green} onClick={() => ColorHandler('green')}>Green</button>
      <button className={styles.blue} onClick={() => ColorHandler('blue')}>Blue</button>
    </section>
  );   
}

ColorPicker.PropTypes = {
  colorHandler: PropTypes.func.isRequired
};

