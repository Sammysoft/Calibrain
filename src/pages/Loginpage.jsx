import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/forms/loginform';
import { Link } from 'react-router-dom'
import { login } from '../actions/auth';



class Loginpage extends React.Component{


    submit= (data) => this.props.login(data).then(()=>this.props.history.push('/dashboard'))

    render(){
        return(
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
                            Login To <br/><br/><span style={{color: '#800080'}}>Calibrain</span> <br/><br/><br/> <hr/>
                        </div>
                        </div>
                        <Form className="form"/>
                    </div>
                </div>
             </div>

              </div>
            </>
        )
    }
}


Loginpage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Loginpage);