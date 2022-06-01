import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProducts } from "../../../actions/productActions";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./MyProducts.css";
import { deleteProduct } from "../../../actions/productActions";
const MyProducts = () => {
  const dispatch = useDispatch();
  const { userProducts } = useSelector((state) => state.userProducts);

  useEffect(() => {
    dispatch(getUserProducts());
  }, [dispatch]);

  const productList = userProducts?.map((product, index) => (
    <ProductDetails product={product} index={index}></ProductDetails>
  ));
  return (
    <div>
      <div className="">
        <h2>My Products</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;

function ProductDetails(props) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const onDeleteProduct = () => {
    dispatch(deleteProduct(props.product._id));
    alert.success("PRODUCT DELETED SUCCESSFULLY");
    dispatch(getUserProducts());
  };
  return (
    <tr>
      {
        <>
          <td>{props.index + 1}</td>
          <td
            style={{
              textAlign: "center",
            }}
          >
            <Link
              to={`/product/${props.product._id}`}
              className=" text-decoration-none fw-bold"
            >
              {props.product.name}
            </Link>{" "}
          </td>
          <td>{props.product.purchase_price} </td>
          <td>{props.product.quantity} </td>
          <td>{props.product.created_at} </td>
          <td>
            <Link className="btn btn-warning " to={`/product/${props.product._id}/edit`}>Edit</Link>
          </td>
          <td>
            <button
              className="btn btn-danger "
              onClick={() => {
                onDeleteProduct();
              }}
            >
              Delete
            </button>
          </td>
        </>
      }
    </tr>
  );
}
