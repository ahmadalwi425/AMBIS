import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import firebase from "firebase/compat/app"
import logo from '../assets/img/logo.png'
import { Link, Route, Routes } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const Auth = useContext(AuthContext);
    const handleForm = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch((e) => {
                setError(e.message);
            })
    };
    const googleJoin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res)
                Auth.setLoggedIn(true);
            })
    }

    let alert;
    if (error) {
        alert = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <span>{error}</span>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>;
    }

    return (
        <div style={{ backgroundColor: "#EAEAEA" }} className="p-3">
            <div className="text-center">
                <img src={logo} alt="Logo" style={{ width: "200px" }} />
            </div>
            <div className="card my-3 p-3 mx-auto" style={{ width: "500px" }}>
                <div className="card-body">
                    <h1 className="card-title text-center h5 mb-3">Register to AMBIS</h1>
                    {alert}
                    <form onSubmit={(e) => handleForm(e)}>
                        <div className="mb-2">
                            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn ambis-btn-primary" style={{ width: "350px" }}>Submit</button>
                        </div>
                    </form>
                    <hr className="my-4" />
                    <div className="text-center">
                        <button className="googleBtn btn ambis-outline-primary" type="button" onClick={()=>googleJoin()}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="logo"
                            /> Login with Google
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <span>Already have an account? <Link className="ambis-link-primary text-inline" style={{ display: "inline", textDecoration: "underline" }} to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;