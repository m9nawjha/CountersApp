import React, { Component } from 'react';
import Counter from '../../components/Counter';
import CountersTotal from '../../components/CountersTotal';
import './style.css';
const INITIAL_COUNTERS_VALUES = {
  1: {
    value: 0,
    amount: 2
  },
  2: {
    value: 0,
    amount: 4
  },
  3: {
    value: 0,
    amount: 6
  },
  4: {
    value: 0,
    amount: 8
  }
};
class HomePage extends Component {
  state = {
    counters: INITIAL_COUNTERS_VALUES
  };

  handelDecrease = key => {
    if (this.state.counters[key].value > 0) {
      this.setState(prevState => {
        const _counters = {
          ...prevState.counters,
          [key]: {
            ...prevState.counters[key],
            value:
              prevState.counters[key].value - prevState.counters[key].amount
          }
        };
        return { counters: _counters };
      });
    }
  };
  handelIncrease = key => {
    this.setState(prevState => {
      const _counters = {
        ...prevState.counters,
        [key]: {
          ...prevState.counters[key],
          value: prevState.counters[key].value + prevState.counters[key].amount
        }
      };
      return { counters: _counters };
    });
  };
  render() {
    return (
      <div className='container'>
        {Object.entries(this.state.counters).map(([key, object]) => {
          return (
            <Counter
              key={key}
              counter={object.value}
              decrease={() => this.handelDecrease(key)}
              increase={() => this.handelIncrease(key)}
            />
          );
        })}
        <CountersTotal
          totalValue={Object.values(this.state.counters)
            .map(counter => counter.value)
            .reduce((acc, cur) => acc + cur)}
        />
      </div>
    );
  }
}
export default HomePage;
