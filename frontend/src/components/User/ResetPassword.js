import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../redux/actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(token, myForm));
    alert.success("PASSWORD UPDATED SUCCESSFULLY");
    navigate("/login");
  };

  return (
    <div>
      <Header></Header>
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          <h2 className="resetPasswordHeading">Update Password</h2>

          <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
            <div>
              <input
                type="password"
                placeholder="New Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="resetPasswordBtn" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ResetPassword;
