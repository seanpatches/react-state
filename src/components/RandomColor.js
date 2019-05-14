import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class RandomColor extends PureComponent {
  state = {
    color: ''
  }

  
  randomize = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
    }, 1000);
  }

  render() { 
    const color = this.state.color;
    return (
      <>
        <div className={color}>Color Here</div>
      </>
    );
  }
}
