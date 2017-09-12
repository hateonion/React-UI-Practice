import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-modal">
          <div className="login-panel">
            <ul>
              <li>
                <span className="fa fa-address-card fa-fw"></span>
                <input className="user-name" name="" type="text" value="" placeholder="john smith"/>
              </li>
              <li>
                <span className="fa fa-envelope fa-fw"></span>
                <input className="user-email" name="" type="text" value="" placeholder="john@smith.con"/>
              </li>
              <li>
                <span className="fa fa-unlock-alt fa-fw"></span>
                <input className="user-password" name="" type="text" value="" placeholder="password"/>
              </li>
            </ul>
            <button className="login-button">
              <span>LOG IN</span>
              <span>></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
