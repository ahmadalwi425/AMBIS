import React, { Component } from "react";
import './../style.css';

class Button extends Component{
    render(){
        return (
        <button className="ambis-primary" style={{borderRadius: "10px", color:"white", paddingLeft:"20px",paddingRight:"20px"}} type={this.props.type}>{this.props.text}</button>
        );
    } 
}
export default Button;