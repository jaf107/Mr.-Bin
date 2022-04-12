import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
function Register({ history, location }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     setAvatarPreview(reader.result);
      //     setAvatar(reader.result);
      //   }
      // };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div class="container pb-5">
      <div class="row m-5  shadow-lg">
        <div class="col-md-6 d-none d-md-block">
          <img
            src={require("../../assets/register.jpg")}
            class="img-fluid"
            alt="register"
          />
        </div>
        <div class="col-md-6 bg-white p-4">
          <h3 class="pb-3 text-center fw-bold mt-5">REGISTER</h3>
          <div class="form-style p-5">
            <form onSubmit={registerSubmit}>
              <div class="form-group pb-3">
                <input
                  ype="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              {/* <div class="form-group pb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div> */}
              <div class="form-group pb-3">
                <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                />
              </div>
              {/* <div class="form-group pb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div> */}

              <div class="pb-2 text-center mt-4">
                <button type="submit" class="btn btn-success w-50">
                  Register
                </button>
              </div>
            </form>
            <div class="pt-4 text-center">
              Already have an Account?{" "}
              <Link
                to="/login"
                class=" text-success text-decoration-none fw-bold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
