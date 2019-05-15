import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  }

  
  randomize = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'steelblue', 'orange'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }
  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomize(), img: '', trigger: new Date() });
    }, (Math.random() * 1000));
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
      margin: '10px'
    };
    
    return (
      <div style={divStyle}></div>
    );
  }
}
