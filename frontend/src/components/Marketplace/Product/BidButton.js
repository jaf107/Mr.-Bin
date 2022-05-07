import { useState } from "react";

function BidButton() {
  const [bidAmount, setBidAmount] = useState(0);

  const onBidAmountChange = (e) => {
    // setBidAmount({ ...bidAmount, [e.target.name]: e.target.value });
    setBidAmount(e.target.value);
    // console.log(bidAmount);
    // setBidAmount({...bidAmount, e.target.name: e.target.value} );
  };

  const submitBid = (e) => {
    console.log(bidAmount);
  };
  return (
    <span>
      <button
        type="button"
        className=" card-button flex-fill border-0 btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Bid
      </button>
      {/* <h4>
       Your bidded amount is <strong>{bidAmount} </strong>{" "}
      </h4> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Bid
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="number"
                name="bidAmount"
                onChange={onBidAmountChange}
                value={bidAmount}
                placeholder="Enter your bid Amount"
                class="form-control"
                id="inputZip"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={submitBid}
              >
                Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default BidButton;
