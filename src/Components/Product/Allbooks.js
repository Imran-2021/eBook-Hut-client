import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ items }) => {
    const [cart, setCart] = useState(0)

    return (
        <div className="contain">
            <div className="m-5">
                <div className="containe py-5">
                    {
                        items.map((element) => {
                            const { id, image, name, catagory, price } = element;
                            return (<>
                                <div className="container-in" key={id}>
                                    <div className="row ">
                                        {/* for image  */}
                                        <div className="">
                                            <img src={image} width="100%" height="200" alt="" className="image-fluid" />
                                        </div>
                                        <div className="m-2">
                                            <div className="">
                                                <p>Id : {id}</p>
                                                <h5>Book - {name}</h5>
                                                <h5>Catagory - {catagory}</h5>
                                                <h5>Price - ${price}</h5>
                                                <div className="inner">
                                                    <Link className="text-link" to={`/details/${id}`}><button onClick={()=>
                                                    setTimeout(() =>window.scrollTo(0, 0), 10)}className="btn btn-primary">See Details</button></Link>
                                                    <button onClick={() => setCart(cart + 1)} className="btn btn-primary">Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Menu;