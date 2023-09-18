import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductDetails.css";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/actions/productActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import BidButton from "./Product/BidButton";
import FavoriteButton from "./Product/FavoriteButton";
import Comment from "./Product/Comment";
import Bids from "./Product/Bids";
import { getUserDetails } from "../../redux/actions/userActions";
import BuyButton from "./Product/BuyButton";
const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { userDetail } = useSelector((state) => state.userDetails);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const [isSeller, setisSeller] = useState(false);
  useEffect(() => {
    dispatch(getSingleProduct(id));
    if (product && user) {
      if (product.buyer && product.user === user._id) {
        dispatch(getUserDetails(product.buyer));
        navigate(`/product/${id}`);
      } else if (product.buyer === user._id) {
        dispatch(getUserDetails(product.user));
        navigate(`/product/${id}`);
      }
    }
  }, [dispatch, navigate, id]);

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
            <div className="productCard card">
              <div className="container-fliud">
                <div className=" row mb-5">
                  <div className="preview col-md-6">
                    <Carousel>
                      {product.images.map((image) => (
                        <Carousel.Item>
                          <img
                            className="d-block w-100 cardImg"
                            src={image.url}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <div className=" text-center">
                      {product.user === user._id && !product.isVerified && (
                        <Link
                          className="btn btn-dark m-3 "
                          to={`/object-detect/${id}/${product.category.toLowerCase()}`}
                        >
                          Verify
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{product.name}</h3>
                    {product.isVerified && (
                      <span className=" mb-3 fw-bold text-success">
                        (Verified)
                      </span>
                    )}
                    <h5 className="price">
                      price:
                      <span> </span>
                      <span>Tk. {product.purchase_price}</span>
                    </h5>
                    <p className="product-description">{product.description}</p>
                    <p>
                      Category -<span> </span>
                      <strong>{product.category}</strong>
                    </p>
                    <p>
                      Condition -<span> </span>
                      <strong>{product.condition}</strong>
                    </p>
                    <p className="vote">
                      Date of purchase -{" "}
                      <strong>{product.date_of_purchase} </strong>
                    </p>

                    <div className="action">
                      <BuyButton product={product}></BuyButton>

                      <FavoriteButton product_id={product._id}></FavoriteButton>

                      <BidButton product_id={product._id}></BidButton>
                    </div>
                  </div>
                </div>
                {product.buyer && user && product.buyer === user._id && (
                  <div>
                    <div class="card text-center">
                      <h6 class="card-header">Seller Information</h6>
                      <div class="card-body">
                        <p class="card-title">Name : {userDetail.name}</p>
                        {/* <p class="card-title">Address : {userDetail.address.location}</p> */}
                        <p class="card-title">Email : {userDetail.email}</p>
                        <Link
                          onClick={(e) =>
                            !user.name || !id ? e.preventDefault() : null
                          }
                          to={`/chat?name=${user.name}&room=${id}`}
                        >
                          <a type="submit" className=" btn btn-primary">
                            Chat Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {product.buyer && user && product.user === user._id && (
                  <div>
                    <div class="card text-center">
                      <h6 class="card-header">Buyer Information</h6>
                      <div class="card-body">
                        <p class="card-title">Name : {userDetail.name}</p>
                        {/* <p class="card-title">Address : {userDetail.address.location}</p> */}
                        <p class="card-title">Email : {userDetail.email}</p>
                        <Link
                          onClick={(e) =>
                            !user.name || !id ? e.preventDefault() : null
                          }
                          to={`/chat?name=${user.name}&room=${id}`}
                        >
                          <a type="submit" className=" btn btn-primary">
                            Chat Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {!product.buyer && user && product.user === user._id && (
                  <Bids product_id={product._id}></Bids>
                )}
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
