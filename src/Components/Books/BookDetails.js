import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import "./Books.css"
const BookDetails = () => {
const [loggedInUser,setLoggedInUser]=useContext(userContext)
console.log("loggedInUser",loggedInUser);
    const { idd } = useParams()
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then(res => res.json())
            .then(data => {
                setBook(
                    data.filter(x => x._id == idd)
                )
            })
    }, [])
    console.log("bookk", book[0]);
    
    function cartItem(e,id){
        loggedInUser.x++;
        e.target.innerHTML="Added"
        console.log(e.target.innerHTML);
        const book=document.getElementById("bookNm").innerText;
        const price=document.getElementById("bookp").innerText;
        const img=document.getElementById("img").innerText;
        const emaill= loggedInUser.email;
        const name= loggedInUser.displayName;
        const dataa = {idd,emaill,name,price,book,img}
        console.log(dataa,"dataa");
         // post data to the server - 
         fetch("http://localhost:3001/addToCard", {
            method: 'POST',
            body: JSON.stringify({ dataa }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    return (
        <div className="details">
            <p className="text-center p-2 bg-secondary text-dark">here the details of Book- <span style={{ color: "white" }}>{book[0]?.name}</span></p>

            <div className="details-in container">
                <div className="dd1 mt-5">
                    <img src={book[0]?.url} width="450px" height="350px" alt="book-images" />
                    <h5 >Book - <span id="bookNm">{book[0]?.name}</span> </h5>
                    <h5>Catagory - {book[0]?.catagory}</h5>
                    <h5>Price - $ <span id="bookp">{book[0]?.price}</span></h5>
                </div>
                <div className="dd mt-5">
                    <p style={{display: 'none'}}><span id="img">{book[0]?.url}</span></p>
                    <h5>Book - {book[0]?.name}</h5>
                    <h5>{book[0]?.description1}</h5>
                    <h5>{book[0]?.description2}</h5>
                    <h5>{book[0]?.description3}</h5>
                    <button onClick={(e) => cartItem(e,book[0]?._id)} className="btn btn-primary mb-2 w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;