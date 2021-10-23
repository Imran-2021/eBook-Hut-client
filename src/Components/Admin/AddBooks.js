import React from 'react';
import { Form,Button } from 'react-bootstrap';
import "./Admin.css"
const AddBooks = () => {
    return (
        <div className="w-100">
            
            <Form className="w-100 ">
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Book name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Book Price" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imgbb Img url</Form.Label>
                    <Form.Control type="text" placeholder="url form Imgbb" required />
                </Form.Group>
               
                <Button className="w-100" variant="primary" type="submit">Add Books</Button>
               
            </Form>
        </div>
    );
};

export default AddBooks;