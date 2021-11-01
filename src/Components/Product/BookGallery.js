import React, { useEffect, useState } from 'react';
import FakeData from "../../FakeData"
import BookCatagory from './BookCatagory';
import Allbooks from './Allbooks';
const allCatagories =[...new Set(FakeData.map(x=>x.catagory)),"All"];

const ReactGallery = () => {
    const [items,setItems]=useState([])
    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    console.log(items);
    return (
        <div>
            <Allbooks items={items}/>
        </div>
    );
};

export default ReactGallery;