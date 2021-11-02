import React from "react";
import { Link } from "react-router-dom";

const Homepage = () =>{
    return(
        <>
            <div className="home-wrapper">
                    <div className="home-content">
                    <div className="home-head">Welcome to </div>
                    <div className="home-head">
                        <img src={"assets/images/brain.svg"} height="100px" width="100px"/>
                    </div>
                     <div className="home-head-name">Calibrain</div>
                    <div className="home-body">
                            <Link to='/login'>Login</Link>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Homepage;