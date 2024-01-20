import React, { Component } from 'react';
import './style.css'
class CountersTotal extends Component {
    render() {
        const {totalValue} = this.props;
        return (
            <div className='total'>
                <h5>Total <span>{totalValue}</span></h5>
            </div>
        );
    }
}

export default CountersTotal;