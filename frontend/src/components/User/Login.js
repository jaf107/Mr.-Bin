import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { login,clearErrors } from "../../actions/userActions";


function Login({ history, location }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      if(loginEmail === "jiteshsureka@gmail.com")
          navigate("/admin/dashboard");
      else 
      navigate("/");
     
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, loginEmail]);

  return (
      <div class="container pb-5">
        <div class="row m-5  shadow-lg">
          <div class="col-md-6 d-none d-md-block">
            <img
              src={require("../../assets/login.jpg")}
              class="img-fluid"
              alt="login"
            />
          </div>
          <div class="col-md-6 bg-white p-4">
            <h3 class="pb-3 text-center fw-bold mt-5">SIGN IN</h3>
            <div class="form-style p-5">
              <form className="loginForm" onSubmit={loginSubmit}>
                <div class="form-group pb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div class="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  {/* <div class="d-flex align-items-center">
                  <input name="" type="checkbox" value="" />{" "}
                  <span class="pl-2 fw-light">Remember Me</span>
                </div> */}
                  <div>
                    <Link
                      to={'/password/forgot'}
                      class="text-decoration-none text-danger"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>
                <div class="pb-2 text-center mt-4">
                  <button
                    type="submit"
                    class="btn btn-success w-50"
                    value={Login}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div class="pt-4 text-center">
                Dont have an Account?{" "}
                <Link
                  to="/register"
                  class=" text-success text-decoration-none fw-bold"
                >
                  Sign Up
                </Link>
              </div>
              <div className=" text-center pt-3"> 
                <Link to={'/'} className='text-decoration-none fw-bolder'>Return to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
