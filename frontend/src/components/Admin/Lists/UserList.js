import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../redux/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const userList = users?.map((user, index) => (
    <UserDetails user={user} index={index}></UserDetails>
  ));
  return (
    <div>
      <div className="container">
        <h2 className="text-center bg-light p-4">USERS LIST</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Created on</th>

              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

function UserDetails(props) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const onDeleteUser = () => {
    dispatch(deleteUser(props.user._id));
    alert.success("USER DELETED SUCCESSFULLY");
  };

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.user.name}</td>
      <td>{props.user.email} </td>
      <td>{props.user.phone} </td>
      <td>{props.user.createdAt} </td>
      <td>
        <button
          className="btn btn-danger "
          onClick={() => {
            onDeleteUser();
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
