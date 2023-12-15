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
          setComments([newComment[0], ...comments]);
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

      <button
        className="bg-blue-600 rounded-md w-[50px] text-white font-semibold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        disabled={btnDisabled}
      >
        Post
      </button>
    </form>
  );
}

export default AddCommentForm;
