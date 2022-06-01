import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createBid, getBid } from "../../../actions/productActions";

function BuyButton(props) {
  const { user } = useSelector((state) => state.user);
  const [hasBid, setHasBid] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();

  const submitBid = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("buyer_id", user._id);
    myForm.set("amount", new Number(props.product.purchase_price));
    if (!hasBid) {
      dispatch(getBid(props.product._id));
      dispatch(createBid(myForm, props.product._id));
      alert.success("BUY REQUEST MADE SUCCESSFULLY");
      
    } else {
      alert.error("BID EXISTS FOR THE CURRENT PRODUCT");
    }
    setHasBid(true);
  };
  return (
    <span>
      <button
        type="button"
        className=" card-button flex-fill border-0 btn btn-success"
        onClick={submitBid}
      >
        Buy
      </button>
    </span>
  );
}

export default BuyButton;
