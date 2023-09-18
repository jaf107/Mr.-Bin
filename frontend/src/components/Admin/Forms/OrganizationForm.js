import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrganization } from "../../../redux/actions/organizationActions";

const OrganizationForm = () => {
  const dispatch = useDispatch();
  const [organization, setOrganization] = useState({
    name: "",
    type: "",
    location: "",
    phone: "",
  });
  const { name, type, location, phone } = organization;
  const submitOrganization = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("type", type);
    myForm.set("phone", phone);
    myForm.set("location", location);
    dispatch(addOrganization(myForm));
  };
  const organizationDataChange = (e) => {
    setOrganization({ ...organization, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="text-center bg-light p-4">ORGANIZATION FORM</h2>

      <div className="container p-4 ">
        <input
          placeholder="Organization name"
          className="form-control mb-4"
          type="text"
          value={name}
          name="name"
          onChange={organizationDataChange}
        />

        <label className="mb-2">Organization Type: </label>
        <select
          name="type"
          className="select-type form-control mb-4"
          value={type}
          onChange={organizationDataChange}
        >
          <option selected>NGO</option>
          <option>Library</option>
        </select>

        <input
          placeholder="Location"
          className="form-control p-3 mb-4"
          type="text"
          name="location"
          value={location}
          onChange={organizationDataChange}
        />

        <input
          name="phone"
          placeholder="Contact Number"
          className="form-control mb-4"
          type="number"
          value={phone}
          onChange={organizationDataChange}
        />

        <button
          type="submit"
          className="btn btn-success"
          onClick={submitOrganization}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OrganizationForm;
