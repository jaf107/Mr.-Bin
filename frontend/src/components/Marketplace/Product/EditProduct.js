import React, { useState } from "react";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import {
  addProduct,
  updateProduct,
} from "../../../redux/actions/productActions";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductForm.css";
import { useAlert } from "react-alert";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate();
  const alert = useAlert();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    condition: "",
    description: "",
    date_of_purchase: "",
    purchase_price: "",
  });

  const {
    name,
    category,
    quantity,
    condition,
    description,
    date_of_purchase,
    purchase_price,
  } = product;

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const productSubmit = (e) => {
    e.preventDefault();
    const productForm = new FormData();
    productForm.set("name", name);
    productForm.set("category", category);
    productForm.set("quantity", quantity);
    productForm.set("condition", condition);
    productForm.set("description", description);
    productForm.set("date_of_purchase", date_of_purchase);
    productForm.set("purchase_price", purchase_price);
    images.forEach((image) => {
      productForm.append("images", image);
    });
    dispatch(updateProduct(id, productForm));
    alert.success("PRODUCT UPDATED SUCCESSFULLY");
    setProduct({
      name: "",
      category: "",
      quantity: "",
      condition: "",
      description: "",
      date_of_purchase: "",
      purchase_price: "",
    });
    setImages([]);
    setImagesPreview([]);
  };

  const productDataChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <Header></Header>
      <div className="container productform">
        <h3 className=" mt-3 mb-4">Edit Product </h3>
        <form className="form-floating" onSubmit={productSubmit}>
          <div className="form-group mb-4">
            <input
              placeholder="Name"
              className="form-control"
              required
              name="name"
              type="text"
              value={name}
              onChange={productDataChange}
            />
          </div>
          <div className="form-group mb-4">
            <select
              id="product_categorie"
              name="category"
              className="form-control"
              value={category}
              onChange={productDataChange}
            >
              <option value="" disabled selected>
                Select Product Category
              </option>
              <option>Books</option>
              <option>Newspapers</option>
              <option>Clothes</option>
              <option>Plastic</option>
              <option>Glassware</option>
              <option>Electronics</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <input
              id="quantity"
              name="quantity"
              placeholder="Available Quantity"
              className="form-control"
              required=""
              type="text"
              value={quantity}
              onChange={productDataChange}
            />
          </div>

          <div className="form-group mb-4">
            <textarea
              className="form-control"
              placeholder=" Write Product Description here"
              id="product_description"
              name="description"
              value={description}
              onChange={productDataChange}
            ></textarea>
          </div>

          <div className="form-group mb-4">
            <select
              id="product_condition"
              name="condition"
              className="form-control"
              value={condition}
              onChange={productDataChange}
            >
              <option value="" disabled selected>
                Select Product Condition
              </option>
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
          <div className="form-group mb-4">
            <input
              id="purchase_price"
              name="purchase_price"
              placeholder="Purchase Price"
              className="form-control "
              required=""
              type="number"
              value={purchase_price}
              onChange={productDataChange}
            />
          </div>

          <div className="form-group mb-3">
            <input
              id="date_of_purchase"
              name="date_of_purchase"
              ref={ref}
              placeholder="Enter Date of Purchase"
              onFocus={() => (ref.current.type = "date")}
              onBlur={() => (ref.current.type = "text")}
              className="form-control"
              required=""
              type="text"
              value={date_of_purchase}
              onChange={productDataChange}
            />
          </div>
          <div id="createProductFormFile">
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={createProductImagesChange}
              multiple
            />
          </div>

          <div id="createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </div>

          <div className=" ">
            {/* <button
                type="submit"
                className="btn btn-success border-0  fw-normal"
              >
                {" "}
                Add Product
              </button> */}
            <button className="btn btn-success addbtn">Edit Product</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default EditProduct;
