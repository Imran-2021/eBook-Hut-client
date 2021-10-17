import React, { useState } from 'react';
import NoFound from '../NoFound/NoFound';
import SIgnIn from '../SignIn/SIgnIn';
import AddBooks from './AddBooks';
import "./Admin.css"
const Admin = () => {
    const [ad,setAb]=useState(1)
    
    return (
        <div class="container">
            <div className="p-4 bg-success w-25">
            <p onClick={()=>setAb(1)}>Add Books</p>
            <p onClick={()=>setAb(2)}>Sign In</p>
            <p onClick={()=>setAb(3)}>Not Found!</p>
            </div>
                <div>
                    {
                        ad===1?<AddBooks/>: ad===2?<SIgnIn/>:<NoFound/>
                    }
                </div>
            
        </div>
    );
};

export default Admin;