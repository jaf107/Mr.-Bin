import React from "react";
import './SectionCard.css'

class SectionCard extends React.Component {
  state = {};
  render() {
    return (
      <div className="sectionCard container mt-5 mb-4 p-4">
        <div className="row">
          <div className="col-md-4">
            <div class="card bg-dark text-white">
              <img src={require("../../assets/donate.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
                <button className="btn mt-5">Shop</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bg-dark text-white">
              <img src={require("../../assets/Shop.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
                <button className="btn mt-5">Shop</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bg-dark text-white">
              <img src={require("../../assets/Recycle.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
                <button className="btn mt-5">Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionCard;
