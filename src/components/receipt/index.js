import React, { Component } from 'react';
import Slider from './Slider';
import './receipt.scss';
import _ from 'lodash';

const InputField = ({type='input', name, label, id, placeHolder}) => (
  <label htmlFor={id} className="flex-container-column">
    <span>{label}</span>
    <input id={id} type={ type } name={name} placeholder={placeHolder}/>
  </label>
);

const SelectField = ({name, label, id, selectedIndex, options}) => (
  <label htmlFor={id} className="flex-container-column">
    <span>{label}</span>
    <select name={name} id={id}>
      {options.map((option, index) => (
        index === selectedIndex ?
          (<option key={index} value={option} selected>{option}</option>) :
          (<option key={index} value={option}>{option}</option>)
      ))}
    </select>
  </label>
);

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
      <div className="flex-container-column receipt-container">
        <Slider onChange={this.onChange} />
        <div className="receipt-body flex-container-row">
          <div className="receipt-desc">
            <h2 className="flex-container-column">
              <span>Coworking Space, </span>
              <span>South Korea</span>
            </h2>
            <p className="receipt-cost"><span>320GBP</span><span> / 1day</span></p>
            <p className="flex-container receipt">
              <span>Entire office for 1 person </span>
              <span>Mon,Aug 22,2016 to Fri,Aug29,2016</span>
            </p>
          </div>
          <div className="receipt-details flex-container-column">
            <h3>Order Summary</h3>
            <ul className="receipt-calculation">
              <li className="flex-container-row receipt-price"><span>320x1day</span><span>320 GBP</span></li>
              <li className="flex-container-row receipt-price"><span>Discount</span><span>16 GBP</span></li>
              <li className="flex-container-row receipt-price"><span>Subtotal</span><span>304 GBP</span></li>
              <li className="flex-container-row receipt-price"><span>Tax</span><span>60 GBP</span></li>
              <li className="flex-container-row receipt-price"><span>Total</span><span>364 GBP</span></li>
            </ul>
            <h3>Payment information</h3>
            <form className="receipt-form flex-container-column">
              <InputField id="user-name" label="NAME ON CREDIT CARD" name="name" placeHolder="John Smith"/>
              <InputField id="user-creditcard" label="CREDIT CARD NUMBER" name="card" placeHolder="0000 0000 0000 0000" />
              <div className="creditcard flex-container-row">
                <SelectField 
                  id="expire-month"
                  label="EXPIRES ON"
                  name="expMonth"
                  selectedIndex={1}
                  options={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev']}
                />
                <SelectField 
                  id="expire-day"
                  name="expDay"
                  selectedIndex={1}
                  options={_.range(2016, 2020)}
                />
                <InputField id="user-cvc" label="CVC" name="cvc" placeHolder="000" />
              </div>
              <button type="submit">Book Security</button>
              <p className="receipt-form-tip">Your credit card information is encrypted</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Receipt;
