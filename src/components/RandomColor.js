import React, { PureComponent } from 'react';
import style from './RandomColor.css';

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

  componentDidUpdate(prevProps, prevState){
    if(prevState.color === this.state.color){
      this.setState({ img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG7oqSl5ziAhVlCTQIHVlVAR4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.ebaumsworld.com%2Fpictures%2F19-random-pictures-that-will-get-you-through-the-next-few-seconds%2F85708056%2F&psig=AOvVaw07imtoPEXWmVK_Qz905u7a&ust=1557963148662334' });
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomize(), img: '' });
    }, 100);
  }


  render() { 
    const color = this.randomize();
    const { img } = this.state;
    const colorAlt = this.randomize();

    const divStyle = {
      background: img ? `center / contain url(${img})` : color,
      height: '100px',
      width: '200px',
      margin: '10px'
    };

    const divStyleAlt = {
      background: img ? `center / contain url(${img})` : colorAlt,
      height: '100px',
      width: '200px',
      margin: '10px'
    };
    
    return (
      <section className={style.major}>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
        <div style={divStyle}></div>
        <div style={divStyleAlt}></div>
      </section>
    );
  }
}
