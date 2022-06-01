import './Dashboard.css';
import { Link, useNavigate } from "react-router-dom";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { useAlert } from "react-alert";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Dashboard() {
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
  function toHome() {
    navigate('/');
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="wrapper dashboard">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">

            <Link to={'/'}><img src={require("../../assets/logo.png")} alt="" width={100} /></Link>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li >
                <Link to={'userlist'}>
                  <i className="nc-icon nc-bank"></i>
                  Users
                </Link>
              </li>
              <li>
                <Link to={'productlist'}>
                  <i className="nc-icon nc-bank"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link to={'admin/dashboard/recyclers-list'}>
                  <i className="nc-icon nc-bank"></i>
                  Recyclers
                </Link>
              </li>

              <li>
              <Link to={'admin/dashboard/organization-list'}>
                  <i className="nc-icon nc-bank"></i>
                  Organizations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel" style={{ height: 100 + "vh" }}>
          <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a className="navbar-brand" href="javascript:;">Title</a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                {/* <form>
                  <div className="input-group no-border">
                    <input type="text" value="" className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="nc-icon nc-zoom-split"></i>
                      </div>
                    </div>
                  </div>
                </form> */}
                <ul className="navbar-nav">
                <button className=' btn btn-success' onClick={toHome}>Home</button>

                  <button className=' btn btn-danger' onClick={logoutUser}>Logout</button>

                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <h3 className="description">Your content here Jitesh</h3>
              </div>
            </div>
          </div>
          <footer className="footer" >
            <div className="container-fluid">
              <div className="row">
                <nav className="footer-nav">

                </nav>
                <div className="credits ml-auto">
                  <span className="copyright">
                    <i className="fa fa-heart heart"></i> From Mr. Bin
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Dashboard;