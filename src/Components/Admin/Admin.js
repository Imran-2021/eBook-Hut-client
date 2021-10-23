import React, { useState } from 'react';
import ManageBook from '../ManageBook/ManageBook';
import NoFound from '../NoFound/NoFound';
import OrderedBook from '../OrderedBook/OrderedBook';
import AddBooks from './AddBooks';
import "./Admin.css"
const Admin = () => {
    const [ad, setAb] = useState(1)

    return (
        <div class="admin">
            <div className="admin-in">
                <div className="p-4 bg-success admin-inn">
                    <p className="admin-nv" onClick={() => setAb(1)}>Add Books</p>
                    <p className="admin-nv" onClick={() => setAb(2)}>ManageBook</p>
                    <p className="admin-nv" onClick={() => setAb(3)}>OrderedBook</p>
                </div>
                <div className="admin-innn">
                    <div>
                    {
                        ad === 1 ? <AddBooks /> : ad === 2 ? <ManageBook /> : <OrderedBook />
                    }</div>
                </div>
            </div>

        </div>
    );
};

export default Admin;