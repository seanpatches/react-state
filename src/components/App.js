import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker.js';
import ColorDisplay from './ColorDisplay.js';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  colorHandler = color => {
    this.setState({ color });
  }

  render() { 
    const color = this.state.color;
    return (
      <>
    <ColorPicker colorHandler = {this.colorHandler}/>
    <ColorDisplay color={color} />
    </>
    );
  }
}
