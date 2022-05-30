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
import Post from './containers/Post'
import Profile from './containers/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Router>
            <Routes>
              <Route exact path="/" element={< Home />}></Route>
              <Route path="/event" element={< Event />}></Route>
              <Route path="/post" element={< Post />}></Route>
              <Route path="/profile" element={< Profile />}></Route>
            </Routes>
          </Router>
        </div>
        <Footer title='Footer Page' name='JTI' />
      </div>
    );
  }
}

export default App;