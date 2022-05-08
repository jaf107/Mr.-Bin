import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../actions/productActions";
function Comment(props) {
    const dispatch = useDispatch();
    const alert = useAlert();
    const [comment, setComment] = useState("");
    const {user} = useSelector((state) => state.user)
    const submitComment = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("user_id", user._id);
        myForm.set("comment_body", comment);
        dispatch(addComment(myForm, props.product_id))
    }
  return (
    <div className=" row">
      <div className="col-md-8">
        <h3>Comment Array</h3>
        {/* {comment?.map((comment) => (
            <ul>
              <li className="form-control comment">
                {comment.text}

                <small className="mvright">
                  -{comment.person}
                </small>
              </li>
            </ul>
          ))} */}
      </div>

      <div className="col-md-4">
        <h3>Comment Form</h3>
        <form onSubmit={submitComment}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-primary"
              value="Submit Comment"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
