import React, { Component } from 'react';
import RegisterForm from '../components/forms/registerform';
import {Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { register } from  '../actions/users';
import Swal from 'sweetalert2';

class RegisterPage extends Component {


    submit= (data) => this.props.register(data).then(()=>this.props.history.push('/dashboard'),
    Swal.fire({
        title: 'Good job!',
        text: 'Added User To Calibrain.',
        icon: 'success'
      }))

    render() {
        return (
            <>
            <div className="login-wrapper">
             <div className="login-content">
             <div className="back-arrow-wrapper" style={{paddingBottom: "50px"}}>
                    <span>
                       <Link to="/"><Icon name="chevron circle left" size="big"></Icon></Link>
                    </span>
                </div>

                <div className="login-body">
                    <div className="login-form">
                        <div style={{display: "flex", flexDirection: 'row', alignItems: 'space-between', paddingBottom: '10vh'}}>
                        <img src={"assets/images/brain.svg"}  height="100px" width="100px" style={{flex: '3', alignSelf: 'left'}}/>
                        <div className="login-text">
                            Register On <br/><br/><span style={{color: '#800080'}}>Calibrain</span>
                        </div>
                        </div>
                        <RegisterForm submit={this.submit}/>
                    </div>
                </div>
             </div>

              </div>
            </>
        );
    }
}

RegisterPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    register : PropTypes.func.isRequired
}

export default connect(null, { register })(RegisterPage);