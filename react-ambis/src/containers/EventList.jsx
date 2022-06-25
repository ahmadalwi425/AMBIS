import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Component using Function
const List = (props) => {
    return (
        <div className="card" style={{ width: "500px" }} key={props.id}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <div>
                    {/* <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >{props.due_date}</span>
                    <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal text-dark">{props.location}</span> */}
                </div>
                <Link to={`/event/${props.id}`} className="nav-link active" aria-current="page">Detail</Link>
            </div>
        </div>
    );
};
export default List;