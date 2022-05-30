import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import logo from '../logo.png';

// Class Component Header 
function Login() {
    return (
        <div style={{ backgroundColor: "#EAEAEA" }} className="p-3">
            <div className="text-center">
                <img src={logo} alt="Logo" style={{ width: "200px" }}/>
            </div>
            <div className="card my-3 p-3 mx-auto" style={{ width: "500px" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Log In to AMBIS</h5>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Username" />                            
                        </div>
                        <div className="mb-3">                            
                            <input type="password" className="form-control" id="password" placeholder="password"/>
                        </div>                        
                        <div className="text-center">
                            <button type="submit" className="btn ambis-btn-primary" style={{width:"350px"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;