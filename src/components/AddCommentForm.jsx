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

      postCommentByArticleId(articleId, comment)
        .then((newComment) => {
          setComments([...comments, newComment[0]]);
          setComment("");
          setBtnDisabled(false);
        })
        .catch((err) => {
          setComments([...comments]);
          setErr("Something has went wrong, please try refreshing the page");
          setComment("");
          setBtnDisabled(false);
        });
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
      <textarea
        rows={2}
        cols={150}
        placeholder="Insert your comment here"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />

      <button disabled={btnDisabled}>Post</button>
    </form>
  );
}

export default AddCommentForm;
