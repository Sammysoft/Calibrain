import React, { Component } from 'react';
import RegisterForm from '../components/forms/registerform';
import { Link } from 'react-router-dom'

class RegisterPage extends Component {
    render() {
        return (
            <>
            <div className="login-wrapper">
             <div className="login-content">
             <div className="back-arrow-wrapper" style={{paddingBottom: "50px"}}>
                    <span>
                       <i className="fa fa-angle-left" ></i><Link to="/">Back</Link>
                    </span>
                </div>

                <div className="login-body">
                    <div className="login-form">
                        <div style={{display: "flex", flexDirection: 'row', alignItems: 'space-between'}}>
                        <img src={"assets/images/brain.svg"}  height="100px" width="100px" style={{flex: '3', alignSelf: 'left'}}/>
                        <div className="login-text">
                            Register On <br/><br/><span style={{color: '#800080'}}>Calibrain</span>
                        </div>
                        </div>
                        <RegisterForm className="form"/>
                    </div>
                </div>
             </div>

              </div>
            </>
        );
    }
}

export default RegisterPage;