import React, { Component } from "react";
import logo from '../assets/img/logo.png'
import { BrowserRouter}  from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import './../style.css';
import firebase from '../Firebase';
import LabelInput from '../Parts/LabelInput';
import Label from '../Parts/Label';
import Textarea from '../Parts/TextArea';
import Button from '../Parts/Button';
import Select from 'react-select';
import Option from '../Parts/Option';

// Class Component Header 
class EditEvent  extends Component{
    
    constructor() {
        super();
        this.ref = firebase.firestore().collection('category');
        // this.refOneEvent = firebase.firestore().collection('events').doc(params.id);
        this.refEvent = firebase.firestore().collection('events');
        this.unsubscribe = null;
        this.state = {
            listcategory: [],
            category:"seminar",
            desc:"",
            due_date:"",
            link:"",
            location:"",
            thumbnail:"",
            title:"",
            loop:0
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { category,desc,due_date,link,location,thumbnail,title, } = this.state;
        console.log(this.state);
        this.refEvent.add({
            category,
            desc,
            due_date,
            link,
            location,
            thumbnail,
            title,
        }).then((docRef) => {
            this.setState({
                category:'',
                desc:'',
                due_date:'',
                link:'',
                location:'',
                thumbnail:'',
                title:'',
            });
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
        this.refOneEvent.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    category:doc.category,
                    desc:doc.desc,
                    due_date:doc.due_date,
                    link:doc.link,
                    location:doc.location,
                    thumbnail:doc.thumbnail,
                    title:doc.title,
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    render(){
        const { category,desc,due_date,link,location,thumbnail,title, } = this.state;
        return (
            <div className="ambis-edges ambis-outline-primary m-5" style={{ padding: "50px",marginTop:"50px",marginBottom:"50px"}}>
                <form onSubmit={this.onSubmit}>
                    <Col className="mx-0">
                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Title  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange}  value={title} style={{ padding: "10px",width:"100%"}} id="title" type="text" placeholder="Title of your event" name="title"/>
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Location  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange} value={location} style={{ padding: "10px",width:"100%"}} id="location" type="text" placeholder="Location of your event" name="location"/>
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Date Time
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={this.onChange} value={due_date} style={{ padding: "10px",width:"100%"}} id="due_date" type="datetime-local" placeholder="Date of your event" name="due_date"/>
                        </div>
                        <div as={Row} style={{marginBottom:"15px"}}>
                            <Label name="desc" text="Description"></Label>
                            <textarea name="desc"  onChange={this.onChange} value={desc} placeholder="desc of your event" className="ambis-edges ambis-outline-primary" style={{ padding: "10px",width:"100%"}}/>
                        </div>                        
                        <div as={Row} style={{marginBottom:"15px"}}>                            
                            <Label name="category" text="Category Event"></Label>
                                <select name="category" value={category} className="ambis-edges ambis-outline-primary" style={{ padding: "10px",width:"100%"}}   onChange={this.onChange}>
                                {
                                    this.state.listcategory.map(data => {
                                        return <option value={data.name_category}>{data.name_category}</option>
                                    })
                                }
                                </select>
                            
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Thumbnail
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={thumbnail} onChange={this.onChange} style={{ padding: "10px",width:"100%"}} id="thumbnail" type="text" placeholder="Title of your event" name="thumbnail"/>
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font"  style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Link Registration  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={link} onChange={this.onChange} style={{ padding: "10px",width:"100%"}} id="link" type="text" placeholder="Link registration of your event" name="link"/>
                        </div>
                        <button className="ambis-primary" style={{borderRadius: "10px", color:"white", paddingLeft:"20px",paddingRight:"20px"}} type="submit" text="Submit">Submit</button>
                    </Col>
                </form>
                
            </div>
        )
    }
}

export default EditEvent;