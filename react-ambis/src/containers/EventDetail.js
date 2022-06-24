import React, { Component } from "react";
import '../style.css';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Class Component Header 
class EventDetail extends Component () {
    id = useParams()
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
        fetch('http://127.0.0.1:8000/api/unauth/event/')
            .then(response => response.json())
            .then(result => {                
                this.setState({
                    events: result.events
                })
            })
    }

    componentDidMount() {
        this.fetchDataFromAPIServer();
    }

    render() {        
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a" className="img-fluid" alt="Image Cover" style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }} />
                <div className="event px-5 py-4">
                    <h1 className="event-title">Event Title</h1>
                    <p className="event-desc" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare nisi in risus euismod hendrerit. Cras elementum metus in erat luctus sollicitudin. Aliquam tincidunt metus ex, a molestie enim lacinia ullamcorper. Praesent tempor, turpis non efficitur rutrum, risus erat posuere nibh, quis varius orci odio quis odio. Maecenas vel massa vitae nisl placerat posuere. Curabitur non lectus at erat consectetur finibus. Maecenas et egestas augue. Sed a nisi id mi consequat cursus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi et est ut enim feugiat vestibulum. Donec auctor a sem non dictum. Vestibulum mattis ante diam, sed ultrices urna scelerisque at. Donec sit amet mi eu ex fermentum pulvinar.</p>
                    <div>
                        <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >Primary</span>
                        <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal  text-dark">Primary</span>
                    </div>
                    <div className="event-category p-4 row mx-4">
                        <div className="card col">
                            <div className="card-body">
                                <h5 className="card-title">Lomba Tidur</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Requirements
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Prei
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Skill yang disarankan
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Prei
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn ambis-btn-primary w-25" style={{ height: "50px" }}>Apply Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetail;