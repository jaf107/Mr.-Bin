import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecycler } from "../../../redux/actions/recyclerActions";

const RecyclerForm = (props, state) => {
  const dispatch = useDispatch();
  const [recycler, setRecycler] = useState({
    name: "",
    company: "",
    location: "",
    phone: "",
  });
  const { name, company, location, phone } = recycler;
  const submitRecycler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("location", location);
    myForm.set("phone", phone);
    myForm.set("company", company);
    console.log(myForm);
    dispatch(addRecycler(myForm));
  };

  const recyclerDataChange = (e) => {
    setRecycler({ ...recycler, [e.target.name]: e.target.value });
  };
  return (
    <div className="container p-4 ">
      <h2 className="text-center bg-light p-4">RECYCLERS FORM</h2>

      <input
        name="name"
        placeholder="Recycler name"
        className="form-control mb-4"
        type="text"
        value={name}
        onChange={recyclerDataChange}
      />
      <input
        name="company"
        placeholder="Company name"
        className="form-control mb-4"
        type="text"
        value={company}
        onChange={recyclerDataChange}
      />
      <input
        name="location"
        placeholder="Location"
        className="form-control p-3 mb-4"
        type="text"
        value={location}
        onChange={recyclerDataChange}
      />

      <input
        name="phone"
        placeholder="Contact Number"
        className="form-control mb-4"
        type="number"
        value={phone}
        onChange={recyclerDataChange}
      />

      <button
        type="submit"
        className="btn btn-success"
        onClick={submitRecycler}
      >
        Submit
      </button>
    </div>
  );
};

export default RecyclerForm;
