import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    img: ''
  }

  
  randomize = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }


  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomize(), img: '' });
    }, 500);
  }

  render() { 
    const color = this.state.color;
    const divStyle = {
      backgroundColor: color,
      height: '50000px',
      width: '10000px'
    };
    
    return <div style={divStyle}></div>;
  }
}
