import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/NavBar/index';
import { Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import * as actions from "../actions/auth"
import FalseAuth from '../components/auth'

function mapStateToProps(state) {
    return {
            user: state.user,
            isAuthenticated: !!state.user.accesstoken
    };
}


class Dashboardpage extends Component {


 renderUser() {
     const { user } = this.props;
     const { isAuthenticated, logout } = this.props;

     console.log(this.props)
        return(
            <>
            { isAuthenticated ?<div className="ui container">
                  <h3  id="welcome" style={{fontFamily: 'Irish Gover'}}>Welcome, {user.firstname}</h3>
              <div className="dashboard-body">
                    <div className="left-menu">
                            <div className="head">
                                    <Link to="/staff" ><Icon name='globe' size="massive" style={{color:"whitesmoke"}}/></Link>
                            </div>
                            <div className="body">
                                <p>Register A Staff</p>
                            </div>
                    </div>
                    <div className="left-menu">
                    <div className="head">
                        <Link to="/student"><Icon name='universal access' size="massive" style={{color:"whitesmoke"}}/></Link>
                    </div>
                    <div className="body">
                    <p>Access Students</p>
                    </div>
                    </div>
                    <div className="left-menu">
                    <div className="head">
                        <Link to=""><Icon name='send' size='massive' style={{color:"whitesmoke"}}/></Link>
                    </div>
                    <div className="body">
                    <p>Upload Scores</p>
                    </div>
                    </div>
                </div>
                <div className="dashboard-body">
                    <div className="left-menu">
                            <div className="head">
                                    <Link to="/register"><Icon name='globe' size="massive" style={{color:"whitesmoke"}}/></Link>
                            </div>
                            <div className="body">
                                <p>Register Students</p>
                            </div>
                    </div>
                    <div className="left-menu">
                    <div className="head">
                        <Link to=""><Icon name='map pin' size="massive" style={{color:"whitesmoke"}} /></Link>
                    </div>
                    <div className="body">
                    <p>Access Staffs</p>
                    </div>
                    </div>
                    <div className="left-menu">
                    <div className="head">
                       <Link to=""> <Icon name='file pdf' size='massive' style={{color:"whitesmoke"}}/></Link>
                    </div>
                    <div className="body">
                    <p>Issue Results</p>
                    </div>
                    </div>
                </div>
              </div>:<FalseAuth />}
            </>
        )
    }


    render() {
        return (
        <>
         <Navbar />
         {this.renderUser()}

        </>
        );
    }
}

export default connect(
    mapStateToProps, {logout: actions.logout}
)(Dashboardpage);