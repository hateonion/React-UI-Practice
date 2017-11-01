import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import SignUpForm from './components/signupForm';
import './App.css';

const Home = () => (
        <ul>
          <li><Link to='/signupForm'>Day1</Link></li>
        </ul>
) 
class App extends Component {
  render() {
    return (
      <Router>
        <div id='app'>
          <Route path='/signupForm' component={SignUpForm} />
          <Route exact path='/' component={Home}/>
        </div>
      </Router>

    );
  }
}

export default App;