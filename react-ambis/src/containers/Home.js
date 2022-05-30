import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Class Component Header 
function Home() {
    return (
        <div className="p-5">
            <div class="card" style={{width:"500px"}}>                
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                        
                    </div>
            </div>
        </div>
    );

}

export default Home;