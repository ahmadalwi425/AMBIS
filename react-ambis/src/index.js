import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import routes from "./components/routes"
import firebase from './Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
// reportWebVitals();
