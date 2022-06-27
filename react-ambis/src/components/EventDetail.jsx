import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import firebase from "../Firebase";
import React, { useState, useEffect } from 'react';

const EventDetail = () => {
    const params = useParams()    
    const [event, setEvent] = useState({});

    useEffect(() => {
        const ref = firebase.firestore().collection('events').doc(params.id);        
        ref.get().then((doc) => {
            if (doc.exists) {
                setEvent(
                    doc.data(),                    
                );
            } else {
                console.log("No such document!");
            }
        })
    }, []);    

    return (
        <div>
            <img src={event.thumbnail} className="img-fluid" alt="Image Cover" style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }} />
            <div className="event px-5 py-4">
                <h1 className="event-title">{event.title}</h1>
                <p className="event-desc" style={{ textAlign: "justify" }}>{event.desc}</p>
                <div>
                    {/* <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >{this.state.event.due_date}</span>
                    <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal  text-dark">{this.state.event.location}</span> */}
                </div>
                <div className="text-center">
                    <a href={event.link} target="_blank"><button type="button" className="btn ambis-btn-primary w-25" style={{ height: "50px" }}>Apply Now!</button></a>                                         
                </div>
            </div>
        </div>
    );
};
export default EventDetail;