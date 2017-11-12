import React, { Component } from 'react';
import Slider from './Slider';
import './receipt.css';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 50,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState( {
      days: parseInt(e.target.value),
    });
  }

  render() {
    return (
      <div className="receipt-container">
        <Slider onChange={this.onChange} />
        <div className="receipt-body">
          <div className="receipt-desc">
            <h2>Coworking Space, South Korea</h2>
            <p><span>320GBP</span><span> / 1day</span></p>
            <p>Entire office for 1 person Mon,Aug 22,2016 to Fri,Aug29,2016</p>
          </div>
          <div className="receipt-form"></div>
        </div>
      </div>
    );
  }
}

export default Receipt;
