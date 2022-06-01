import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Class Component Header 
function Event() {
    return (
        <div className="p-5">
            <div className="card" style={{width:"500px"}}>                
                    <div className="card-body">
                        <h5 className="card-title">Lomba Event</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="15" className="nav-link active" aria-current="page">Detail</Link>
                    </div>
            </div>
        </div>
    );
}

export default Event;