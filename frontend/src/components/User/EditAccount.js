import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUser,
  register,
  updateProfile,
} from "../../actions/userActions";
import { useAlert } from "react-alert";

function EditAccount({ location }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    name: "",
    password: "",
    phone: "",
    address: "",
  });

  const { name, email, password, phone, address } = user;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const updateSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    if (password !== confirmPassword) {
      alert.error("Password Not Matching");
      return;
    }
    if (name !== "") myForm.set("name", name);
    if (password !== "") myForm.set("password", password);
    if (phone !== "") myForm.set("phone", phone);
     if(avatar!== "")
     myForm.set("avatar", avatar);
    if (address !== "") myForm.set("address", address);

    dispatch(updateProfile(myForm));
    alert.success("USER UPDATED SUCCESSFULLY");
    dispatch(loadUser());
  };

  const editDataChange = (e) => {
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
  }, [dispatch, error, alert]);

  return (
    <div className="form-style p-5">
      <form onSubmit={updateSubmit}>
        <div className="row">
          <div className="col-md-6">
          <div className="form-group pb-3 text-center">
                <img src={avatarPreview} alt="Avatar Preview" className=" text-center" width={100} />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={editDataChange}
                />
              </div>
            <div className="form-group pb-3">
              <input
                type="text"
                className=" form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={editDataChange}
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
                onChange={editDataChange}
                name="phone"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group pb-3">
              <input
                type="text"
                className=" form-control"
                placeholder="Address"
                name="address"
                value={address}
                onChange={editDataChange}
              />
            </div>
            <div className="form-group pb-3">
              <input
                type="password"
                className=" form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={editDataChange}
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
          </div>

          <div className="pb-2 text-center mt-4">
            <button type="submit" className="btn btn-success w-50">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditAccount;
