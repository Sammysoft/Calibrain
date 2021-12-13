import React from "react";
import Sidebar from "./sidebar";
import { Link } from 'react-router-dom'
import {Dropdown, Menu, Image, Icon} from 'semantic-ui-react';
import  { connect } from 'react-redux'
import * as actions from '../../actions/auth'


function mapStateToProps(state) {
    return {
            user: state.user,
            isAuthenticated: !!state.user.accesstoken
    };
}

const Navbar =({logout}) =>{
    return(
        <>
            <div className="ui container">
            <Menu  className="menu"  secondary  pointing>
                    <Menu.Item>Calibrain</Menu.Item>

                    <Menu.Menu position="right">
                        <Dropdown trigger={<Image avatar src={'assets/images/brain.svg'}/>}>
                        <Dropdown.Menu>
                        <Dropdown.Item><Icon name="user"></Icon> My Profile</Dropdown.Item>
                        <Dropdown.Item><Icon name="settings"></Icon> Settings</Dropdown.Item>
                        <Dropdown.Item><Icon name="chat"></Icon> About</Dropdown.Item>
                            <Dropdown.Item onClick={()=> {logout()}}><Link to="/"><Icon name="sign-out"></Icon> Logout </Link></Dropdown.Item>
                         </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
            </Menu>
            <Sidebar />
            </div>
        </>
    )
}

export default connect(mapStateToProps, {logout: actions.logout})(Navbar);