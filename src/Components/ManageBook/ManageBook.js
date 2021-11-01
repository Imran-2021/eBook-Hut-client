import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBook = () => {
    const [book, setBook] = useState([])
    console.log(book);
    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [])
    console.log(book);

    function deleteProduct(evt,id) {
        // console.log(event.target.parentNode);
        fetch(`http://localhost:3001/delete/${id}`, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                // making smoothy - 
                if (data) {
                    evt.target.parentNode.parentNode.style.display = 'none';
                    // evt.target.parentNode.style.display = 'none';
                    // console.log(evt.target.parentNode.parentNode);
                }
            })
    }


    return (
        <div>
            
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Book Name</th>
                        <th>Book Catagory</th>
                        <th>Book Price</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                {
                book.map((x,y)=> {
                    console.log(x);
                    return (
                        <tr>
                        <td>{y+1}</td>
                        <td>{x.name}</td>
                        <td>{x.catagory}</td>
                        <td>{x.price}</td>
                        <td><button className="btn btn-primary" onClick={(evt)=>deleteProduct(evt, x._id)}>Delete</button></td>
                        <td><button className="btn btn-primary">Update</button></td>
                    </tr>
                    )
                    })
                }

                   

                </tbody>
            </Table>

        </div>
    );
};

export default ManageBook;