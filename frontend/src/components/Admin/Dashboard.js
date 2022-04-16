import './Dashboard.css';
import {  useNavigate } from "react-router-dom";
import { React, useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { useAlert } from "react-alert";
 
function Dashboard(){
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const { error, isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
    }, [dispatch, error, alert, isAuthenticated]);
  
    function logoutUser() {
      dispatch(logout());
      console.log(isAuthenticated);
      alert.success("Logout Successfully");
      navigate('/');
    }
  
    return(
        <div class="wrapper ">
        <div class="sidebar" data-color="white" data-active-color="danger">
          <div class="logo">
         
            <a href=""><img src={require("../../assets/logo.png")} alt="" width={100}/></a>
          </div>
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="active ">
                <a href="javascript:;">
                  <i class="nc-icon nc-bank"></i>
                  <p>Users</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="nc-icon nc-diamond"></i>
                  <p>Transactions</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="nc-icon nc-pin-3"></i>
                  <p>Statistics</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-panel" style={{height: 100 + "vh"}}>
          <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div class="container-fluid">
              <div class="navbar-wrapper">
                <div class="navbar-toggle">
                  <button type="button" class="navbar-toggler">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a class="navbar-brand" href="javascript:;">Title</a>
              </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <form>
                  <div class="input-group no-border">
                    <input type="text" value="" class="form-control" placeholder="Search..."/>
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <i class="nc-icon nc-zoom-split"></i>
                      </div>
                    </div>
                  </div>
                </form>
                <ul class="navbar-nav">
                  <button className=' btn btn-danger' onClick={logoutUser}>Logout</button>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="row">
              <div class="col-md-12">
                <h3 class="description">Your content here</h3>
              </div>
            </div>
          </div>
          <footer class="footer" >
            <div class="container-fluid">
              <div class="row">
                <nav class="footer-nav">
                 
                </nav>
                <div class="credits ml-auto">
                  <span class="copyright">
                <i class="fa fa-heart heart"></i> From Mr. Bin
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Dashboard;