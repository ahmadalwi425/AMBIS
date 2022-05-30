import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';

// Class Component Header 
function Profile() {
    return (
        <div>
            <Link to="/createevent">
                    <Button as={Col} style={{ background: "#2D1B6B", 
                    borderRadius: "30px", 
                    width: "310px"}}>
                        Create an Event
                        </Button>
            </Link>
        </div>
    );
}

export default Profile;