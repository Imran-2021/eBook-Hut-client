import React, { useContext, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import FirebaseConfig from './FirebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
initializeApp(FirebaseConfig);
const SIgnUp = () => {
    const history =useHistory()
    let { from } = { from: { pathname: "/sign-in" } };
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


    const handleSubmit = (e) => {
        if (user.password && user.email) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const userr = userCredential.user;
                    console.log(userr);
                    const newUser = { ...user }
                    newUser.error = "";
                    newUser.success = true;
                    newUser.created = false;
                    updated(user.name)
                    console.log("object",user.name);
                    setUser(newUser);
                   setTimeout(() =>{
                    history.replace(from);
                   },3000)
                })
                .catch((error) => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser);
                });
        }

        e.preventDefault();
    }
    console.log(user);
    // signin ---- 

  const auth = getAuth();
   function updated(name) {
      
        updateProfile(auth.currentUser, {
            displayName: `${name}`,
        }).then(() => {
            console.log("name updated");
        }).catch((error) => {
           console.log(error);
        });
    }

    return (
        <div className="w-50 m-auto d-flex justify-content-center vh ">
            
            <Form className="w-50 m-auto" onSubmit={handleSubmit}>
            {
                        user.error && <p style={{ color: 'red' }}>error {user.error}</p>
                    }
                    {
                        user.success && <p style={{ color: 'green' }}>new account creating successful.</p>
                    }
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" onBlur={handleChange} name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleChange} type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <input className="btn btn-primary w-100 mt-3" type="submit" value="Sign Up" />
                
                {/* <Button className="w-100" variant="primary" type="submit">Sign Up</Button> */}
                
               <div className="mt-3">
               or <Link to="/sign-in">Sign In</Link>
               </div>
            </Form>
        </div>
    );
};

export default SIgnUp;