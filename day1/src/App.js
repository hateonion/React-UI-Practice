import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      isFocus: false
    };

    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handleUserEmailInput = this.handleUserEmailInput.bind(this);
    this.handleUserPasswordInput = this.handleUserPasswordInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleUserNameInput(e) {
    this.setState({username: e.target.value});
  }

  handleUserEmailInput(e) {
    this.setState({email: e.target.value});
  }

  handleUserPasswordInput(e) {
    this.setState({password: e.target.value});
  }

  handleFocus() {
    this.setState({isFocus: true});
  }

  handleBlur() {
    this.setState({isFocus: false});
  }

  render() {
    const {username, email, password, isFocus} = this.state;
    return (
      <div className="login-container">
        <div className="login-modal">
          <form className="login-panel">
            <ul>
              <li>
                <span className={`fa fa-address-card fa-fw ${isFocus ? 'input__focus' : ''}`}></span>
                <input className="user-name" required onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleUserNameInput} name="username" type="text" value={username} placeholder="john smith"/>
              </li>
              <li>
                <span className="fa fa-envelope fa-fw"></span>
                <input className="user-email" required onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleUserEmailInput} name="email" type="email" value={email} placeholder="john@smith.con"/>
              </li>
              <li>
                <span className="fa fa-unlock-alt fa-fw"></span>
                <input className="user-password" onFocus={this.handleFocus} onBlur={this.handleBlur} required onChange={this.handleUserPasswordInput} name="password" type="password" value={password} placeholder="password"/>
              </li>
            </ul>
            <button className="login-button" type="submit">
              <span>LOG IN</span>
              <span>></span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
