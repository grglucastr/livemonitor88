import React, {Component} from 'react';

class LoginForm extends Component {
  render() {
    return(
      <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div id="formContainer" style={{marginTop: '10rem'}}>
              <h4 className="text-center" style={{fontWeight: "normal", paddingBottom:'.3em', marginBottom:'.8em', borderBottom:'1px dotted #eee'}}>LiveMonitor88</h4>
              <p className="text-center">Login Access</p>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="email"  placeholder="Enter Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password"  placeholder="Enter Password" />
                </div>
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