import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Carts.css"
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import CartItems from './CartItems';

const Carts = () => {
    return (
        <div className="container">
            <p className="pt-1 ctn"> <Link className="text-linkr" to="/books"><FaArrowLeft /> Continue Book shopping</Link> </p>
            <div>
                <div>
                    <h3 style={{ marginbottom: "0px" }}>cart</h3>
                    <p className="pb-1">You have <span className="text-primary h5">7</span> items in cart </p>
                </div>
                <div className="contan">
                    <CartItems />
                </div>

            </div>
            <div className="text-end px-5">
                <h5 className="me-3">Cart Total : - $<span>32513</span></h5>
                <button className="btn btn-primary w-25 ">CheckOut</button>
            </div>
        </div>
    );
};

export default Carts;