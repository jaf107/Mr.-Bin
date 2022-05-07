import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductDetails.css";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import Bid from "./Product/Bid"

import LaptopPic1 from '../../assets/laptop1.jpg'
const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();
  useEffect(() => {
    // ID needs to be passed
    dispatch(getSingleProduct(id));
  }, [dispatch]);
  // const {images} = product;
  let images = [
    {
      src: '"../../assets/laptop1.jpg"',
    },
    {
      src: '"../../assets/laptop2.jpg"',
    },
    {
      src: '"../../assets/laptop3.jpg"',
    },
  ]
  let imageSrc = "../../assets/laptop1.jpg";
  // console.log(imageSrc);
  const navigate = useNavigate();

  const [bidAmount, setBidAmount] = useState(0);

  const onBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };

  const submitBid = (e) => {
    console.log(bidAmount);
  };

  return (
    <div>
      <Header />
      <div className="product">
        <div className="container">
          {product && (
            <div className="card">
              <div className="container-fliud">
                <div className="wrapper row">
                  <div className="preview col-md-6">
                    <Carousel>
                      {images.map((image) => (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            // src={image.src}
                            src={LaptopPic1}
                            // src={require({imageSrc})}

                            // src={require(image.src)}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      ))}
                    </Carousel>

                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{product.name}</h3>
                    <h5 className="price">
                      current price:
                      <span> </span>
                      <span>${product.purchase_price}</span>
                    </h5>
                    <p className="product-description">{product.description}</p>
                    <p>
                      Condition -<span> </span>
                      <strong>{product.condition}</strong>
                    </p>
                    <p className="vote">
                      Date of purchase - <strong>{product.date_of_purchase} </strong>
                    </p>
                    <p className="vote">
                      <strong>91%</strong> of buyers enjoyed this product!{" "}
                      <strong>(87 votes)</strong>
                    </p>

                    <div className="action">
                      <button
                        className="flex-fill border-0 btn btn-success"
                        type="button"
                      >
                        Buy
                      </button>
                      <button
                        className="flex-fill border-0 btn btn-danger"
                        type="button"
                      >
                        <span className="fa fa-heart"></span>
                      </button>

                      <Bid></Bid>
                    </div>
                  </div>


                </div>

                <div className="wrapper row">
                  <div className="col-md-6">
                    <h3>Comment Array</h3>
                    
                  </div>
                  <div className="col-md-6">
                    <h3>Comment Form</h3>
                    <input
                      type="text"
                      placeholder="Enter Name">
                    </input><br />
                    <textarea
                      placeholder="Enter Your Comment"
                    >
                    </textarea>
                    <br/>
                    <input
                        type='submit'
                        className="btn btn-primary"
                        value='Submit Comment'>
                      </input>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
