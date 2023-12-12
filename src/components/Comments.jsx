import dayjs from "dayjs";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../api/api";

function Comments({ comments, setComments }) {
  function handleDeleteButton(commentId, articleId) {
    const userInput = confirm(
      "Are you sure you want to delete this comment?  "
    );
    if (userInput) {
      return deleteCommentByCommentId(commentId)
        .then((res) => {
          return getCommentsByArticleId(articleId);
        })
        .then((updatedComments) => setComments(updatedComments));
    }
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
