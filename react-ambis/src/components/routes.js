import React from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Event from "./Event";
import EventDetail from "./EventDetail";
import Recruitment from "./Recruitment";
import Profile from "./Profile";

const routes = [
    { name: "Register", path: "/register", exact: true, main: <Register /> },
    { name: "Login", path: "/login", exact: true, main: <Login /> },
    { name: "Home", path: "/", exact: true, main: <Home /> },
    { name: "Event", path: "/event", exact: false, main:  <Event /> },
    { name: "Event Detail", path: "/event/:id", exact: false, main:  <EventDetail /> },
    { name: "Recruitment", path: "/recruitment", exact: false, main:  <Recruitment /> },
    { name: "Profile", path: "/profile", exact: false, main: <Profile /> },    
];
export default routes;

