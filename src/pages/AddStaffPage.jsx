import React, { Component } from 'react';
import Registerform2 from '../components/forms/registerform2';
import {Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerstaff } from  '../actions/users';


class RegisterStaffPage extends Component {


    submit= (data) => this.props.registerstaff(data).then(()=>this.props.history.push('/staff/register')

    )

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
                          Staff Register<br/><br/><span style={{color: '#800080'}}>Calibrain</span>
                        </div>
                        </div>
                        <Registerform2 submit={this.submit}/>
                    </div>
                </div>
             </div>

              </div>
            </>
        );
    }
}

RegisterStaffPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    registerstaff : PropTypes.func.isRequired
}

export default connect(null, { registerstaff })(RegisterStaffPage);