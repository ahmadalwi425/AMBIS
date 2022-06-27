import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import firebase from "../Firebase";
import { Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Label from '../Parts/Label';

const EditEvent = () => {
    const params = useParams();   
    const [event, setEvent] = useState({});
    const [desc, setDesc] = useState("");
    const [due_date, setDue_date] = useState("");
    const [link, setLink] = useState("");
    const [location, setLocation] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
            const ref = firebase.firestore().collection('events').doc(params.id);     
            ref.get().then((doc) => {
                if (doc.exists) {
                    setEvent(
                        doc.data(),                    
                    );
                    setDesc(event.desc);
                    setDue_date(event.due_date);
                    setLink(event.link);
                    setLocation(event.location);
                    setThumbnail(event.thumbnail);
                    setTitle(event.title); 
                } else {
                    console.log("No such document!");
                }
            });
    }, []);    

    const onSubmit = (e) => {
        e.preventDefault();
        const ref2 = firebase.firestore().collection('events').doc(params.id); 
        ref2.set({
            desc,
            due_date,
            link,
            location,
            thumbnail,
            title,
        }).then((docRef) => {
            window.location.href = '/event'
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    console.log("isi event");
    console.log(title);
    return (
        <div className="ambis-edges ambis-outline-primary m-5" style={{ padding: "50px",marginTop:"50px",marginBottom:"50px"}}>
                <form onSubmit={onSubmit}>
                    <Col className="mx-0">
                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Title  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={(event) => {setTitle(event.target.value);}}  value={title} style={{ padding: "10px",width:"100%"}} id="title" type="text" placeholder="Title of your event" name="title"/>
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Location  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={(event) => {setLocation(event.target.value);}} value={location} style={{ padding: "10px",width:"100%"}} id="location" type="text" placeholder="Location of your event" name="location"/>
                        </div>

                        {/* <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Date Time
                            </label>
                            <input className="ambis-edges ambis-outline-primary" onChange={(event) => {setEvent({due_date: event.target.value});}} value={due_date} style={{ padding: "10px",width:"100%"}} id="due_date" type="datetime-local" placeholder="Date of your event" name="due_date"/>
                        </div> */}
                        <div as={Row} style={{marginBottom:"15px"}}>
                            <Label name="desc" text="Description"></Label>
                            <textarea name="desc"  onChange={(event) => {setDesc(event.target.value);}} value={desc} placeholder="desc of your event" className="ambis-edges ambis-outline-primary" style={{ padding: "10px",width:"100%"}}/>
                        </div>                        
                        {/* <div as={Row} style={{marginBottom:"15px"}}>                            
                            <Label name="category" text="Category Event"></Label>
                                <select name="category" value={category} className="ambis-edges ambis-outline-primary" style={{ padding: "10px",width:"100%"}}  onChange={(event) => {setEvent.category(event.target.value);}}>
                                {
                                    listcategory.map(data => {
                                        return <option value={data.name_category}>{data.name_category}</option>
                                    })
                                }
                                </select>
                            
                        </div> */}

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font" style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Thumbnail
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={thumbnail} onChange={(event) => {setThumbnail(event.target.value);}} style={{ padding: "10px",width:"100%"}} id="thumbnail" type="text" placeholder="Title of your event" name="thumbnail"/>
                        </div>

                        <div style={{marginBottom:"15px"}}>
                            <label className="ambis-font"  style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}>
                                Link Registration  
                            </label>
                            <input className="ambis-edges ambis-outline-primary" value={link} onChange={(event) => {setLink(event.target.value);}} style={{ padding: "10px",width:"100%"}} id="link" type="text" placeholder="Link registration of your event" name="link"/>
                        </div>
                        <button className="ambis-primary" style={{borderRadius: "10px", color:"white", paddingLeft:"20px",paddingRight:"20px"}} type="submit" text="Submit">Submit</button>
                    </Col>
                </form>
                
            </div>
    );
};
export default EditEvent;