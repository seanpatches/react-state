import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default function ColorPicker({ colorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() =>colorHandler('red')}>Red</button>
      <button className={styles.green} onClick={() => colorHandler('green')}>Green</button>
      <button className={styles.blue} onClick={() => colorHandler('blue')}>Blue</button>
    </section>
  );   
}

ColorPicker.PropTypes = {
  colorHandler: PropTypes.func.isRequired
};

