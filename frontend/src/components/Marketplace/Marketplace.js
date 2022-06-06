import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
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
import Search from "../Marketplace/Search";
const Marketplace = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products } = useSelector((state) => state.products);
  const { error } = useSelector((state) => state.favorites);
  const alert = useAlert();
  useEffect(() => {
    dispatch(getProducts(keyword));
    dispatch(getFavorites());
  }, [dispatch, keyword]);

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
        <section id="" className=" container">
          <h4 className="  text-center bg-light p-4">MARKETPLACE</h4>
          <div className="container">
            {/* <Link className='btn btn-success myproductbtn' to={'/my/products'}>
              My Products
            </Link> */}
          </div>
          <div className="container">
            <div className="row">
              <div className=" col-md-3">
                <div class="d-grid gap-2">
                <Link
                  className="btn border-0 addbtn btn-block"
                  to={"/addproduct"}
                >
                  Add Product
                </Link>
                </div>
                <Search></Search>
              </div>

              <div className=" col-md-9">
                
                <div className="">
                  {products?.map((product) => (
                    <>
                      {!product.buyer &&
                        product.product_type === "marketplace" && (
                          <span className="separate-card ">
                            <div className="card">
                              <Link to={`/product/${product._id}`}>
                                <img
                                  className="card-img-top"
                                  src={product.images[0].url}
                                  alt="Card image cap"
                                />
                              </Link>
                              <div className="card-body bg-light">
                                <h6 className="card-title center">
                                  {product.name}
                                </h6>
                                <p className="card-text p-2">
                                  {product.description}{" "}
                                </p>
                                <p className="card-text text-center p-2">
                                  Price: {product.purchase_price}
                                </p>
                                <div className="d-flex">
                                  <div className="card-button flex-fill border-0 btn btn-success">
                                    Buy
                                  </div>
                                  <FavoriteButton
                                    product_id={product._id}
                                  ></FavoriteButton>
                                  <BidButton
                                    product_id={product._id}
                                  ></BidButton>
                                </div>
                              </div>
                            </div>
                          </span>
                        )}
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
