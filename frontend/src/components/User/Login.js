import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login (){
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
    return (
      <div class="container pb-5">
        <div class="row m-5  shadow-lg">
          <div class="col-md-6 d-none d-md-block">
            <img src={require("../../assets/login.jpg")} class="img-fluid" alt="login"/>
          </div>
          <div class="col-md-6 bg-white p-4">
            <h3 class="pb-3 text-center fw-bold mt-5">SIGN IN</h3>
            <div class="form-style p-5">
              <form>
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
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <input name="" type="checkbox" value="" />{" "}
                    <span class="pl-2 fw-light">Remember Me</span>
                  </div>
                  <div>
                    <a href="forgetPassword.js" class="text-decoration-none text-danger">Forget Password?</a>
                  </div>
                </div>
                <div class="pb-2 text-center mt-4">
                  <button
                    type="submit"
                    class="btn btn-success w-50"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div class="sideline">OR</div>
              <div class="text-center">
                <button type="button" class="login-with-google-btn w-50">
                  Sign in with Google
                </button>{" "}
              </div>
              <div class="pt-4 text-center">
                Dont have an Account? <Link to="/register" class=" text-success text-decoration-none fw-bold">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Login;
