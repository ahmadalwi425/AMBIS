import React, { Component } from "react";
// import "./../all.css";
import './../style.css';
import Input from './Input';
import Label from './Label';

class LabelInput extends Component  {
    render(){
        return (
            <div style={{marginBottom:"15px"}}>
                <Label name={this.props.name} text={this.props.text}></Label>
                <Input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} important={this.props.important}></Input>
            </div>
        );
    } 
}
export default LabelInput;