import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../style.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light px-4">
                <div className="container-fluid">
                    <button className="navbar-toggler btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" style={{ width: "100px" }} />
                        </a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px", borderRadius: "10px" }}></input>
                            <button className="btn btn-sm ambis-btn-primary" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                            <li className="nav-item mx-2">
                                <Link to="/" className="nav-link active ambis-link-active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link ambis-link-primary" to="/event">Event</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link ambis-link-primary" to="/recruitment">Recruitment</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link ambis-link-primary" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <button className="btn btn-sm ambis-btn-primary" style={{ width: "110px" }}>
                                    <Link className="nav-link text-light" to="/login">Log Out</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
