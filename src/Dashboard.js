import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './App.css';
import logo from './logo.png';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.doLogout = this.doLogout.bind(this);
  }

  doLogout = () => {
    this.props.OnLogout();
  }


  render(){

    const { userLogged } = this.props

    return(
      
      <div className="container-fluid container-shape">
        {
          (!userLogged) ? <Redirect to='/'/> : ''
        }
        <div className="row">
          <div className="col">
            <h3 className="main-title">
              <img src={logo} style={{width: '7%', marginRight: '10px'}} />
              Live Monitor88
            </h3>
          </div>
          <div className="col text-right">
            <button 
              onClick={this.doLogout}
              className="btn btn-default">Logout</button>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <div className="dash-panel dash-panel-temperature dash-panel-green">
              <h5>Room Ideal Temperature</h5>
              <h2>22°C</h2>
            </div>
          </div>
        
          <div className="col">
            <div className="dash-panel dash-panel-temperature dash-panel-red">
              <h5>Room Temperature</h5>
              <h2>20°C</h2>
            </div>
          </div>
        
          <div className="col">
            <div className="dash-panel dash-panel-humidity dash-panel-purple">
              <h5>Room Ideal Humidity</h5>
              <h2>33%</h2>
            </div>
          </div>
        
          <div className="col">
            <div className="dash-panel dash-panel-humidity dash-panel-yellow">
              <h5>Room Humidity</h5>
              <h2>32%</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <iframe 
              width="90%" height="260"
              style={{border: '1px solid #cccccc'}}
              src="https://thingspeak.com/channels/623699/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperatura&type=line"></iframe>
          </div>
          <div className="col">
            <iframe 
              width="90%" height="260"
              style={{border: '1px solid #cccccc'}}
              src="https://thingspeak.com/channels/623699/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Umidade&type=line"></iframe>
          </div>
        </div>
      </div>
    );
  }

}
export default Dashboard;