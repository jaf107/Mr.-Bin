import { useState } from "react";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import "./Recycle.css";
function RecycleForm(props) {
  const ref = useRef();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { recyclers } = useSelector((state) => state.recyclers);

  useEffect(() => {
    if (isAuthenticated) {
      console.log(recyclers)
    }
  }, [dispatch, alert, isAuthenticated]);
  const listItems = recyclers.map((recyclers) => <option>{recyclers.name}</option>);

  return (
    <div className="">
      <form action="">
        <div className="form-group mb-4">
          <select
            id="product_categorie"
            name="category"
            className="form-control"
          >
            <option value="" disabled selected>
              Select Recycler
            </option>
            {listItems}
          </select>
        </div>
        <div className="form-group mb-3">
          <input
            id="date_of_purchase"
            name="date_of_purchase"
            ref={ref}
            placeholder="Enter Expected Date of Pickup"
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "text")}
            className="form-control"
            required=""
            type="text"
          />
        </div>
        <div className=" ">
          <button type="submit" className="btn btn-success border-0  fw-normal">
            {" "}
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecycleForm;
