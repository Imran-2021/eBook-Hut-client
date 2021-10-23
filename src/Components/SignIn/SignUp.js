import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
const SIgnUp = () => {
    return (
        <div className="w-50 m-auto d-flex justify-content-center vh ">
            
            <Form className="w-50 m-auto">
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
               
                <Button className="w-100" variant="primary" type="submit">Sign Up</Button>
                or <Link to="/sign-in">Sign In</Link>
            </Form>
        </div>
    );
};

export default SIgnUp;