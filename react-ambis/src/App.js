// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component from Class App</h1>        
        <Footer title='Footer Page' name='JTI' />
      </div>
      // <Router>
      //   <div className="App">
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li>
      //         <Link to="/dashboard">Dashboard</Link>
      //       </li>
      //     </ul>
      //     <hr />
      //     <Routes>
      //       <Route exact path="/">
      //         <Home />
      //       </Route>
      //       <Route path="/about">
      //         <About />
      //       </Route>
      //       <Route path="/dashboard">
      //         <Dashboard />
      //       </Route>
      //     </Routes>
      //   </div>
      // </Router>
    );
  }
}


function Home() {
  return (
    <div>
      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;