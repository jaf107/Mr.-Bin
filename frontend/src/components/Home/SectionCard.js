import React from "react";
import { Link } from "react-router-dom";
import './SectionCard.css'

class SectionCard extends React.Component {
  state = {};
  render() {
    return (
      <div className="sectionCard container mt-5 mb-4 p-4">
         <br />
        <br />
        <h1 className=" text-center mb-3">MARKETPLACE . RECYCLE . DONATE</h1>
        <hr className=" m-5"/>
        <div className="row p-4">
          <div className="col-md-4">
            <div class="card border-0 text-white">
              <img src={require("../../assets/donate.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
                <Link className="btn btn-lg mt-5" to={'/donate'}>Donate</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bg-dark border-0 text-white">
              <img src={require("../../assets/Shop.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
              <Link className="btn btn-lg mt-5" to={'/marketplace'}>Shop</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bg-dark border-0 text-white">
              <img src={require("../../assets/Recycle.png")} class="card-img" alt="..." />
              <div class="card-img-overlay text-center">
              <Link className="btn btn-lg mt-5" to={'/recycle'}>Recycle</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionCard;
