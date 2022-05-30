import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component from Class App</h1>        
        <Footer/>
      </div>
    );
  }
}

export default App;