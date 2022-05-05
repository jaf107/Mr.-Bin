import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductForm from "../Marketplace/Product/ProductForm";
import { useState } from "react";
import RecycleForm from "./RecycleForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import "./Recycle.css";
import { getUserProducts } from "../../actions/productActions";
import { getRecyclers } from "../../actions/recyclerActions";
import { getUserOrder } from "../../actions/orderActions";
import RecycleOrders from "./RecyclerOrders";
function Recycle(state) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleAddNew, setToggleAddNew] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [closeModal, setCloseModal] = useState(false);

  const onChooseProduct = (e) => {
    e.preventDefault();
    if (toggleForm === true) setToggleForm(false);
    else {
      const myForm = new FormData();
      myForm.set("selectedProduct", selectedProduct);
      // dispatch(register(myForm));
      setToggleForm(true);
    }
  };
  const handleAddNew = (e) => {
    setToggleAddNew(true);
  };
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserProducts(id));
      dispatch(getRecyclers());
    }

    if(closeModal ===true)
    {
      setSelectedProduct("");
      setToggleForm(false);
    }
  }, [dispatch, alert, isAuthenticated]);

  const productList = products.map((products) => (
    <option key={products._id} value={products._id}>
      {products.name}
    </option> 
  ));

  const selectedProductChange = (e) => {
    setSelectedProduct(e.target.value);
   // setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
    //console.log(selectedProduct);
  };

  const onCloseModal = (closeModal) =>{
    setToggleForm(false)
    setCloseModal(closeModal);
  }
  
  return (
    <div className="">
      <Header />
      <div className="container recycle">
        <div className=" row counterRow text-center align-items-center text-white">
          <div className="col-md-4">
            <h6>Total Recyclers</h6>
            <h1>100</h1>
          </div>
          <div className="col-md-4">
            <h6>Total Items Recycled</h6>
            <h1>11,000</h1>
          </div>
          <div className="col-md-4">
            <h6>Total Users</h6>
            <h1>300</h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="row p-2">
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Newspaper</h6>
                  <i class="fa-solid fa-newspaper fs-2 mt-3 mb-4"></i>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Plastic Bottles</h6>
                  <i class="fa-solid fa-bottle-water fs-2 mt-3 mb-4"></i>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Electronics</h6>
                  <i class="fa-solid fa-mobile fs-2 mt-3 mb-4"></i>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Books</h6>
                  <i class="fa-solid fa-book fs-2 mt-3 mb-4"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center mt-5">
            <button
              className=" btn border-0 btn-lg fw-bold mt-5 p-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Recycle An Item
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog  mw-100 w-75">
                <div class="modal-content container">
                  <div class="modal-header">
                    {toggleForm && (
                      <button
                        className=" btn btn-sm m-3"
                        onClick={onChooseProduct}
                      >
                        Previous
                      </button>
                    )}
                    <h5 class="modal-title d" id="exampleModalLabel">
                      Add Product
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {!toggleForm && (
                      <div>
                        <div className="row">
                          <div className="col-md-5">
                            <form action="">
                              <div className="form-group mb-4">
                                <select
                                  id="select_product"
                                  className="form-control"
                                  onChange={selectedProductChange}
                                >
                                  <option value="" disabled selected>
                                    Select Products
                                  </option>
                                  {productList}
                                </select>
                              </div>
                              <button
                                type="submit"
                                className=" btn btn-primary m-2"
                                onClick={onChooseProduct}
                              >
                                Choose Product
                              </button>
                            </form>
                          </div>
                          <div className="col-md-2">
                            <h5> OR</h5>
                          </div>
                          <div className="col-md-5">
                            {!toggleAddNew && (
                              <button
                                className=" btn btn-success"
                                onClick={handleAddNew}
                              >
                                Add New
                              </button>
                            )}
                            {toggleAddNew && <ProductForm></ProductForm>}{" "}
                          </div>
                        </div>
                      </div>
                    )}
                    {toggleForm && (
                      <div>
                        <RecycleForm product={selectedProduct} closeModal={onCloseModal}></RecycleForm>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row p-2">
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Home Appliances</h6>
                  <i class="fa-solid fa-blender-phone fs-2 mt-3 mb-4"></i>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Furniture</h6>
                  <i class="fa-solid fa-chair fs-2 mt-3 mb-4"></i>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Clothes</h6>
                  <i class="fa-solid fa-house-user fs-2 mt-3 mb-4"></i>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="itemsCard text-center p-3">
                  <h6>Others</h6>
                  <i class="fa-solid fa-shuffle fs-2 mt-3 mb-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row  align-items-center h-100">
          <RecycleOrders></RecycleOrders>
          <div className="col-md-12 text-center">
            <h4>Our Recyclers</h4>
            <div class="row  g-4">
              <div class="col">
                <div class="card">
                  <img
                    src={require("../../assets/recycler1.png")}
                    height={250}
                    width={250}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Recycler 1</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={require("../../assets/recycler2.jpg")}
                    height={250}
                    width={250}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Recycler 2</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={require("../../assets/recycler3.png")}
                    height={250}
                    width={250}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Recycler 3</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={require("../../assets/recycler3.png")}
                    height={250}
                    width={250}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Recycler 4</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row">
          <div className="col-md-12">
            <img
              src={require("../../assets/recycleBottom.png")}
              className="img-fluid img-cover"
              width={1300}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Recycle;
