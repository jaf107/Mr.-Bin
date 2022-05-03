import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../actions/orderActions";
import { getSingleProduct } from "../../actions/productActions";

function RecycleOrders() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    if (orders.length >= 1) {
      dispatch(getSingleProduct(orders[0].product));
    }
  }, [dispatch, orders]);
  //   const orderList = orders.map((orders) => (
  //     //dispatch(getSingleProduct(orders.product))
  //     // <option key={products._id} value={products._id}>
  //     //   {products.name}
  //     // </option>
  //   ));
  return (
    <div>
      <h3 className=" text-center">Placed Orders</h3>

      <div className="row shadow-sm ">
        <div className="col-md-5">
          <h5>{product.name}</h5>
          <p>Quantity : 2 KG</p>
          <p>Pickup Date: 22-05-2022</p>
          <p>Address : 21, Rajarhat Road, Kushtia</p>
        </div>
        <div className="col-md-4">
          <h5>Recycler Details</h5>
          <p>Name : Abdur Rahman</p>
          <p>Company : Rematter</p>
        </div>
        <div className="col-md-3">
          <span class="badge bg-success fs-6 rounded-pill mt-5">
            Processing
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecycleOrders;
