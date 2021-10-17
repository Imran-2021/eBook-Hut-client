import React, { useState } from 'react';
import { useParams } from 'react-router';
import FakeData from "../../FakeData"
import "./Books.css"
const BookDetails = () => {
    const { idd } = useParams()
    // console.log(id);
    const [book, setBooks] = useState(
        FakeData.filter(x => x.id === idd)
    )
    console.log(book[0].name);
    const {name,catagory,price,id,image}=book[0]

    const [cart, setCart] = useState(0)
    return (
        <div className="details">
            <p className="text-center p-2 bg-secondary text-dark">here the details of Book- <span style={{color:"white"}}>{name}</span></p>

            <div className="details-in container">
               <div className="dd1 mt-5">
               <img src={image} width="450px" height="350px" alt="book-images" />
               <h5>{name}</h5>
               <p>Id : {id}</p>
                <h5>Book - {name}</h5>
                <h5>Catagory - {catagory}</h5>
                <h5>Price - ${price}</h5>
                </div>
                <div className="dd mt-5">
                <h5>Book - {name}</h5>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dolores optio ut inventore quasi quae natus perferendis aliquam architecto explicabo? Quisquam natus vero repudiandae dolorem ullam voluptates maiores asperiores at?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum totam amet nam ipsam, quaerat nihil aut ducimus dolores minus accusamus saepe esse necessitatibus, voluptas eveniet consequatur vero libero perspiciatis distinctio!</p>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus fuga consequatur dicta cum quasi, nam accusantium aut aperiam pariatur ipsa optio modi, commodi sequi placeat unde sit corrupti quod.</h5>
                    <button onClick={() => setCart(cart + 1)} className="btn btn-primary mb-2 w-100">Add to Cart</button>
               </div>
            </div>
        </div>
    );
};

export default BookDetails;