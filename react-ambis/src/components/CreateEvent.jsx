import React, { Component } from "react";
import logo from '../logo.png';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import './../style.css';
import LabelInput from '../Parts/LabelInput';
import Label from '../Parts/Label';
import Textarea from '../Parts/TextArea';
import Button from '../Parts/Button';
import Select from 'react-select';
import Option from '../Parts/Option';

// Class Component Header 
class CreateEvent  extends Component{
    state = {
        AllData:[],
        option:[],
        event_title:"",
        event_description:"",
        due_date:"",
        id_category:"",
        event_link:"",
    }
    getCreateEvent = () =>{
        fetch('http://127.0.0.1:8000/api/unauth/event/create')
            .then(res => res.json())
            .then(result =>
                // console.log(result)
                this.setState({
                    Data: result['data'],
                    option: result['data']['category']
                })
            )
            .catch((err) => {
                console.log(err);
            });
    }
    componentDidMount(){
        this.getCreateEvent();
    }
    cek(){
        console.log(this.state)
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    render(){
        return (
            <div className="ambis-edges ambis-outline-primary" style={{ padding: "50px",marginTop:"50px",marginBottom:"50px"}}>
                <form>
                    <Col className="mx-0">
                        <LabelInput as={Row} type="text" important="*" placeholder="Title of your event" name="event_title" text="Title" onChange={(item)=>this.setState({event_title:item.target.value})}></LabelInput>
                        <LabelInput as={Row} type="date" important="*" placeholder="Date of your event" name="due_date" text="Date" onChange={(item)=>this.setState({due_date:item.target.value})}></LabelInput>
                        <div as={Row} style={{marginBottom:"15px"}}>
                            <Label name="description" text="Description"></Label>
                            <Textarea name="event_description" onChange={(item)=>this.setState({event_description:item.target.value})} placeholder="Description of your event"></Textarea>
                        </div>
                        <div as={Row} style={{marginBottom:"15px"}}>
                            <Label name="category" text="Category Event"></Label>
                                <select name="id_category" className="ambis-edges ambis-outline-primary" style={{ padding: "10px",width:"100%"}}  onChange={(item)=>this.setState({id_category:item.target.value})}>
                                {
                                    this.state.option.map(data => {
                                        return <Option value={data.id} name={data.category_event_name} />
                                    })
                                }
                            </select>
                            
                        </div>
                        <LabelInput as={Row} type="text" important="*" onChange={(item)=>this.setState({event_link:item.target.value})} placeholder="Link registration of your event" name="event_link" text="Link Registration"></LabelInput>

                        <Button type="submit" text="Submit"></Button>
                        <Button type="button" text="Cek" onClick={this.cek()}></Button>
                    </Col>
                </form>
                
            </div>
        )
    }
}

export default CreateEvent;