import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Component using Function
const List = (props) => {
    return (
        <div className="card" style={{ width: "500px" }} key={props.id}>
            <div className="card-body">
                <h5 className="card-title">{props.id} {props.event_name}</h5>
                <p className="card-text">{props.event_description}</p>
                <div>
                    <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >{props.due_date}</span>
                    <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal  text-dark"></span>
                </div>
                <Link {{ pathname: props.id, state: props}} className="nav-link active" aria-current="page">Detail</Link>
            </div>
        </div>
    );
};
export default List;