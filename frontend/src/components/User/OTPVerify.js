import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, verifyUser } from "../../redux/actions/userActions";

export default function OTPVerify(props) {
  const [showBox, setShowBox] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();
  const firebaseConfig = {
    apiKey: "AIzaSyDDiBZXe3o6L9vNEkbH_4LrzzNOo_jhZK4",
    authDomain: "mr-bin-9e7ea.firebaseapp.com",
    projectId: "mr-bin-9e7ea",
    storageBucket: "mr-bin-9e7ea.appspot.com",
    messagingSenderId: "322618376243",
    appId: "1:322618376243:web:f3689ee3410087bbcbe346",
    measurementId: "G-MYVR8DN6M6",
  };
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "BAN",
      }
    );
    console.log(props.number);
  }, []);

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const [otp, setOTP] = useState(0);
  const otpChange = (e) => {
    setOTP(e.target.value);
  };
  const onVerifyClick = () => {
    setShowBox(true);
    setShowButton(false);
    let phone_number = props.number;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        //dispatch(verifyUser());
        // ...
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    let opt_number = otp;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        setShowBox(false);
        dispatch(verifyUser());
        dispatch(loadUser());
        alert("User Verified");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };
  return (
    <div>
      <div id="recaptcha-container"></div>
      {showButton && (
        <button className=" btn btn-success btn-sm" onClick={onVerifyClick}>
          Verify
        </button>
      )}
      {showBox && (
        <form action="" className=" card">
          <div class="input-group card-body">
            <input
              type="number"
              class="form-control"
              value={otp}
              name="otp"
              placeholder="Enter OTP here"
              onChange={otpChange}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={onSubmitOTP}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
