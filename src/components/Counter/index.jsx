import React, { Component } from 'react';
import './style.css';
class Counter extends Component {
  //   state={counter: 0}
  //   handelDecrease = () => {
  //     if (this.state.counter > 0)
  //       this.setState(prevState => ({ counter: prevState.counter - 1 }));
  //   };
  //   handelIncrease = () => {
  //     this.setState(prevState => ({ counter: prevState.counter + 1 }));
  //   };
  render() {
    const { counter, decrease, increase } = this.props;
    return (
      <div className='counter'>
        <button
          className='mins'
          onClick={decrease}>
          -
        </button>
        <span>{counter}</span>
        <button
          className='plus'
          onClick={increase}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
