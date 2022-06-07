import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecycler, getRecyclers } from "../../../actions/recyclerActions";
import RecyclerForm from "../Forms/RecyclerForm";

const RecyclerList = () => {
  const dispatch = useDispatch();
  const { recyclers } = useSelector((state) => state.recyclers);
  const alert = useAlert();
  useEffect(() => {
    dispatch(getRecyclers());
  }, [dispatch]);

  const [form, setForm] = useState(true);
  const removeRecycler = (id) => {
    dispatch(deleteRecycler(id));
    alert("RECYCLER DELETED SUCCESSFULLY");
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
          <h2 className='text-center bg-light p-4'>RECYCLERS LIST</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Recycler Name</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>

                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {recyclers.map((recycler, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{recycler.name}</td>
                  <td>{recycler.company}</td>
                  <td>{recycler.location}</td>
                  <td>{recycler.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        removeRecycler(recycler._id);
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

      {!form && <RecyclerForm />}
    </div>
  );
};

export default RecyclerList;
