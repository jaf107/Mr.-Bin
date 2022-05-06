import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./ProductDetails.css";
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/productActions';
import { useNavigate } from 'react-router-dom';
const Product = () => {
   

    let product = {
        name: "Laptop",
        price: 500,
        condition: "Good",
        description: "Used for 10 months. Urgent sell. No issues",
        years_of_use: 5,
        bid_open: false,
        bids: []
    };

    const [bidAmount, setBidAmount] = useState(0);

    const onBidAmountChange = (e) => {
        // setBidAmount({ ...bidAmount, [e.target.name]: e.target.value });
        setBidAmount(e.target.value);
        // console.log(bidAmount);
        // setBidAmount({...bidAmount, e.target.name: e.target.value} );
    }

    const submitBid = (e) => {
        console.log(bidAmount);
    }

    return (
        <div>
            <Header />
            <div className='product'>
                <div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">

                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={require("../../assets/laptop1.jpg")}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={require("../../assets/laptop2.jpg")}
                                                alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={require("../../assets/laptop3.jpg")}
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>


                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">
                                        {product.name}
                                    </h3>
                                    <h5 className="price">
                                        current price:
                                        <span> </span>
                                        <span>
                                            ${product.price}
                                        </span>
                                    </h5>
                                    <p className="product-description">
                                        {product.description}
                                    </p>
                                    <p>Condition -
                                        <span> </span>
                                        <strong>
                                            {product.condition}
                                        </strong>
                                    </p>
                                    <p className='vote'>Years of Use - <strong>{product.years_of_use} </strong></p>
                                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>


                                    <div className="action">
                                        <button
                                            className="flex-fill border-0 btn btn-success" type="button"
                                        >
                                            Buy
                                        </button>
                                        <button
                                            className="flex-fill border-0 btn btn-danger" type="button"
                                        >
                                            <span className="fa fa-heart"></span>
                                        </button>

                                        <button
                                            type="button"
                                            className="flex-fill border-0 btn btn-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                        >
                                            Bid
                                        </button>
                                        <h4  >Your bidded amount is <strong>{bidAmount} </strong> </h4>

                                        <div
                                            className="modal fade"
                                            id="staticBackdrop"
                                            data-bs-backdrop="static"
                                            data-bs-keyboard="false"
                                            tabindex="-1"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5
                                                            className="modal-title"
                                                            id="staticBackdropLabel"
                                                        >Bid</h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        >

                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <input type="number" name='bidAmount'
                                                            onChange={onBidAmountChange}
                                                            value={bidAmount}
                                                            placeholder="Enter your bid Amount" class="form-control" id="inputZip" />


                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success"
                                                            data-bs-dismiss="modal"

                                                            onClick={submitBid}
                                                        >
                                                            Bid
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
