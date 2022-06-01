import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Class Component Header 
function EventDetail() {
    let { id } = useParams();

    return (
        <div>
            {/* <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a")`, backgroundSize: 'cover' }}>               
           </div> */}
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a" className="img-fluid" alt="..." style={{}} />
            <div className="event p-4">
                <h1 className="event-title">Event Title</h1>
                <p className="event-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare nisi in risus euismod hendrerit. Cras elementum metus in erat luctus sollicitudin. Aliquam tincidunt metus ex, a molestie enim lacinia ullamcorper. Praesent tempor, turpis non efficitur rutrum, risus erat posuere nibh, quis varius orci odio quis odio. Maecenas vel massa vitae nisl placerat posuere. Curabitur non lectus at erat consectetur finibus. Maecenas et egestas augue. Sed a nisi id mi consequat cursus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi et est ut enim feugiat vestibulum. Donec auctor a sem non dictum. Vestibulum mattis ante diam, sed ultrices urna scelerisque at. Donec sit amet mi eu ex fermentum pulvinar.</p>
                <div className="event-category p-4 row mx-4">
                    <div className="card col" style={{ width: "80%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Lomba Tidur {id}</h5>
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
                <button type="button" className="btn ambis-btn-primary">Apply Now</button>
            </div>
        </div>
    );
}

export default EventDetail;