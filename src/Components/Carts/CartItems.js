import React, { useContext, useEffect, useState } from 'react';
import { FaPlus,FaMinus,FaTrashAlt } from "react-icons/fa";
import { userContext } from '../../App';
const CartItems = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)

    const [book, setBook] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/singlecardBooks?email="+loggedInUser.email)
            .then((response) => response.json())
            .then(data => {
                setBook(data)
                const x= data.length;
                setLoggedInUser({...loggedInUser,x})
            })
    }, [])
    console.log(book);
    return (
        <>
            {
                book.map(book =>{
                    return ( 
                        <>
                    <div className="cart-container m-auto">
                    <div className="incressDecress">
                        <img className="imgg" width="90" height="90"src={book.img} alt="" />
                    </div>
                    <div className="incressDecress">
                        <h5>{book.book}</h5>
                    </div>
                    <div className="incressDecress h5" >
                        <span className="cursor"><FaMinus/></span> 
                        <input className="inputs mx-2" id="carts" type="text" placeholder="1" readOnly/>
                        <span className="cursor"><FaPlus/></span>
                    </div>
                    <div className="incressDecress ">
                        <h3 className="h5">$<span>{book.price}</span></h3>
                    </div>
                    <div className="incressDecress">
                        <p className="h6 cursor"><FaTrashAlt/></p>
                    </div>
                    
                </div>
                <hr />
                </>) 
                })
            }
            
        </>
    );
};

export default CartItems;