import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Marketplace.css";
import { Link } from "react-router-dom";


const Marketplace = () => {
  let product = {
    name: "Laptop",
    price: "500usd"
  };
  

  return (

    <div>
      <Header />
      <div className='marketplace'>

        <div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
        </div>

        <section id="sidebar">
          <div>
            {/* <button className='btn btn-primary' onClick={addProduct()}> Add Product</button> */}
            <Link class="nav-link btn btn-primary" to="/product">
              Add Product
            </Link>
            <h6 class="p-1 border-bottom">Commodity types</h6>
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
            <h6>Type</h6>
            <form class="ml-md-2">
              <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" id="boring" /> <label for="boring" class="pl-1 pt-sm-0 pt-1">Direct Buy</label> </div>
              <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" id="ugly" /> <label for="ugly" class="pl-1 pt-sm-0 pt-1">Bidding</label> </div>
              <div class="form-inline border rounded p-md-2 p-sm-1"> <input type="radio" name="type" id="notugly" /> <label for="notugly" class="pl-1 pt-sm-0 pt-1">
                Wholesale  </label> </div>
            </form>
          </div>
        </section>
        <section id="products">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">{product.name} </p>
                    <p>{product.price} </p>
                    {/* <span class="fa fa-circle" id="red"></span> 
                  <span class="fa fa-circle" id="teal"></span> 
                  <span class="fa fa-circle" id="blue"></span> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-3 offset-lg-0 col-sm-4 offset-sm-2 col-11 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Ugly chair and table set</p>
                    <p>$100</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Leather Lounger</p>
                    <p>$950</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Tree Trunk table set</p>
                    <p>$390</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/3230274/pexels-photo-3230274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Red Leather Bar Stool</p>
                    <p>$30</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Modern Dining Table</p>
                    <p>$740</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">Boring Dining Table</p>
                    <p>$760</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
                <div class="card"> <img class="card-img-top" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">An Ugly Office</p>
                    <p>$90</p> <span class="fa fa-circle" id="red"></span> <span class="fa fa-circle" id="teal"></span> <span class="fa fa-circle" id="blue"></span>
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