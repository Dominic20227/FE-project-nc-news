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
    <ul className="space-y-4">
      {comments.map((comment) => {
        const date = String(dayjs(comment.created_at).$d);
        return (
          <li
            className={`p-4 border border-gray-300 rounded-lg ${
              comment.comment_id === "newComment" ? "bg-blue-100" : "bg-white"
            }`}
            key={comment.comment_id}
          >
            {comment.comment_id === commentIdErr ? ( //err will show up at specific comment box
              <p className="text-red-500">
                There has been a problem. Please refresh the page and try again
              </p>
            ) : (
              ""
            )}

            <p className="mb-2"> {comment.body}</p>

            <div className="flex justify-between items-center">
              <p>
                {comment.author}
                {comment.author === "jessjelly" ? (
                  <button
                    disabled={btnDisabled}
                    onClick={() =>
                      handleDeleteButton(comment.comment_id, comment.article_id)
                    }
                    className="text-red-500 hover:text-red-700 disabled:opacity-50"
                  >
                    ❌
                  </button>
                ) : (
                  ""
                )}
              </p>
              <p> {date}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
