import dayjs from "dayjs";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../api/api";
import { useState, useEffect } from "react";

function Comments({ comments, setComments, setErr }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [commentIdErr, setCommentIdErr] = useState(null); //err will show up at specific comment box
  const [commentIdMsg, setCommentIdMsg] = useState(null); //msg will show up at specific comment box

  function handleDeleteButton(commentId, articleId) {
    setCommentIdMsg(commentId); //msg will show up at specific comment box
    setComments(comments.filter((val) => val.comment_id !== commentId)); //optimistic rendering
    setBtnDisabled(true);

    return deleteCommentByCommentId(commentId)
      .then((res) => {
        return getCommentsByArticleId(articleId);
      })
      .then((updatedComments) => {
        setComments(updatedComments);
        setBtnDisabled(false);
        setCommentIdMsg("");
      })
      .catch((err) => {
        setCommentIdMsg("");
        setCommentIdErr(commentId);

        setComments(comments);
        setBtnDisabled(false);
      });
  }

  return (
    <ul className="comment-section">
      {comments.map((comment) => {
        const date = String(dayjs(comment.created_at).$d);
        return (
          <li
            className={`comment-card ${
              comment.comment_id === "newComment" ? "newComment" : ""
            }`}
            key={comment.comment_id}
          >
            {comment.comment_id === commentIdErr ? ( //err will show up at specific comment box
              <p>
                There has been a problem. Please refresh the page and try again
              </p>
            ) : (
              ""
            )}

            {comment.comment_id === commentIdMsg ? ( //msg will show up at specific comment box
              <p>Deleting your cooment. Please wait....</p>
            ) : (
              ""
            )}

            <p> {comment.body}</p>
            <p>
              {comment.author}
              {comment.author === "jessjelly" ? (
                <button
                  disabled={btnDisabled}
                  onClick={() =>
                    handleDeleteButton(comment.comment_id, comment.article_id)
                  }
                >
                  ❌
                </button>
              ) : (
                ""
              )}
            </p>
            <p> {date}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
