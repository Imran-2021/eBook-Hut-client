import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const OrderedBook = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/cardBooks")
            .then((response) => response.json())
            .then(data => {
                setBook(data)
            })
    }, [])
    console.log(book);
    return (
        <div>

            <Table responsive="md">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Ordered By</th>
                        <th>Email</th>
                        <th>on-Going</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((x, y) => {
                            console.log(x);
                            return (
                                <tr>
                                    <td>{y + 1}</td>
                                    <td>{x.book}</td>
                                    <td>{x.price}</td>
                                    <td>{x.name}</td>
                                    <td>{x.emaill}</td>
                                    <td>
                                    <select id="item" name="item">
                                    <option value="lorem">lorem</option>
                                    <option value="lorem">lorem</option>
                                    <option value="lorem">lorem</option>
                                    <option value="lorem">lorem</option>
                                    </select>
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>
        </div>
    );
};

export default OrderedBook;