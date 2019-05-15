import React, { PureComponent } from 'react';
const randomColor = require('randomcolor');

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: '',
    speed: (Math.random() * 1000)
  }

  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: randomColor(), img: '', trigger: new Date() });
    }, this.state.speed);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.color === this.state.color){
  //     this.setState({ img: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg' });
  //   }
  // }


  render() { 
    const color = this.state.color;
    const { img } = this.state;

    const divStyle = {
      background: img ? `center / contain url(${img})` : color,
      height: '100px',
      width: '200px',
      margin: '10px',
      transition: `background-color ${this.state.speed}ms linear`
    };
    
    return (
      <div style={divStyle}></div>
    );
  }
}
