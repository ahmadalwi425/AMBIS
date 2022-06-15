import React, { Component } from "react";
// import "./../all.css";
import './../style.css';

class Option extends Component  {
    render(){
        return (
        <option value={this.props.value}> {this.props.name} </option>
        );
    } 
}
export default Option;