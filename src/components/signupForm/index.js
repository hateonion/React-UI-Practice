import React, { Component } from 'react';
import './signupForm.scss';

export default class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      isFocus: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFocus() {
    this.setState({ isFocus: true });
  }

  handleBlur() {
    this.setState({ isFocus: false });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="login-container">
        <div className="login-modal">
          <form className="login-panel">
            <ul>
              <li>
                <input id="user-name" required onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput} name="username" type="text" value={username} placeholder="john smith" />
                <label htmlFor="user-name" className="fa fa-address-card fa-fw"></label>
              </li>
              <li>
                <input id="user-email" required onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput} name="email" type="email" value={email} placeholder="john@smith.con" />
                <label htmlFor="user-email" className="fa fa-envelope fa-fw"></label>
              </li>
              <li>
                <input id="user-password" onFocus={this.handleFocus} onBlur={this.handleBlur} required onChange={this.handleInput} name="password" type="password" value={password} placeholder="password" />
                <label htmlFor="user-password" className="fa fa-unlock-alt fa-fw"></label>
              </li>
            </ul>
            <button className="login-button" type="submit">
              <span>LOG IN</span>
              <i className="fa fa-angle-right"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
