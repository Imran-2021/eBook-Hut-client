import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbarr = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
        {/* it's a sticky nv  */}
        {/* <p class="text-center py-1 mb-0 bg-secondary">hello, books lover !! welcome.</p> */}
        <Navbar expanded={expanded} expand="lg" className="nv" sticky="top">
        <Container>
        <Link className="text-centerr nv-color icons " to="/">eBook-House</Link>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className="toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
                <Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} className="text-centerr nv-color" to="/home">Home</Link>
                <Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} className="text-centerr nv-color" to="/books">Books</Link>
                <Link onClick={() => setExpanded(false)} className="text-centerr nv-color" to="/carts">Carts</Link>
                <Link onClick={() => setExpanded(false)} className="text-centerr nv-color" to="/about">About</Link>
                <Link onClick={() => setExpanded(false)} className="text-centerr nv-color" to="/sign-in">Sign-In</Link>
                <Link onClick={() => setExpanded(false)} className="text-centerr nv-color" to="/admin">Admin</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        </>
    );
};

export default Navbarr;