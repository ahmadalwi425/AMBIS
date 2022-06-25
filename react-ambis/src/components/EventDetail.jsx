import React, { Component } from "react";
import '../style.css';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import firebase from '../Firebase';
// Class Component Header 

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {},
            key: ''
        };
    }

    componentDidMount() {
        const id = "HU2JWCHvw55fpap6pRr3";
        const ref = firebase.firestore().collection('events').doc(id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    event: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a" className="img-fluid" alt="Image Cover" style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }} />
                <div className="event px-5 py-4">
                    <h1 className="event-title">{this.state.event.title}</h1>
                    <p className="event-desc" style={{ textAlign: "justify" }}>{this.state.event.desc}</p>
                    <div>
                        {/* <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >{this.state.event.due_date}</span>
                        <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal  text-dark">{this.state.event.location}</span> */}
                    </div>
                    <div className="text-center">
                        <a href={this.state.event.link} target="_blank"><button type="button" className="btn ambis-btn-primary w-25" style={{ height: "50px" }}>Apply Now!</button></a>                                         
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetail;