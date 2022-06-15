import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import List from "../components/EventList";

class Event extends Component {
    state = {
        events: [],
        insertEvent: {
            event_title: "",
            event_description: "",
            event_link: "",
            due_date: "",   
        }
    }

    fetchDataFromAPIServer = () => {        
        fetch('http://127.0.0.1:8000/api/unauth/event')
            .then(response => response.json())
            .then(result => {                                
                this.setState({
                    events: result.events
                });
            })
    }

    componentDidMount() {
        this.fetchDataFromAPIServer();
    }

    render() {
        return (
            <div className="p-5">
                {
                    this.state.events.map(event => {
                        return <List key={event.id} id={event.id} event_name={event.event_name} event_description={event.event_description} due_date={event.due_date} event_link={event.event_link}/>
                    })
                }
            </div>
        );
    }    
}

export default Event;