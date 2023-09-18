import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../redux/actions/orderActions";
import { getSingleProduct } from "../../redux/actions/productActions";
import { getSingleRecycler } from "../../redux/actions/recyclerActions";

function RecycleOrders() {
  const dispatch = useDispatch();
  const { userOrders } = useSelector((state) => state.userOrders);
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  const orderList = userOrders?.map((order) => (
    <div key={order._id} value={order._id}>
      <div className="row shadow-sm m-3">
        <div className="col-md-5">
          <ProductDetails order={order}></ProductDetails>
        </div>
        <div className="col-md-4">
          <RecyclerDetails order={order}></RecyclerDetails>
        </div>
        <div className="col-md-3">
          <span class="badge bg-success p-2   rounded-pill mt-5">
            {order.status}
          </span>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h3 className=" text-center">Placed Orders</h3>

      {orderList}
    </div>
  );
}

export default RecycleOrders;

function ProductDetails(props) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.products);
  const temp = products.find((o) => o._id === props.order.product);

  return (
    <div>
      <h6>Product Details</h6>
      {temp && (
        <div>
          <p>{temp.name}</p>
          <p>Quantity : {temp.quantity}</p>
          <p>Pickup Date:{props.order.pickupDate}</p>
          <p>Address : {props.order.address}</p>
        </div>
      )}
    </div>
  );
}

function RecyclerDetails(props) {
  const { recycler } = useSelector((state) => state.recycler);
  const dispatch = useDispatch();
  const { recyclers } = useSelector((state) => state.recyclers);
  const temp = recyclers.find((o) => o._id === props.order.recycler);

  return (
    <div>
      {temp && (
        <div>
          <h6>Recycler Details</h6>
          <p>{temp.name}</p>
          <p>{temp.company}</p>
          <p>{temp.phone}</p>
        </div>
      )}
    </div>
  );
}
