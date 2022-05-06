import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import "./MyProducts.css"

const MyProducts = () => {

    const products = [
        {
            name: "Laptop",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
        {
            name: "Ganja",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
        {
            name: "Pot",
            price: "350",
            quantity: 3,
            date: '12/06/1999'
        },
    ];

    return (
        <div>
            <Header />
            <div className='container'>
                <h2>My Products</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{
                                  textAlign: 'left'
                                }}>
                                    <Link to={'/product'}>
                                        {product.name}
                                    </Link> </td>
                                <td>{product.price} </td>
                                <td>{product.quantity} </td>
                                <td>{product.date} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default MyProducts