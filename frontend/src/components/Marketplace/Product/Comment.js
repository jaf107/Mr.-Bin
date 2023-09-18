import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComment, getComment } from "../../../redux/actions/productActions";
import "./Comment.css";
function Comment(props) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComment(props.product_id));
    navigate(`/product/${props.product_id}`);
  }, [dispatch]);

  const submitComment = (e) => {
    e.preventDefault();
    if (comment !== "") {
      const myForm = new FormData();
      myForm.set("user_id", user._id);
      myForm.set("comment_body", comment);
      dispatch(addComment(myForm, props.product_id));
      alert.success("COMMENTED ON THE PRODUCT");
      dispatch(getComment(props.product_id));
      setComment("");
    } else alert.error("PLEASE ENTER A COMMENT");
  };
  return (
    <div className=" row">
      <div className="col-md-8">
        {/* <div className="comment-card panel card">
          <div className="panel-body">
            <div className="bio-desk">
              <h4 className="red">Jitesh Sureka</h4>
              <p className="comment-text" style={{}}>- Very nice item. Would love to hear from you again</p>
              <span class="label label-warning pull-right r-activity">09/05/2022</span>
            </div>
          </div>
        </div> */}
        <h4 className="  text-center text-light bg-primary mb-3 p-3">
          COMMENT SECTION
        </h4>

        {comments?.map((comment) => (
          <div class="card p-3 bg-white">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center p-2">
                <span>
                  <h6 class="font-weight-bold text-primary">
                    {comment.user_name}
                  </h6>{" "}
                  <small class="font-weight-bold">{comment.comment_body}</small>
                </span>
              </div>

              <small>{comment.created_at}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-4">
        <h4 className="  text-center text-light bg-info mb-3 p-3">
          COMMENT BOX
        </h4>
        <form onSubmit={submitComment}>
          <div className="mb-3">
            <textarea
              className="form-control card"
              rows={3}
              placeholder="Enter Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-success submit-btn btn-sm"
              value="Submit Comment"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
