import './Dashboard.css';
import { Link, useNavigate } from "react-router-dom";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { useAlert } from "react-alert";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserList from './Lists/UserList';
import ProductList from './Lists/ProductList';

function Dashboard() {

  const user = {
    name: "Jitesh"

  }

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



  const allToggleOff = () => {
    var ul = document.getElementById('userlist');
    ul.style.display = "none";
    var pl = document.getElementById('productlist');
    pl.style.display = "none"
    // document.querySelector('productlist').style.display = 'none';
  }

  const userToggleOn = () => {
    var ul = document.getElementById('userlist');
    ul.style.display = "block";
    // document.querySelector('userlist').style.display = 'block';
  }

  const userClicked = (e) => {
    console.log("User list clicked")
    allToggleOff();
    userToggleOn();
  }

  const productToggleOn = () => {
    var pl = document.getElementById('productlist');
    pl.style.display = "block";
  }

  const productClicked = (e) => {
    allToggleOff();
    productToggleOn();
  }

  return (
    <div className='admin-dash'>
      {/* <Header/> */}

      <div class="container bootstrap snippets bootdey">

        <div class="row">
          <div class="profile-nav col-md-3">
            <div class="panel">
              <div class="user-heading round">
                <a href="#">
                  {/* <img src={user.avatar.url} alt="" /> */}
                </a>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>

              <ul
                class="nav nav-pills nav-stacked flex-column"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <li class="  p-3">
                  <a
                    className="text-decoration-none nav-link active"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    <i class="fa fa-user"></i> All Users
                  </a>
                </li>
                <li className="p-3">
                  <a
                    className="text-decoration-none nav-link"
                    id="v-pills-products-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-products"
                    href="#v-pills-products"
                    role="tab"
                    aria-controls="v-pills-products"
                    aria-selected="false"
                  >
                    <i class="fa fa-calendar"></i> All Products
                    <span class="label label-warning pull-right r-activity">
                      {/* {products.size} */}
                    </span>
                  </a>
                </li>
                
                 <li className="p-3 ">
                  <a
                    className="text-decoration-none nav-link"
                    id="v-pills-favorites-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-favorites"
                    href="#v-pills-favorites"
                    role="tab"
                    aria-controls="v-pills-favorites"
                    aria-selected="false"
                  >
                    <i class="fa fa-calendar"></i>
                    Favorites
                    <span class="label label-warning pull-right r-activity">
                      9
                    </span>
                  </a>
                </li>
                {/*<li className="p-3">
                  <a
                    className="text-decoration-none nav-link"
                    id="v-pills-edit-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-edit-profile"
                    href="#v-pills-edit-profile"
                    role="tab"
                    aria-controls="v-pills-edit-profile"
                    aria-selected="false"
                  >
                    <i class="fa fa-edit"></i>
                    Edit profile
                  </a>
                </li> */}

              </ul>
            </div>
          </div>
          <div class="col-md-9 tab-content " id="v-pills-tabContent">
            <div className='container p-3 m-3'>
              <h4>Date</h4>
            </div>

            <div
              class="tab-pane fade show active "
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <UserList />

            </div>
            <div
              class="tab-pane fade "
              id="v-pills-products"
              role="tabpanel"
              aria-labelledby="v-pills-products-tab"
            >
              <ProductList />

            </div>
            {/* <div
              class="tab-pane fade "
              id="v-pills-favorites"
              role="tabpanel"
              aria-labelledby="v-pills-favorites-tab"
            >
            </div>
            <div
              class="tab-pane fade "
              id="v-pills-edit-profile"
              role="tabpanel"
              aria-labelledby="v-pills-edit-profile-tab"
            >
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;