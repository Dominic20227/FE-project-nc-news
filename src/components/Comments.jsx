import dayjs from "dayjs";

function Comments({ comments }) {
  const date = String(dayjs(comments.created_at).$d);
  return (
    <ul className="comment-section">
      {comments.map((comment) => {
        return (
          <li className="comment-card" key={comment.comment_id}>
            <p> {comment.body}</p>
            <p> {date}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
