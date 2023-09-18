import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../../redux/actions/userActions";

function FavoriteButton(props) {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.favorites);
  const alert = useAlert();

  const onFavoriteClick = (product_id) => {
    dispatch(addToFavorite(product_id));
    if (!error) alert.success("PRODUCT ADDED TO FAVORITES");
    else alert.error("ALREADY ADDED TO FAVORITES");
  };
  return (
    <button
      className="card-button flex-fill border-0 btn btn-danger  favorite-btn"
      onClick={() => {
        onFavoriteClick(props.product_id);
      }}
    >
      <i className=" fas fa-heart "></i>
    </button>
  );
}

export default FavoriteButton;
