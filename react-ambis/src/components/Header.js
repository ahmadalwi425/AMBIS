import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from '../containers/Home'
import Event from '../containers/Event'
import Post from '../containers/Post'
import Profile from '../containers/Profile'

class Header extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg bg-light px-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" style={{ width: "100px" }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px", borderRadius: "10px" }}></input>
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-right">
                                <li className="nav-item mx-2">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/event">Event</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/post">Post</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <button className="btn btn-sm" style={{ background: "#2D1B6B", borderRadius: "30px", width: "110px" }}>
                                        <a className="nav-link" style={{ color: "white" }} href="#">Log Out</a>
                                    </button>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </nav>
            </Router>
        );
    }
}

export default Header;
