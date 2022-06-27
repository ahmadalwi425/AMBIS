import React, { Component } from "react";
// import "./../all.css";
import './../style.css';

class Label extends Component  {
    render(){
        return (
        <label 
            className="ambis-font" 
            htmlFor={this.props.name} 
            style={{paddingBottom:"3px",paddingTop:"5px",fontWeight: "bold"}}
        >
            {this.props.text} <p style={{ color: "red",fontWeight: "bold"}}>{this.props.important}</p>
        </label>
        );
    } 
}
export default Label;