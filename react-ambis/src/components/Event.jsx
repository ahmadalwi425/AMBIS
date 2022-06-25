import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import List from "../containers/EventList";
import firebase from '../Firebase';

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
            <div className="p-5">
                {
                    this.state.events.map(event => {
                        return <List key={event.key} id={event.key} title={event.title} desc={event.desc} location={event.location} due_date={event.due_date} link={event.link} />
                    })
                }
            </div>
        );
    }
}

export default Event;