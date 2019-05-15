import React, { PureComponent } from 'react';
import style from './RandomColor.css';

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
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.color === this.state.color){
      this.setState({ img: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg' });
    }
  }


  render() { 
    const color = this.state.color;
    const { img } = this.state;
    const colorAlt = this.randomize();
    const color2 = this.randomize();
    const color3 = this.randomize();
    const color4 = this.randomize();
    const color5 = this.randomize();
    const color6 = this.randomize();
    const color7 = this.randomize();
    const color8 = this.randomize();
    const color9 = this.randomize();

    const divStyle = {
      background: img ? `center / contain url(${img})` : color,
      height: '100px',
      width: '200px',
      margin: '10px'
    };

    const divStyleAlt = {
      background: img ? `center / contain no-repeat url(${img})` : colorAlt,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle2 = {
      background: img ? `center / contain url(${img})` : color2,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle3 = {
      background: img ? `center / contain url(${img})` : color3,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle4 = {
      background: img ? `center / contain url(${img})` : color4,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle5 = {
      background: img ? `center / contain url(${img})` : color5,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle6 = {
      background: img ? `center / contain url(${img})` : color6,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle7 = {
      background: img ? `center / contain url(${img})` : color7,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle8 = {
      background: img ? `center / contain url(${img})` : color8,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    const divStyle9 = {
      background: img ? `center / contain url(${img})` : color9,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    
    return (
      <section className={style.major}>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle4}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle6}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
        <div style={divStyle4}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle5}></div>
        <div style={divStyle6}></div>
        <div style={divStyle3}></div>
        <div style={divStyle7}></div>
        <div style={divStyle8}></div>
        <div style={divStyle9}></div>
      </section>
    );
  }
}
