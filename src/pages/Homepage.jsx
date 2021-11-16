import React from 'react';
import { Link } from "react-router-dom";
import SweetAlert from 'sweetalert-react';



const Homepage = () =>{

    return(
        <>

            <div className="home-wrapper">
                    <SweetAlert
                title="Welcome To Calibrain"
                text="Are you ready for the cruise?"
                onConfirm={() => this.setState({ show: false })}
                />
                    <div className="home-content">
                    <div className="home-head">Welcome To </div>
                    <div className="home-head">
                        <img src={"assets/images/brain.svg"} height="100px" width="100px"/>
                    </div>
                     <div className="home-head-name">Calibrain</div>
                    <div className="home-body">
                            <Link to='/auth'>Login</Link> <br/>
                            Or <br/>
                            <Link to='/register'>Sign Up</Link>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Homepage;