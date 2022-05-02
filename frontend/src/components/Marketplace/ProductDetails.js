import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./ProductDetails.css";

const Product = () => {
    let product = {
        name: "Laptop",
        price: 500,
        condition: "Good",
        description: "Used for 10 months. Urgent sell. No issues",
        years_of_use: 5
    };
    return (
        <div>
            <Header />
            <div className='product'>
                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">

                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1">
                                            <img src={require("../../assets/laptop.jpg")} />
                                        </div>
                                    </div>
                                   

                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">
                                        {product.name}
                                    </h3>
                                    <h5 class="price">
                                        current price:
                                        <span> </span> 
                                        <span>
                                            ${product.price}
                                        </span>
                                    </h5>
                                    <p class="product-description">
                                        {product.description}
                                    </p>
                                    <p>Condition - 
                                        <span> </span>
                                        <strong>
                                            {product.condition}
                                        </strong>
                                    </p>
                                    <p className='vote'>Years of Use - <strong>{product.years_of_use} </strong></p>
                                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>


                                    <div class="action">
                                        <button class="flex-fill border-0 btn btn-success" type="button">Buy</button>
                                        <button class="flex-fill border-0 btn btn-danger" type="button"><span class="fa fa-heart"></span></button>
                                        <button class="flex-fill border-0 btn btn-warning" type="button">Bid</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Product
