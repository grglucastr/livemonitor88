import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isNotValid:false,
      redirectToDashboard: false
    }

    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.userLogged){
      this.setState({redirectToDashboard:true});
    }
  }

  handleInputChanges = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const {username, password} = this.state;

    if(username === 'admin' && password === 'admin'){
      this.clearFormFields();
      this.setState({isNotValid:false, redirectToDashboard:true});
      this.props.OnLogin();
      return;
    }

    this.setState({isNotValid:true}); 
  }

  clearFormFields = () =>{
    this.setState({username:'', password: ''});
  }

  render() {

    const { redirectToDashboard } = this.state;

    if(redirectToDashboard){
      return <Redirect to="/dashboard" />
    }

    return(
      <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div className="container-shape" style={{marginTop: '10rem'}}>
              <h4 className="text-center" style={{}}>LiveMonitor88</h4>
              <p className="text-center">Login Access</p>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <input 
                    type="text"
                    className="form-control" 
                    placeholder="Enter Username"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChanges} />
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className="form-control"   
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChanges} />
                </div>

                {
                  (this.state.isNotValid) ?
                  (<div className="form-gorup text-center">
                    <p className="text-danger">User or password is wrong.</p>
                  </div>):
                  ('')
                }
                
                <div className="form-group text-right">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="col-sm-12">
                <Link to="/contact">
                  Contact Support
                </Link>
               </div>
            </div>
            
          </div>
       
      </div> 
    );
  }

}

export default LoginForm;