import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductDetails.css";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import BidButton from "./Product/BidButton";
import FavoriteButton from "./Product/FavoriteButton";
import Comment from "./Product/Comment";
const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const [comment, setComment] = useState("");
  const [bidAmount, setBidAmount] = useState(0);

  const onBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };

  const submitForm = (e) => {
    // e.preventDefault()
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
                <div className=" row mb-5">
                  <div className="preview col-md-6">
                    <Carousel>
                      {product.images.map((image) => (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={image.url}
                            alt="First slide"
                          />
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
                      Date of purchase -{" "}
                      <strong>{product.date_of_purchase} </strong>
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
                      <FavoriteButton product_id={product._id}></FavoriteButton>

                      <BidButton product_id={product._id}></BidButton>
                    </div>
                  </div>
                </div>
                <Comment product_id={product._id}></Comment>
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
