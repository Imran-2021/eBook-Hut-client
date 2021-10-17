import React from 'react';
import "./BookCatagory.css"
const Catagory = ({filterImage,catagorItems}) => {
    return (
        <div>
            <div className="mt-5 text-center ">
                <div className="bookCata">
                    {
                        catagorItems.map((x) => {
                            return(
                                <button className="btn btn-primary m-3" onClick={()=>filterImage(x)}>{x}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagory;