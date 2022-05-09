import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const products = [
        {
            name: "Laptop",
            user: "Jafar Mahin",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
        {
            name: "Ganja Ganja",
            user: "Jitesh Sureka",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
        {
            name: "Phone",
            user: "Dada",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
    ];
    return (
        <div>
            <div className='container'>
                <h2>My Products</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">User</th>

                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {product.name}
                                </td>
                                <td>{product.user} </td>

                                <td>{product.price} </td>
                                <td>{product.date} </td>
                                <td><button className='btn btn-warning '> Edit </button> </td>
                                <td><button className='btn btn-danger '> Delete </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList