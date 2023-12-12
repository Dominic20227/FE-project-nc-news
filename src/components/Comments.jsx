import dayjs from "dayjs";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../api/api";

function Comments({ comments, setComments, setErr }) {
  function handleDeleteButton(commentId, articleId) {
    return deleteCommentByCommentId(commentId)
      .then((res) => {
        return getCommentsByArticleId(articleId);
      })
      .then((updatedComments) => setComments(updatedComments))
      .catch((err) => {
        setErr(
          "There has been a problem, please refresh the page and try again"
        );
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
            <p> {comment.body}</p>
            <p>
              {comment.author}
              {comment.author === "jessjelly" ? (
                <button
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
