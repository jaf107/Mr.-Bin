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
    // console.log(products);
    navigate('/product');
    // window.location.href = '/product'

  }

  return (

    <div>
      <Header />
      <div className='marketplace'>


        <section id="products">

          <span className='p-5 spanMarket' >Marketplace</span>
          <Link className='btn btn-success addbtn' to={'/addproduct'}>
            Add Product
          </Link>
          {/* <button   > Add Product</button> */}

          <div class="container">
            <div class="row">

              {products?.map((product) => (
                <div class="separate-card col-lg-3 col-sm-6 col-11" >
                <div class="card" onClick={goToProduct} >
                  <img
                    class="card-img-top"
                    src={require("../../assets/laptop.jpg")}
                    alt="Card image cap"
                  />
                  <div class="card-body" >

                    <h5 className='card-title' >{product.name}</h5>
                    <p class="card-text p-2">
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