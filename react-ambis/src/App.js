import './App.css';
import React, { Component } from "react";
import { Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home'
import Event from './containers/Event'
import Recruitment from './containers/Recruitment'
import Profile from './containers/Profile'
import Login from './containers/Login'
// import EventDetail from './containers/EventDetail';
// import CreateEvent from './containers/CreateEvent'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/event" element={< Event />} />        
          {/* <Route path="/event/:id" element={< EventDetail />} /> */}
          <Route path="/recruitment" element={< Recruitment />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/login" element={< Login />} />
          {/* <Route path="/createevent" element={< CreateEvent />}></Route> */}
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

export default App;