import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// Class Component Header 
function Profile() {
    return (
        <div>
            <Link to="/createevent">
                    <button className="btn btn-primary" style={{ background: "#2D1B6B", borderRadius: "30px",  width: "310px"}}>
                        Create an Event
                    </button>
            </Link>
        </div>
    );
}

export default Profile;