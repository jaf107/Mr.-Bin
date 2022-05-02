import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./ProductDetails.css";

const Product = () => {
    let product = {
        name: "Laptop",
        price: "$ 500",
        description: "Used for 10 months. Urgent sell. No issues"
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
                                        <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
                                    </div>
                                    <ul class="preview-thumbnail nav nav-tabs">
                                        <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    </ul>

                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">Laptop</h3>
                                    <h5 class="price">current price: <span>$180</span></h5>
                                    <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                    <p>Condition: <strong>Good</strong></p>
                                    <p className='vote'>Years of Use: <strong>5</strong></p>
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
