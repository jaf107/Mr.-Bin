import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../actions/orderActions";
import { getSingleProduct } from "../../actions/productActions";
import { getSingleRecycler } from "../../actions/recyclerActions";

function RecycleOrders() {
  const dispatch = useDispatch();
  // const [orders, setOrder] = useState([{
  //   product: "",
  //   recycler: "",
  //   address: "",
  //   pickupDate: "",
  //   orderType: "recycle",
  // }]);
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  const orderList = orders.map((order) => (
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
           { order.status}
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
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(props.order.product));
  }, [dispatch, props.order.product]);

  return (
    <div>
      <h6>Product Details</h6>
      <p>{product.name}</p>
      <p>Quantity : {product.quantity}</p>
      <p>Pickup Date:{props.order.pickupDate}</p>
      <p>Address : {props.order.address}</p>
    </div>
  );
}

function RecyclerDetails(props) {
  const { recycler } = useSelector((state) => state.recycler);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleRecycler(props.order.recycler));
  }, [dispatch, props.order.recycler]);

  return (
    <div>
      {recycler && (
        <div>
          <h6>Recycler Details</h6>
          <p>{recycler.name}</p>
          <p>{recycler.company}</p>
          <p>{recycler.phone}</p>
        </div>
      )}
    </div>
  );
}
