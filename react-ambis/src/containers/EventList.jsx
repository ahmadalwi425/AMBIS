import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

// Component using Function
const List = (props) => {
    return (
        // <div className="card col-2 mx-4" style={{ width: "500px" }} key={props.id}>
        //     <div className="card-body">
        //         <h5 className="card-title">{props.title}</h5>
        //         <p className="card-text text-truncate">{props.desc}</p>
        //         <div>
        //             {/* <span className="badge border border-dark rounded-pill fs-6 fw-normal text-dark" >{props.due_date}</span>
        //             <span className="badge border border-dark rounded-pill fs-6 mx-3 fw-normal text-dark">{props.location}</span> */}
        //         </div>
        //         <Link to={`/event/${props.id}`} className="ambis-link-primary" aria-current="page">Detail</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        //         <Link to={`/event/edit/${props.id}`} className="ambis-link-primary" aria-current="page">Edit</Link>
        //     </div>
        // </div>
        <div>
            <div class="desc-box-secondary">
                <div class="overlap-2">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <div className="btn-group">
                        <Link to={`/event/${props.id}`} className="ambis-link-primary" aria-current="page"><button type="button" className="btn ambis-btn-primary" style={{ fontSize: "18px" }}>Detail</button></Link>
                        <Link to={`/event/edit/${props.id}`} className="ambis-link-primary mx-3" aria-current="page"><button type="button" className="btn ambis-btn-primary" style={{ fontSize: "18px" }}>Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default List;