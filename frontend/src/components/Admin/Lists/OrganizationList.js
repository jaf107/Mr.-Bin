import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrganization,
  getOrganizations,
} from "../../../redux/actions/organizationActions";
import OrganizationForm from "../Forms/OrganizationForm";
import "./OrganizationList.css";
const OrganizationList = () => {
  const dispatch = useDispatch();
  const { organizations } = useSelector((state) => state.organization);
  const alert = useAlert();
  useEffect(() => {
    dispatch(getOrganizations());
  }, [dispatch]);
  const [form, setForm] = useState(true);

  const removeOrganization = (id) => {
    dispatch(deleteOrganization(id));
    alert("ORGANIZATION DELETED SUCCESSFULLY");
  };

  return (
    <div>
      <div className="container">
        <button className="btn btn-danger m-1" onClick={() => setForm(false)}>
          Form
        </button>
        <button className="btn btn-warning m-1" onClick={() => setForm(true)}>
          List
        </button>
      </div>
      {form && (
        <div className="m-4 p4">
          <h2 className="text-center bg-light p-4">ORGANIZATION LIST</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organization Name</th>
                <th scope="col">Type</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>

                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {organizations?.map((organization, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{organization.name}</td>
                  <td>{organization.type}</td>
                  <td>{organization.location}</td>
                  <td>{organization.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        removeOrganization(organization._id);
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!form && <OrganizationForm />}
    </div>
  );
};

export default OrganizationList;
