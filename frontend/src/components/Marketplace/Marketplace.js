import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Marketplace.css";
// import "./Card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useAlert } from "react-alert";
import { addToFavorite, getFavorites } from "../../actions/userActions";
import FavoriteButton from "./Product/FavoriteButton";
import BidButton from "./Product/BidButton";
const Marketplace = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { error } = useSelector((state) => state.favorites);
  const alert = useAlert();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getFavorites());
  }, [dispatch]);

  const navigate = useNavigate();

  const onFavoriteClick = (product_id) => {
    dispatch(addToFavorite(product_id));
    if (!error) alert.success("PRODUCT ADDED TO FAVORITES");
    else alert.error("ALREADY ADDED TO FAVORITES");
  };

  return (
    <div>
      <Header />
      <div className="marketplace">
        <h4 className="  text-center bg-light p-4">MARKETPLACE</h4>

        <div className='container'>
          <Link
            className="centerbtn btn btn-primary white fw-bold btn-lg mb-4 mt-4 p-4"
            to={'/addproduct'}
          >
            Post ad
          </Link>
        </div>
        <section id="" className=" container">

          <div className="container">
            <div className="row g-4">
              <div className=" col-md-12">
                <div className="row">
                  {products?.map((product) => (
                    <>
                      {!product.buyer && (product.product_type === "marketplace") && <div className="separate-card col-md-4 col-sm-6 ">
                        <div className="card">
                          <Link to={`/product/${product._id}`}>
                            <img
                              className="card-img-top"
                              src={product.images[0].url}
                              alt="Card image cap"
                            />
                          </Link>
                          <div className="card-body bg-light">
                            <h6 className="card-title center"  >{product.name}</h6>
                            <p className="card-text p-2">{product.description} </p>
                            <p className="card-text text-center p-2">
                              Price: {product.purchase_price}
                            </p>
                            <div className="d-flex">
                              <div className="card-button flex-fill border-0 btn btn-success">
                                Buy
                              </div>
                              <FavoriteButton product_id={product._id}></FavoriteButton>
                              {/* <button
                          className="card-button flex-fill border-0 btn btn-danger  favorite-btn"
                          onClick={() => {
                            onFavoriteClick(product._id);
                          }}
                        >
                          <i className=" fas fa-heart "></i>
                        </button> */}
                              <BidButton product_id={product._id}></BidButton>
                            </div>
                          </div>
                        </div>
                      </div>}
                    </>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Marketplace;
