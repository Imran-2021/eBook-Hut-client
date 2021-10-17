import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Carts.css"
import { FaPlus,FaMinus,FaTrashAlt } from "react-icons/fa";

const Carts = () => {
    return (
        <div className="container">
            <p className="pt-1 ctn"> <Link className="text-linkr" to="/books"><FaArrowLeft /> Continue Book shopping</Link> </p>
            <div>
            <div>
               <h3>cart</h3>
               <p className="pb-1">You have <span className="text-primary h5">7</span> items in cart </p>
            </div>
            <div className="contan">
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
            </div>
            
            </div>
            <div className="text-end px-5 py-2">
            <button className="btn btn-outline-primary w-25 ">CheckOut</button>
            </div>
        </div>
    );
};

export default Carts;