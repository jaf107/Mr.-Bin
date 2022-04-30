import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductForm from "../Marketplace/Product/ProductForm";
import "./Recycle.css";
function Recycle(params) {
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
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add Product to Recycle
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <ProductForm></ProductForm>
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

          <div className="col-md-12 text-center">
            <h4 >Our Recyclers</h4>
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
