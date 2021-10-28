import React, { useContext, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import FirebaseConfig from './FirebaseConfig';
initializeApp(FirebaseConfig);
const SIgnIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const history =useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name: "",
        email: "",
        active: false,
        password: "",
        error: "",
        success: false,
        created:false,

    })
    const handleChange = (e) => {
        let validp = true;
        console.log(e.target.name, e.target.value);
        if (e.target.name === "email") {
            validp = e.target.value
        }
        if (e.target.name === "name") {
            validp = e.target.value
        }
        if (e.target.name === "password") {
            validp = e.target.value.length > 5
        }

        if (validp) {
            const newUser = { ...user }
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    console.log(user);
    // signin ---- 
    const handleSubmitin = (e) => {
        if (user.password && user.email) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    const newUser = { ...user }
                    newUser.error = "";
                    newUser.success = true;
                    newUser.created = true;
                    setUser(newUser);
                    setLoggedInUser(newUser)
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    newUser.success = false;
                    newUser.created = false;
                    setUser(newUser);
                    setLoggedInUser(newUser)
                });
        }
        e.preventDefault();
    }
    return (
        <div className="w-50 m-auto d-flex justify-content-center vh  ">
            
            <Form className="w-50 m-auto" onSubmit={handleSubmitin}>
            {
                        user.error && <p style={{ color: 'red' }}>error {user.error}</p>
                    }
                    {
                        user.success && <p style={{ color: 'green' }}>{user.created? "user login success":"err"}</p>
                    }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email"required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  onBlur={handleChange} type="password" name="password"  placeholder="Password" required/>
                </Form.Group>
                <input className="btn btn-primary mt-3 w-100" type="submit" value="Sign In" />
                <div class="w-100 text-center mt-3"><a onClick={()=>alert("developer is too busy to make this work")} href="/sign-in">Forgot Password?</a></div>

                <div className="mt-3">
                or <Link to="/sign-up">Sign Up</Link>
               </div>
                
            </Form>
        </div>
    );
};

export default SIgnIn;