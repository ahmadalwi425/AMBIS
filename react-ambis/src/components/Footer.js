import React, { Component } from "react";
import logo from '../logo-white.png'
// Class Component Footer 
class Footer extends Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-top" style={{ backgroundColor: "#2D1B6B" }}>
                <span className="mb-3 mb-md-0 text-light ">2022 © AMBIS Polinema</span>                    
                <div className="justify-content-end">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                            <img src={logo} alt="Logo" style={{ width: "100px" }} />
                        </a>
                    </div>
            </footer>
        );
    }
}

export default Footer;