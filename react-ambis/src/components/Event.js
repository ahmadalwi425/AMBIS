import React, { Component } from "react";
import List from "../containers/EventList";
import firebase from '../Firebase';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

class Event extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('events');
        this.unsubscribe = null;
        this.state = {
            events: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
            const { title, desc, link, due_date } = doc.data();
            events.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                desc,
                link,
                due_date,
            });
        });
        this.setState({
            events
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="container py-3">                
                <div>
                    <Link to="/event/create">
                            <button className="btn btn-primary my-3" style={{ background: "#2D1B6B", borderRadius: "30px",  width: "200px"}}>
                                Create Event
                            </button>
                    </Link>
                </div>
                <div className="row justify-content-center">
                    {
                        this.state.events.map(event => {
                            return <List key={event.key} id={event.key} title={event.title} desc={event.desc} location={event.location} due_date={event.due_date} link={event.link} />
                        })
                    }
                </div>                
            </div>
        );
    }
}

export default Event;