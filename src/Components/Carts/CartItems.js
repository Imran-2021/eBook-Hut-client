import React from 'react';
import { FaPlus,FaMinus,FaTrashAlt } from "react-icons/fa";
const CartItems = () => {
    return (
        <>
            <div className="cart-container m-auto">
                <div className="incressDecress">
                    <img className="imgg" width="90" height="90"src="https://i.ibb.co/VJ3VW6X/book.png" alt="" />
                </div>
                <div className="incressDecress">
                    <h5>Book 2</h5>
                </div>
                <div className="incressDecress h5" >
                    <span className="cursor"><FaMinus/></span> 
                    <input className="inputs mx-2" id="carts" type="text" placeholder="1" readOnly/>
                    <span className="cursor"><FaPlus/></span>
                </div>
                <div className="incressDecress ">
                    <h3 className="h5">$<span>20</span></h3>
                </div>
                <div className="incressDecress">
                    <p className="h6 cursor"><FaTrashAlt/></p>
                </div>
            </div>
            <hr />
            <div className="cart-container m-auto">
                <div className="incressDecress">
                    <img className="imgg" width="90" height="90"src="https://i.ibb.co/VJ3VW6X/book.png" alt="" />
                </div>
                <div className="incressDecress">
                    <h5>Book 2</h5>
                </div>
                <div className="incressDecress h5" >
                    <span className="cursor"><FaMinus/></span> 
                    <input className="inputs mx-2" id="carts" type="text" placeholder="1" readOnly/>
                    <span className="cursor"><FaPlus/></span>
                </div>
                <div className="incressDecress ">
                    <h3 className="h5">$<span>20</span></h3>
                </div>
                <div className="incressDecress">
                    <p className="h6 cursor"><FaTrashAlt/></p>
                </div>
            </div>
            <hr />
            <div className="cart-container m-auto">
                <div className="incressDecress">
                    <img className="imgg" width="90" height="90"src="https://i.ibb.co/VJ3VW6X/book.png" alt="" />
                </div>
                <div className="incressDecress">
                    <h5>Book 2</h5>
                </div>
                <div className="incressDecress h5" >
                    <span className="cursor"><FaMinus/></span> 
                    <input className="inputs mx-2" id="carts" type="text" placeholder="1" readOnly/>
                    <span className="cursor"><FaPlus/></span>
                </div>
                <div className="incressDecress ">
                    <h3 className="h5">$<span>20</span></h3>
                </div>
                <div className="incressDecress">
                    <p className="h6 cursor"><FaTrashAlt/></p>
                </div>
            </div>
        </>
    );
};

export default CartItems;