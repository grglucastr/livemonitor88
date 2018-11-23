import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return(
    <div className="container-fluid container-shape">
      <div className="row">
        <div className="col">
          <div className="contact-container">

            <div className="row">
              <div className="col">
                <h3 className="main-title">
                  <img src={logo} style={{width: '7%', marginRight: '10px'}} />
                  Live Monitor88
                </h3>
              </div>
              <div className="col text-right">
                  <Link to="/dashboard">
                    <button className="btn btn-default">
                      Back
                    </button>
                  </Link>
                
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3>Contact Us</h3>
              </div>
            </div>

          
            <div className="row">
              <div className="col">
                <p>
                  For technical support or any kind of suggestion, complains, etc. Contact us by the form below or directly by e-mail.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h5>Contact Form</h5>

                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                      id="name"
                      className="form-control"
                      placeholder="John Doe"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                      id="email"
                      className="form-control"
                      placeholder="john@doe.com"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      id="subject"
                      className="form-control"
                      placeholder="Temperature and Humidity"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="msg">Message:</label>
                    <textarea
                      id="msg"
                      className="form-control"
                      placeholder="Enter your message here"></textarea>
                  </div>

                  <div className="form-group text-right">
                    <button className="btn btn-primary">Send</button>
                  </div>
                </form>

              </div>

              <div className="col-sm-12 col-md-6 ">
                <h5>Contact Through E-mail</h5>
                <p>
                  If you find better contact us by e-mail or send any extra attachments, please make sure to send it to the following e-mail address:
                </p>
                <p><strong>88servagent@gmail.com</strong></p>

                <p>We'll provide you an answer soon as possible.</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )

}

export default Contact;