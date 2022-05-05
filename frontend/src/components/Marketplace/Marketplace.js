import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import "./Marketplace.css";
// import "./Card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';

const Marketplace = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {

    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  }

  return (

    <div>
      <Header />
      <div className='marketplace'>


        <section id="products">

          <span className='p-5 spanMarket' >Marketplace</span>
          <div className='container'>
            {/* <Link className='btn btn-success myproductbtn' to={'/my/products'}>
              My Products
            </Link> */}
            <Link className='btn btn-success addbtn' to={'/addproduct'}>
              Add Product
            </Link>
          </div>
          <div className="container">
            <div className="row">

              {products?.map((product) => (
                <div className="separate-card col-lg-3 col-sm-6 col-11">
                  <div className="card" onClick={goToProduct} >
                    <img
                      className="card-img-top"
                      src={product.images[0].url}
                      // src={require("../../assets/laptop.jpg")}
                      alt="Card image cap"
                    /> 
                    <div className="card-body" >

                      <h5 className='card-title' >{product.name}</h5>
                      <p className="card-text p-2">
                        {product.description} </p>
                      <p className='card-text text-center p-2'>
                        Price: {product.purchase_price}
                      </p>
                      <div className="d-flex">
                        <div className="card-button flex-fill border-0 btn btn-success" >Buy</div>
                        <div className="card-button flex-fill border-0 btn btn-danger"><i className=' fas fa-heart'></i></div>
                        <div className="card-button flex-fill border-0 btn btn-warning"> Bid</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </section>

      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Marketplace