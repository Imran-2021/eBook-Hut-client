import React from 'react';
import { Form,Button } from 'react-bootstrap';
import "./Admin.css"
const AddBooks = () => {
    return (
        <div className="w-100">
            
            <Form className="w-100 " action="http://localhost:3001/addBook" method="post">
            <Form.Group className="mb-3"  >
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Book name"  />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="Book Price" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>catagory</Form.Label>
                    <Form.Control type="text" name="catagory" placeholder="catagory" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>description1</Form.Label>
                    <Form.Control type="text" name="description1" placeholder="description1" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>description2</Form.Label>
                    <Form.Control type="text" name="description2" placeholder="description2" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>description3</Form.Label>
                    <Form.Control type="text" name="description3" placeholder="description3" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imgbb Img url</Form.Label>
                    <Form.Control type="text" name="url" placeholder="url form Imgbb"  />
                </Form.Group>
               
                <Button className="w-100" variant="primary" type="submit">Add Books</Button>
               
            </Form>
        </div>
    );
};

export default AddBooks;