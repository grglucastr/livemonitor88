import React, { Component } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

import {Switch, Route} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);  

    this.state = {
      isUserLogged: true
    }

    this.doUserLogin = this.doUserLogin.bind(this);
    this.doUserLogout = this.doUserLogout.bind(this);
  }

  doUserLogin(){
    this.setState({isUserLogged:true});
  }

  doUserLogout(){
    this.setState({isUserLogged: false});
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => (
            <LoginForm 
              userLogged={this.state.isUserLogged}
              OnLogin={this.doUserLogin}  />
          )}/>
          <Route path="/dashboard" render={() => (
            <Dashboard 
              userLogged={this.state.isUserLogged}
              OnLogin={this.doUserLogin}
              OnLogout={this.doUserLogout} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;