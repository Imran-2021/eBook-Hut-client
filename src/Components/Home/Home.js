import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ReactGallery from '../Product/BookGallery';
import "./Home.css"
const Home = () => {
    
    return (
        <>
        <div class="home" style={{backgroundImage: 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(Images/cover.jpg)'}}>
            <div className="container">
            <p class="text-primary h3">Why is reading books so important?</p>
            <blockquote  class="text-whitee h4 py-4" cite="https://www.oberlo.com/blog/benefits-of-reading-books">
            Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.
            </blockquote>
            <button className="btn btn-primary"><Link class="muted" to="/books">Chose your fabourite book</Link></button>
            </div>
        </div>
       
        <ReactGallery/>
        <Footer/>
        </>
    );
};

export default Home;