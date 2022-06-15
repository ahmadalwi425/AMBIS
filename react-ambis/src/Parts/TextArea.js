import React, { Component } from "react";
// import "./../all.css";
import './../style.css';

class TextArea extends Component  {
    render(){
        return (
        <textarea 
            className="ambis-edges ambis-outline-primary" 
            id={this.props.id} name={this.props.name} 
            type={this.props.type} 
            placeholder={this.props.placeholder} 
            style={{ padding: "10px",width:"100%"}}
        ></textarea>
        );
    } 
}
export default TextArea;