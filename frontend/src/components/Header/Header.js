import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <div className="container header">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img src={require("../../assets/logo.png")} alt="logo" width={70} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group input-group-sm">
                <input
                  typse="text"
                  class="form-control "
                  placeholder="Search"
                />
                <div class="input-group-append ">
                  <button class="btn" type="button">
                    <i class="fa fa-search text-white"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul class="navbar-nav  fw-normal">
              <li class="nav-item active p-2">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  Marketplace
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  Recycle
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  Donate
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  About 
                </a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-2">
                <Link class="nav-link " to="/login"><i class="fa-solid fa-right-to-bracket fs-4"></i></Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link " to="/register"><i class="fa-solid fa-user-plus fs-4"></i></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
