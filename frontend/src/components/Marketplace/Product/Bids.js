import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  acceptBid,
  getBid,
  getProducts,
  getSingleProduct,
  rejectBid,
} from "../../../redux/actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import { sendNotification } from "../../../redux/actions/userActions";

export default function Bids() {
  const dispatch = useDispatch();
  const { bids } = useSelector((state) => state.bids);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBid(id));
  }, [dispatch, id]);
  const onAcceptBid = (buyer_id) => {
    dispatch(acceptBid(id, buyer_id));
    dispatch(getSingleProduct(id));
    const myForm = new FormData();
    myForm.set(
      "description",
      "Congratulations! Seller has accepted your bid for the product"
    );
    myForm.set("link", "/product/" + id);
    dispatch(sendNotification(myForm, buyer_id));
  };
  const onRejectBid = (bidId, buyer_id) => {
    dispatch(rejectBid(id, bidId));
    console.log(bidId);
    dispatch(getBid(id));
    const myForm = new FormData();
    myForm.set("description", "Seller has rejected your bid for the product");
    myForm.set("link", "/product/" + id);
    dispatch(sendNotification(myForm, buyer_id));
  };
  return (
    <div>
      <h6>Bids</h6>
      <table class="table caption-top">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Bidder Name</th>
            <th scope="col">Address</th>
            <th scope="col">Date of Bid</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bids?.map((bid, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{bid.name}</td>
              <td>{bid.address.location}</td>
              <td>{bid.date}</td>
              <td>{bid.amount}</td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => {
                    onAcceptBid(bid.buyer_id);
                  }}
                >
                  <i class="fa-solid fa-check"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    onRejectBid(bid._id, bid.buyer_id);
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
