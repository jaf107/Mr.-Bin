import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {};
  render() {
    return (
      <div class="container pb-5">
        <div class="row m-5  shadow-lg">
          <div class="col-md-6 d-none d-md-block">
            <img src={require("../../assets/register.jpg")} class="img-fluid" alt="register" />
          </div>
          <div class="col-md-6 bg-white p-4">
            <h3 class="pb-3 text-center fw-bold mt-5">REGISTER</h3>
            <div class="form-style p-5">
              <form>
                <div class="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group pb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div class="pb-2 text-center mt-4">
                  <button type="submit" class="btn btn-success w-50">
                    Register
                  </button>
                </div>
              </form>
              <div class="pt-4 text-center">
                Already have an Account?{" "}
                <Link to="/login" class=" text-success text-decoration-none fw-bold">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
