import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Marketplace.css";
import { Link } from "react-router-dom";


const Marketplace = () => {
  let product = {
    name: "Laptop",
    price: "$ 500",
    description: "Used for 10 months. Urgent sell. No issues"
  };


  return (

    <div>
      <Header />
      <div className='marketplace'>

        <div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
        </div>

        <section id="sidebar" className=" p-4">
          <div>
            {/* <button className='btn btn-primary' onClick={addProduct()}> Add Product</button> */}
            <Link class="nav-link btn btn-primary p-3 border-0 fw-bold" to="/product">
              Add Product
            </Link>
            <h6 class="p-3 border-bottom">Commodity types</h6>
            <ul>
              <li><a href="#">Books</a></li>
              <li><a href="#">Newspaper</a></li>
              <li><a href="#">Clothes</a></li>
              <li><a href="#">Plastic</a></li>
              <li><a href="#">Glassware</a></li>
            </ul>
          </div>

          {/* <div>
          <h6 class="p-1 border-bottom">Filter By</h6>
          <p class="mb-2">Color</p>
          <ul class="list-group">
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="red"></span>Red </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="teal"></span>Teal </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="blue"></span>Blue </a></li>
          </ul>
        </div>
         */}
          <div>
            <h6 className=' p-3'>Type</h6>
            <form class="ml-md-2">
              <div class="form-inline border rounded p-sm-2 my-2 p-2"> <input type="radio" name="type" id="direct_buy" /> <label for="direct_buy" class="pl-1 pt-sm-0 pt-1">Direct Buy</label> </div>
              <div class="form-inline border rounded p-sm-2 my-2 p-2"> <input type="radio" name="type" id="bidding" /> <label for="bidding" class="pl-1 pt-sm-0 pt-1">Bidding</label> </div>
              <div class="form-inline border rounded p-md-2 p-sm-1 p-2"> <input type="radio" name="type" id="wholesale" /> <label for="wholesale" class="pl-1 pt-sm-0 pt-1">
                Wholesale  </label> </div>
            </form>
          </div>
        </section>
        <section id="products">
          <div class="container">
            <div class="row">

              <h3 className='p-4'>Marketplace</h3>

              <div class="col-lg-3 col-sm-6 col-11 offset-sm-0 offset-1">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={require("../../assets/laptop.jpg")}
                    alt="Card image cap"
                  />
                  <div class="card-body">

                    <h5 className='card-title' >{product.name}</h5>
                    <p class="card-text p-2">
                      {product.description} </p>
                    <p className='card-text text-center p-2'>
                      Price: {product.price}
                    </p>
                    <div className="d-flex">
                      <div className="flex-fill border-0 btn btn-success">Bid</div>
                      <div className="flex-fill border-0 btn btn-danger"><i className=' fas fa-heart'></i></div>
                      <div className="flex-fill border-0 btn btn-primary"> Buy</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-3 col-sm-6 col-11 offset-sm-0 offset-1">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={require("../../assets/laptop.jpg")}
                    alt="Card image cap"
                  />
                  <div class="card-body">

                    <h5 className='card-title' >{product.name}</h5>
                    <p class="card-text p-2">
                      {product.description} </p>
                    <p className='card-text text-center p-2'>
                      Price: {product.price}
                    </p>
                    <div className="d-flex">
                      <div className="flex-fill border-0 btn btn-success">Bid</div>
                      <div className="flex-fill border-0 btn btn-danger"><i className=' fas fa-heart'></i></div>
                      <div className="flex-fill border-0 btn btn-primary"> Buy</div>
                    </div>
                    {/* <div className="d-flex">
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-success card-button'>
                          Bid
                        </button>
                      </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-danger card-button'>
                          <i className=' fas fa-heart'></i></button> </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-primary border-0 card-button'>
                          Buy
                        </button>
                      </div>

                    </div> */}


                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6 col-11 offset-sm-0 offset-1">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={require("../../assets/laptop.jpg")}
                    alt="Card image cap"
                  />
                  <div class="card-body">

                    <h5 className='card-title' >{product.name}</h5>
                    <p class="card-text p-2">
                      {product.description} </p>
                    <p className='card-text text-center p-2'>
                      Price: {product.price}
                    </p>
                    <div className="d-flex">
                      <div className="flex-fill border-0 btn btn-success">Bid</div>
                      <div className="flex-fill border-0 btn btn-danger"><i className=' fas fa-heart'></i></div>
                      <div className="flex-fill border-0 btn btn-primary"> Buy</div>
                    </div>
                    {/* <div className="d-flex">
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-success card-button'>
                          Bid
                        </button>
                      </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-danger card-button'>
                          <i className=' fas fa-heart'></i></button> </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-primary border-0 card-button'>
                          Buy
                        </button>
                      </div>

                    </div> */}


                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6 col-11 offset-sm-0 offset-1">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={require("../../assets/laptop.jpg")}
                    alt="Card image cap"
                  />
                  <div class="card-body">

                    <h5 className='card-title' >{product.name}</h5>
                    <p class="card-text p-2">
                      {product.description} </p>
                    <p className='card-text text-center p-2'>
                      Price: {product.price}
                    </p>
                    <div className="d-flex">
                      <div className="flex-fill border-0 btn btn-success">Bid</div>
                      <div className="flex-fill border-0 btn btn-danger"><i className=' fas fa-heart'></i></div>
                      <div className="flex-fill border-0 btn btn-primary"> Buy</div>
                    </div>
                    {/* <div className="d-flex">
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-success card-button'>
                          Bid
                        </button>
                      </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-danger card-button'>
                          <i className=' fas fa-heart'></i></button> </div>
                      <div className="flex-fill border-0 ">
                        <button className='btn btn-primary border-0 card-button'>
                          Buy
                        </button>
                      </div>

                    </div> */}


                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </section>

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Marketplace