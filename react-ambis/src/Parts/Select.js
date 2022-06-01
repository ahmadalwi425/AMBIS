import React, { Component } from "react";
// import "./../all.css";
import './../style.css';

class Select extends Component  {
    render(){
        return (
        <select 
            className="ambis-edges ambis-outline-primary" 
            id={this.props.id} name={this.props.name} 
            type={this.props.type} 
            placeholder={this.props.placeholder} 
            style={{ padding: "10px",width:"100%"}}
        ></select>
        );
    } 
}
export default Select;