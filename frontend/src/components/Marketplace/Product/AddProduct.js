import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ProductForm from "./ProductForm";
import "./ProductForm.css";

const ProductForm = () => {
  
  return (
    <div>
      <Header />
      <div className="container productform">
        <div className="row">
          <div className="col-md-6 p-5">
            <ProductForm/>
          </div>
          <div className="col-md-6 text-center">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_komemhfl.json"
              background="transparent"
              speed="1"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductForm;
