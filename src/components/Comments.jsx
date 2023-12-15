import dayjs from "dayjs";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../api/api";
import { useState, useEffect } from "react";

function Comments({ comments, setComments, setErr }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [commentIdErr, setCommentIdErr] = useState(null); //err will show up at specific comment box

  function handleDeleteButton(commentId, articleId) {
    setComments(comments.filter((val) => val.comment_id !== commentId)); //optimistic rendering
    setBtnDisabled(true);

    return deleteCommentByCommentId(commentId)
      .then((res) => {
        setBtnDisabled(false);
      })
      .catch((err) => {
        setCommentIdErr(commentId);

        setComments(comments);
        setBtnDisabled(false);
      });
  }

  return (
    <ul className="mt-4">
      {comments.map((comment) => {
        const date = dayjs(comment.created_at).format("MMMM D, YYYY");
        return (
          <li
            className="mb-3 border-b border-gray-300 pb-2"
            key={comment.comment_id}
          >
            {comment.comment_id === commentIdErr && (
              <p className="text-red-500 text-xs">
                Error. Please refresh the page and try again.
              </p>
            )}

            <p className="text-sm">{comment.body}</p>
            <div className="flex justify-between items-center text-xs mt-2">
              <span>{comment.author}</span>
              <span>{date}</span>
              {comment.author === "jessjelly" && (
                <button
                  disabled={btnDisabled}
                  onClick={() =>
                    handleDeleteButton(comment.comment_id, comment.article_id)
                  }
                  className="text-red-500 disabled:opacity-50 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
