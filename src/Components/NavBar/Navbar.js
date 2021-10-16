import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbarr = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
        <Navbar expanded={expanded} expand="lg" className="nv ">
        <Container>
        <Link className="text-center nv-color icons " to="/">eBook-House</Link>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className="toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} className="text-center nv-color" to="/home">Home</Link>
                <Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} className="text-center nv-color" to="/books">Books</Link>
                <Link onClick={() => setExpanded(false)} className="text-center nv-color" to="/carts">Carts</Link>
                <Link onClick={() => setExpanded(false)} className="text-center nv-color" to="/about">About</Link>
                <Link onClick={() => setExpanded(false)} className="text-center nv-color" to="/sign-in">Sign-In</Link>
                <Link onClick={() => setExpanded(false)} className="text-center nv-color" to="/admin">Admin</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        </>
    );
};

export default Navbarr;