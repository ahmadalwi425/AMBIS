import React, { Component } from "react";
// import "./../all.css";
import './../style.css';

class Input extends Component  {
    render(){
        return (
        <input 
            className="ambis-edges ambis-outline-primary" 
            style={{ padding: "10px",width:"100%"}}
            id={this.props.id} name={this.props.name} 
            type={this.props.type} 
            placeholder={this.props.placeholder} 
        ></input>
        );
    } 
}
export default Input;