import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

// Class Component Header 
function Profile() {
    const { currentUser } = useAuth()
    console.log(currentUser);        
    return (
        <div className="container p-5 text-center" >
            <img src="https://randomuser.me/api/portraits/women/21.jpg" className="rounded-circle"/>
            <div className="mt-3">
                <h1>{currentUser.email}</h1>
            </div>
        </div>
    )    
}

export default Profile;