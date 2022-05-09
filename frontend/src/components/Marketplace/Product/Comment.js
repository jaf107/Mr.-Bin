import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getComment } from "../../../actions/productActions";
import "./Comment.css"
function Comment(props) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComment(props.product_id));

  }, [dispatch]);

  console.log(comments);

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
        <h3>All Comments</h3>

        {/* <div className="comment-card panel card">
          <div className="panel-body">
            <div className="bio-desk">
              <h4 className="red">Jitesh Sureka</h4>
              <p className="comment-text" style={{}}>- Very nice item. Would love to hear from you again</p>
              <span class="label label-warning pull-right r-activity">09/05/2022</span>
            </div>
          </div>
        </div> */}

        {comments?.map((comment) => (
          <div className="comment-card panel card">
            <div className="panel-body">
              <div className="bio-desk">
                <h4 className="red">{comment.user_name}</h4>
                <p className="comment-text" style={{}}>{comment.comment_body}</p>
                <span class="label label-warning pull-right r-activity">{comment.created_at}</span>
              </div>
            </div>
          </div>
        ))}
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
