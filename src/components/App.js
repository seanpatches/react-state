import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker.js';

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
    <ColorPicker />
    <ColorDisplay color={color} />
    </>
    );
  }
}
