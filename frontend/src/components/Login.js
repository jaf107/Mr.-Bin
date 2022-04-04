import React from "react";
import "../css/Login.css";
class Login extends React.Component {
  state = {};
  render() {
    return (
      <div class="container">
      <div class="row m-5  shadow-lg">
      <div class="col-md-6 d-none d-md-block">
      <img src={require('../assets/bg_1.jpg')} class="img-fluid"  />
      </div>
      <div class="col-md-6 bg-white p-5">
      <h3 class="pb-3 text-center fw-bold">Login to Mr. Bin</h3>
      <div class="form-style">
      <form>
        <div class="form-group pb-3">    
          <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
        </div>
        <div class="form-group pb-3">   
          <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span class="pl-2 font-weight-bold">Remember Me</span></div>
      <div><a href="#">Forget Password?</a></div>
      </div>
         <div class="pb-2">
        <button type="submit" class="btn btn-success w-100 font-weight-bold mt-2">Login</button>
         </div>
      </form>
        <div class="sideline">OR</div>
        <div>
        <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
        </div>
        <div class="pt-4 text-center">
        Dont have an Account? <a href="#">Sign Up</a>
        </div>
      </div>
      
      </div>
      </div>
      </div>
    );
  }
}

export default Login;
