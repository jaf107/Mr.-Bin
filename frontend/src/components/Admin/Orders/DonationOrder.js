import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateStatus } from "../../../redux/actions/orderActions";

const DonationOrder = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const OrderList = orders?.map((order, index) => (
    <OrderDetails order={order} index={index}></OrderDetails>
  ));
  return (
    <div>
      <div className="container">
        <h2 className="text-center bg-light p-4">DONATIONS</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">User</th>
              <th scope="col">Recycler</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{OrderList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationOrder;

function OrderDetails(props) {
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const product = products?.find((o) => o._id === props.order.product);
  const { recyclers } = useSelector((state) => state.recyclers);
  const recycler = recyclers?.find((o) => o._id === props.order.recycler);
  const user = users?.find((o) => o._id === props.order.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  const [orderStatus, setOrderStatus] = useState(props.order.status);
  const onStatusChange = (e) => {
    setOrderStatus(e.target.value);
    dispatch(updateStatus(props.order._id, orderStatus));
    alert("ORDER STATUS CHANGED SUCCESSFULLY");
  };

  return (
    <tr>
      <td>{props.index + 1} </td>
      {product && <td>{product.name} </td>}
      {user && <td>{user.name} </td>}
      {recycler && <td>{recycler.name} </td>}
      <td>{props.order.address} </td>
      <td>{props.order.pickupDate}</td>
      {props.order.status === "Initiated" && (
        <select
          id="product_categorie"
          name="orderStatus"
          className="badge bg-success  rounded-pill"
          value={orderStatus}
          onChange={onStatusChange}
        >
          <option disabled selected>
            {props.order.status}
          </option>
          <option>Processing</option>
          <option>Completed</option>
        </select>
      )}
      {props.order.status === "Processing" && (
        <select
          id="product_categorie"
          name="orderStatus"
          className="badge bg-success  rounded-pill"
          value={orderStatus}
          onChange={onStatusChange}
        >
          <option value="" disabled selected>
            {props.order.status}
          </option>
          <option>Initiated</option>
          <option>Completed</option>
        </select>
      )}
      {props.order.status === "Completed" && (
        <select
          id="product_categorie"
          name="orderStatus"
          className="badge bg-success  rounded-pill"
          value={orderStatus}
          onChange={onStatusChange}
        >
          <option value="" disabled selected>
            {props.order.status}
          </option>
          <option>Processing</option>
          <option>Initiated</option>
        </select>
      )}
    </tr>
  );
}
