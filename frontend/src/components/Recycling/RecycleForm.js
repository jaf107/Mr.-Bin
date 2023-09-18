import { useState } from "react";
import { useRef } from "react";
import { getUserOrder, placeOrder } from "../../redux/actions/orderActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import "./Recycle.css";
function RecycleForm(props, state) {
  const ref = useRef();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [order, setOrder] = useState({
    product: props.product,
    recycler: "",
    address: "",
    pickupDate: "",
    orderType: "recycle",
  });

  const { product, recycler, address, pickupDate, orderType } = order;
  const orderSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("product", product);
    myForm.set("recycler", recycler);
    myForm.set("pickupDate", pickupDate);
    myForm.set("address", address);
    myForm.set("orderType", orderType);
    setOrder({
      product: props.product,
      recycler: "",
      address: "",
      pickupDate: "",
    });
    props.closeModal(true);
    dispatch(placeOrder(myForm));
    dispatch(getUserOrder());

    alert.success("ORDER PLACED SUCCESSFULLY");
  };
  const { isAuthenticated } = useSelector((state) => state.user);
  const { recyclers } = useSelector((state) => state.recyclers);

  useEffect(() => {}, []);

  const recyclerList = recyclers?.map((recyclers) => (
    <option key={recyclers._id} value={recyclers._id}>
      {recyclers.name}
    </option>
  ));

  const orderDataChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <form action="">
        <div className="form-group mb-4">
          <select
            id="recycler"
            name="recycler"
            className="form-control"
            value={recycler}
            onChange={orderDataChange}
          >
            <option value="" disabled selected>
              Select Recycler
            </option>
            {recyclerList}
          </select>
        </div>
        <div className="form-group mb-3">
          <input
            id="date_of_purchase"
            name="pickupDate"
            ref={ref}
            placeholder="Enter Expected Date of Pickup"
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "text")}
            className="form-control"
            type="text"
            value={pickupDate}
            onChange={orderDataChange}
          />
        </div>
        <div className="form-group pb-3">
          <input
            type="text"
            className=" form-control"
            placeholder="Pickup Address"
            name="address"
            value={address}
            onChange={orderDataChange}
          />
        </div>
        <div className=" ">
          <button
            type="submit"
            data-bs-dismiss="modal"
            className="btn btn-success border-0  fw-normal"
            onClick={orderSubmit}
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecycleForm;
