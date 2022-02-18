import React from "react";
import { Link } from "react-router-dom";

const  FalseAuth = () =>{
    return(
        <>
                <div className="container" style={{display: "flex", flexDirection: "column"}}>
                    <div className="img-wrapper" style={{flex: 1, width: "50%",height: "50%", margin: "auto"}}>
                        <img className="responsive" src="https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62058709-stock-photo-person-with-warning-sign.jpg" alt="warning image" width="100%" height="100%" />
                    </div>
                    <div className="info-wrapper" style={{flex: 1, textAlign: "center", width: "70%", fontFamily: "Irish Gover", margin: "auto", padding: "10%"}}>
                    <h1>Yo!, You are not authenticated. Please Log In<br/>
                    <Link to="/auth">
                        Log In
                    </Link>
                    </h1>
                    </div>
                </div>
        </>
    )
}

export default FalseAuth;