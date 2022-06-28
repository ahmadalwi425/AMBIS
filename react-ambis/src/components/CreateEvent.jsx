import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import './../style.css';
import firebase from '../Firebase';
import Label from '../Parts/Label';

class CreateEvent extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('category');
        this.refEvent = firebase.firestore().collection('events');
        this.unsubscribe = null;         
        this.state = {
            listcategory: [],
            category: "seminar",
            desc: "",
            due_date: "",
            link: "",
            location: "",
            thumbnail: "",
            title: "",
            loop: 0            
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { category, desc, due_date, link, location, thumbnail, title, created_by} = this.state;
        console.log(this.state);
        this.refEvent.add({
            category,
            desc,
            due_date,
            link,
            location,
            thumbnail,
            title,
            created_by
        }).then((docRef) => {
            this.setState({
                category: '',
                desc: '',
                due_date: '',
                link: '',
                location: '',
                thumbnail: '',
                title: '',
                created_by: ''
            });
            window.location.href = '/event'
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    onCollectionUpdate = (querySnapshot) => {
        const listcategory = [];
        querySnapshot.forEach((doc) => {
            const { name_category } = doc.data();
            listcategory.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name_category,
            });
        });
        this.setState({
            listcategory
        });        
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);        
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    render() {
        const { category, desc, due_date, link, location, thumbnail, title, } = this.state;                      
        return (
            <div className="ambis-edges ambis-outline-primary m-5" style={{ padding: "50px", marginTop: "50px", marginBottom: "50px" }}>
                <form onSubmit={this.onSubmit}>
                    <Col className="mx-0">
                        <div style={{ marginBottom: "15px" }}>
                            <label className="ambis-font" style={{ paddingBottom: "3px", paddingTop: "5px", fontWeight: "bold" }} htmlFor="title">
                                Title
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange} value={title} style={{ padding: "10px", width: "100%" }} id="title" type="text" placeholder="Title of your event" name="title" />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <label className="ambis-font" style={{ paddingBottom: "3px", paddingTop: "5px", fontWeight: "bold" }} htmlFor="location">
                                Location
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange} value={location} style={{ padding: "10px", width: "100%" }} id="location" type="text" placeholder="Location of your event" name="location" />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <label className="ambis-font" style={{ paddingBottom: "3px", paddingTop: "5px", fontWeight: "bold" }} htmlFor="due_date">
                                Date Time
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange} value={due_date} style={{ padding: "10px", width: "100%" }} id="due_date" type="datetime-local" placeholder="Date of your event" name="due_date" />
                        </div>
                        <div as={Row} style={{ marginBottom: "15px" }}>
                            <Label name="desc" text="Description"></Label>
                            <textarea name="desc" onChange={this.onChange} value={desc} placeholder="desc of your event" className="ambis-edges ambis-outline-primary" style={{ padding: "10px", width: "100%" }} />
                        </div>
                        <div as={Row} style={{ marginBottom: "15px" }}>
                            <Label name="category" text="Category Event"></Label>
                            <select name="category" value={category} className="ambis-edges ambis-outline-primary" style={{ padding: "10px", width: "100%" }} onChange={this.onChange}>
                                {
                                    this.state.listcategory.map(data => {
                                        return <option key={data.name_category} value={data.name_category}>{data.name_category}</option>
                                    })
                                }
                            </select>

                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <label className="ambis-font" style={{ paddingBottom: "3px", paddingTop: "5px", fontWeight: "bold" }}>
                                Thumbnail
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={thumbnail} onChange={this.onChange} style={{ padding: "10px", width: "100%" }} id="thumbnail" type="text" placeholder="Title of your event" name="thumbnail" />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <label className="ambis-font" style={{ paddingBottom: "3px", paddingTop: "5px", fontWeight: "bold" }}>
                                Link Registration
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={link} onChange={this.onChange} style={{ padding: "10px", width: "100%" }} id="link" type="text" placeholder="Link registration of your event" name="link" />
                        </div>
                        <button className="ambis-primary" style={{ borderRadius: "10px", color: "white", paddingLeft: "20px", paddingRight: "20px" }} type="submit" text="Submit">Submit</button>
                    </Col>
                </form>

            </div>
        )
    }
}

export default CreateEvent;