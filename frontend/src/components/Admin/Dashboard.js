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
import RecyclerList from './Lists/RecyclerList';
import OrganizationList from './Lists/OrganizationList';
import RecycleOrder from './Orders/RecycleOrder';
import DonationOrder from './Orders/DonationOrder';

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
                <li className="nav-item  p-3">
                  <a
                    className="text-decoration-none nav-link active"
                    id="v-pills-user-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-user"
                    href="#v-pills-user"
                    role="tab"
                    aria-controls="v-pills-user"
                    aria-selected="true"
                  >
                    <i class="fa fa-user"></i>
                    Users
                  </a>
                </li>
                <li className="nav-item  p-3">
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
                    <i class="fa fa-bag-shopping"></i>
                    Products
                    <span class="label label-warning pull-right r-activity">
                      {/* {products.size} */}
                    </span>
                  </a>
                </li>

                <li className="nav-item  p-3">
                  <a
                    className="text-decoration-none nav-link"
                    id="v-pills-recycler-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-recycler"
                    href="#v-pills-recycler"
                    role="tab"
                    aria-controls="v-pills-recycler"
                    aria-selected="false"
                  >
                    <i class="fa fa-recycle"></i>
                    Recyclers

                  </a>
                </li>
                <li className="nav-item  p-3">
                  <a
                    className="text-decoration-none nav-link"
                    id="v-pills-organization-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-organization"
                    href="#v-pills-organization"
                    role="tab"
                    aria-controls="v-pills-organization"
                    aria-selected="false"
                  >
                    <i class="fa fa-building-ngo"></i>
                    Organizations
                  </a>
                </li>

                <li className='p-3'>
                  <a
                    class="text-decoration-none nav-link dropdown-toggle"
                    data-bs-toggle="collapse"
                    href="#collapseList"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseList">
                    <i class="fa fa-tty"></i>

                    Orders
                  </a>

                  <ul
                    id='collapseList'
                    className='collapse'
                    aria-controls='collapseList'
                  >
                    <li>
                      <a
                        className="text-decoration-none nav-link px-5"
                        id="v-pills-order-recyclers-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-order-recyclers"
                        href="#v-pills-order-recyclers"
                        role="tab"
                        aria-controls="v-pills-order-recyclers"
                        aria-selected="false"
                      >
                        - Recycling
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none nav-link px-5"
                        id="v-pills-order-donation-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-order-donation"
                        href="#v-pills-order-donation"
                        role="tab"
                        aria-controls="v-pills-order-donation"
                        aria-selected="false"
                      >
                        - Donation
                      </a>
                    </li>
                  </ul>


                </li>


              </ul>
            </div>
          </div>

          <div class="col-md-9 tab-content " id="v-pills-tabContent">
            <div className='container p-3 m-3'>
              <h4>Date</h4>
            </div>

            <div
              class="tab-pane fade show active "
              id="v-pills-user"
              role="tabpanel"
              aria-labelledby="v-pills-user-tab"
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
            <div
              class="tab-pane fade "
              id="v-pills-recycler"
              role="tabpanel"
              aria-labelledby="v-pills-recycler-tab"
            >
              <RecyclerList />
            </div>
            <div
              class="tab-pane fade "
              id="v-pills-organization"
              role="tabpanel"
              aria-labelledby="v-pills-organization-tab"
            >
              <OrganizationList />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-order-recyclers"
              role="tabpanel"
              aria-labelledby="v-pills-order-recyclers-tab"
            >
              <RecycleOrder/>
            </div>
            
            <div
              class="tab-pane fade"
              id="v-pills-order-donation"
              role="tabpanel"
              aria-labelledby="v-pills-order-donation-tab"
            >
              <DonationOrder/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;