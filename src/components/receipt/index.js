import React, { Component } from 'react';
import Slider from './Slider';
import './receipt.scss';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 50,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      days: parseInt(e.target.value),
    });
  }

  render() {
    return (
      <div className="flex-container receipt-container">
        <Slider onChange={this.onChange} />
        <div className="receipt-body">
          <div className="receipt-desc">
            <h2 className="flex-container"><span>Coworking Space,</span><span>South Korea</span></h2>
            <p className="receipt-cost"><span>320GBP</span><span> / 1day</span></p>
            <p className="flex-container">
              <span>Entire office for 1 person </span>
              <span>Mon,Aug 22,2016 to Fri,Aug29,2016</span>
            </p>
          </div>
          <div className="receipt-form"></div>
        </div>
      </div>
    );
  }
}

export default Receipt;
