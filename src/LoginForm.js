import React, {Component} from 'react';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isNotValid:false
    }

    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      console.log('Do redirect');
      this.setState({isNotValid:false});
      return;
    }
    this.setState({isNotValid:true});
   
    
  }

  clearFormFields = () =>{
    this.setState({username:'', password: ''});
  }

  render() {
    return(
      <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div id="formContainer" style={{marginTop: '10rem'}}>
              <h4 className="text-center" style={{fontWeight: "normal", paddingBottom:'.3em', marginBottom:'.8em', borderBottom:'1px dotted #eee'}}>LiveMonitor88</h4>
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
            </div>
          </div>
      </div> 
    );
  }

}

export default LoginForm;