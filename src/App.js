import React, { Component } from 'react';
import './App.css';

import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default App;
