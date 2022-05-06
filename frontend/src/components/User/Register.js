import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userActions";
import { useAlert } from "react-alert";

function Register({ location }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = user;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    if (password !== confirmPassword) {
      alert.error("Password Not Matching");
      return;
    }
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("phone", phone);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // const redirect = "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);

  return (
    <div className="container pb-5">
      <div className="row m-5  shadow-lg">
        <div className="col-md-6 d-none d-md-block">
          <img
            src={require("../../assets/register.jpg")}
            className="img-fluid"
            alt="register"
          />
        </div>
        <div className="col-md-6 bg-white p-4">
          <h3 className="pb-3 text-center fw-bold mt-5">REGISTER</h3>
          <div className="form-style p-5">
            <form onSubmit={registerSubmit}>
              <div className="form-group pb-3 text-center">
                <img src={avatarPreview} alt="Avatar Preview" className=" text-center" width={100} />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="text"
                  className=" form-control"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className=" form-control"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="tel"
                  placeholder="Phone Number (01********)"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={phone}
                  onChange={registerDataChange}
                  name="phone"
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="password"
                  className=" form-control"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>



              <div className="pb-2 text-center mt-4">
                <button type="submit" className="btn btn-success w-50">
                  Register
                </button>
              </div>
            </form>
            <div className="pt-4 text-center">
              Already have an Account?{" "}
              <Link
                to="/login"
                className=" text-success text-decoration-none fw-bold"
              >
                Sign In
              </Link>
            </div>
            <div className=" text-center pt-3">
              <Link to={"/"} className="text-decoration-none fw-bolder">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
