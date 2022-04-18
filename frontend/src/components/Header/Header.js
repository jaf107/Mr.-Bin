import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { useAlert } from "react-alert";

function Header() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated, token} = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
      console.log(token)
  }, [dispatch, error, alert, isAuthenticated]);

  function logoutUser() {
    dispatch(logout());
    console.log(isAuthenticated);
    alert.success("Logout Successfully");
    //navigate('/login');
  }

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
              <input typse="text" class="form-control " placeholder="Search" />
              <div class="input-group-append ">
                <button class="btn" type="button">
                  <i class="fa fa-search text-white"></i>
                </button>
              </div>
            </div>
          </form>
          <ul class="navbar-nav  fw-normal">
            <li class="nav-item active p-2">
              <Link class="nav-link"to="/">
                Home
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/">
                Marketplace
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/recycle">
                Recycle
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          {!isAuthenticated && (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-2">
                <Link class="nav-link " to="/login">
                  <i class="fa-solid fa-right-to-bracket fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link " to="/register">
                  <i class="fa-solid fa-user-plus fs-4"></i>
                </Link>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-2 pt-3">
                <Link to="/account" className=" nav-link">
                  <i className="fa-solid fa-message fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2 pt-3">
                <Link to="/" className=" nav-link">
                  <i className="fa-solid fa-bell fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2 pt-3">
                <Link to="/account" className=" nav-link">
                  <i className="fa-solid fa-user fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2">
                <button
                  class="nav-link btn text-white fw-bold"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
