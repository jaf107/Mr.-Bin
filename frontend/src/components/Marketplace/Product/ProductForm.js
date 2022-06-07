import React, { useState } from "react";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import { addProduct } from "../../../actions/productActions";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductForm.css";
import { useAlert } from "react-alert";
import GoogleMap from "../../GoogleMap";

const ProductForm = () => {
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
    product_type:"",
  });

  const {
    name,
    category,
    quantity,
    condition,
    description,
    date_of_purchase,
    purchase_price,
    product_type,
  } = product;

  const [address, setAddress] =  useState();
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
    productForm.set("product_type", product_type.toLowerCase());
    productForm.set("address", address);


    images.forEach((image) => {
      productForm.append("images", image);
    });
    dispatch(addProduct(productForm));
    alert.success("PRODUCT ADDED SUCCESSFULLY");
    setProduct({
      name: "",
      category: "",
      quantity: "",
      condition: "",
      description: "",
      date_of_purchase: "",
      purchase_price: "",
      product_type:"",
    })
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
 const  handleAddress = (langValue) => {
    setAddress(langValue)
}
// console.log(address)

  return (
    <div>
      <div className="container productform">
        <h3 className=" mt-3 mb-4">Add A New Product </h3>
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
              <option>Book</option>
              <option>Newspaper</option>
              <option>Cell Phone</option>
              <option>Bottle</option>
              <option>Glass</option>
              <option>Laptop</option>
            </select>
          </div>
          <div className="form-group mb-4">
            <select
              id="product_type"
              name="product_type"
              className="form-control"
              value={product_type.toLowerCase()}
              onChange={productDataChange}
              required
            >
              <option value="" disabled selected>
                Select Product Type
              </option>
              <option>Marketplace</option>
              <option>Recycle</option>
              <option>Donation</option>
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

          <GoogleMap className="form-group mb-4" onSetAddress={handleAddress}></GoogleMap>
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
            <button className='btn btn-success addbtn'>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
