import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
        <div className=" row  align-items-center h-100">
          <div className="col-md-5 text-center align-middle">
            <button
              className=" btn btn-success border-0 btn-lg fw-bold"
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
                    <form class="row g-3">
                      <div class="col-md-6 p-3">
                        <label for="inputEmail4" class="form-label">
                          Product Name
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-md-6 p-3">
                        <label for="inputPassword4" class="form-label">
                          Category
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputAddress" class="form-label">
                          Quantity
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="10"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputAddress2" class="form-label">
                          Address
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputCity" class="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="inputState" class="form-label">
                          State
                        </label>
                        <select id="inputState" class="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label for="inputZip" class="form-label">
                          Zip
                        </label>
                        <input type="text" class="form-control" id="inputZip" />
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary border-0 ">
                         Place Request
                        </button>
                      </div>
                    </form>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 ">
            <h4>Our Recyclers</h4>
            <div class="row row-cols-1 row-cols-md-2 g-4">
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
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
