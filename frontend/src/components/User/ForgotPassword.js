import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../redux/actions/userActions";
import { useAlert } from "react-alert";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
    alert.success("EMAIL SENT SUCCESSFULLY");
  };

  return (
    <div>
      <Header></Header>
      <div className="forgotPasswordContainer">
        <div className="forgotPasswordBox">
          <h2 className="forgotPasswordHeading">Forgot Password</h2>

          <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit}>
            <div className="forgotPasswordEmail">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input type="submit" value="Send" className="forgotPasswordBtn" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ForgotPassword;
