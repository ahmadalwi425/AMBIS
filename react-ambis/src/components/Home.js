import React, { Component } from "react";
import logo from '../assets/img/logo.png'
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Class Component Header 
function Home() {
    return (
        <div className="container">
            <section className="hero-image">
                <img className="img" src="./assets/img/Banner.svg" alt=""></img>
            </section>

            <hr />

            <div className="desc-box">
                <div className="overlap-1">
                    <h1>Polinema Hackaton</h1>
                    <p>AMBIS (Aplikasi Mahasiswa Butuh Informasi SKKM) is a website-based information system that accommodates the dissemination of information on the recruitment of members of organizations or committees, events such as seminars and workshops, recruitment of project members, and competitions held at State Polytechnic of Malang.</p>
                </div>
            </div>

            <hr />
{/* 
            <div className="title mb-5">
                <h1>Events</h1>
                <div className="desc-box-secondary">
                    <div className="overlap-2">
                        <h1>Website Competition</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );

}

export default Home;