import { useState } from "react";
import { postCommentByArticleId } from "../api/api";

function AddCommentForm({ articleId, comments, setComments, setErr }) {
  const [comment, setComment] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  function handleSubmit(articleId, comment) {
    if (comment.length > 1) {
      setComments([
        ...comments,
        {
          comment_id: "newComment",
          article_id: articleId,
          author: "jessjelly",
          body: comment,
          created_at: new Date().toString(),
          votes: 0,
        },
      ]);
      setBtnDisabled(true);

      setTimeout(() => {
        postCommentByArticleId(articleId, comment)
          .then((newComment) => {
            setComments([...comments, newComment[0]]);
            setComment("");
            setBtnDisabled(false);
          })
          .catch((err) => {
            console.log(comments);

            setComments([...comments]);
            setErr("Something went wrong");
            setComment("");
          });
      }, 5000);
    } else {
      setErr("Comment field can not be blank");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(articleId, comment);
      }}
    >
      <input
        type="text"
        placeholder="Insert your comment here"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button disabled={btnDisabled}>Post</button>
    </form>
  );
}

export default AddCommentForm;
