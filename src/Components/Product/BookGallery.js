import React, { useState } from 'react';
import FakeData from "../../FakeData"
import BookCatagory from './BookCatagory';
import Allbooks from './Allbooks';
const allCatagories =[...new Set(FakeData.map(x=>x.catagory)),"All"];

const ReactGallery = () => {
    const [catagorItems,setCatagoryItems]=useState(allCatagories)
    const [items,setItems]=useState(FakeData)
    const filterImage=(fimage)=>{
        if(fimage==="All")
        {
            setItems(FakeData)
        }
        else{
            const filterImages = FakeData.filter((x)=>{
                return x.catagory===fimage;
        })
        setItems(filterImages)

        }
    }
    return (
        <div>
            <h1 className="mt-3 text-secondary text-center main-heading">What kind of books you want to buy ? </h1>
            <BookCatagory filterImage={filterImage} setItems={setItems} catagorItems={catagorItems}/>
            <Allbooks items={items}/>
        </div>
    );
};

export default ReactGallery;