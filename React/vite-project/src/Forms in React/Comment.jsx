import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css";

export default function Comment() {
  let [comments, setComments] = useState([
    { name: "Ishika", remarks: "Great work!!!", rating: 5 }
  ]);

  let addNewComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
    console.log(comments);
  };

  return (
    <>
      <div>
        <h3>All Comments:</h3>
        {comments.map((comment, index) => (
          <div className="commentBox" key={index}>
            <span>{comment.remarks}</span>
            <br />
            <span>
              - {comment.name}, Rating: {comment.rating}
            </span>
          </div>
        ))}
      </div>
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
