import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
 state = {
   count: 0
 }

 increment = () => {
   this.setState(state => {
     return { count: state.count + 1 };
   });
 }

 reset = () => {
   this.setState(() => {
     return { count: 0 };
   });
 }

 render() {
   const { count } = this.state;
   return (
     <>
       <p>{count}</p>
       <button onClick={this.increment}>click here</button>
       <button onClick={this.reset}>reset</button>
     </>
   );
 }
}
