import dayjs from "dayjs";

function Comments({ comments }) {
  return (
    <ul className="comment-section">
      {comments.map((comment) => {
        const date = String(dayjs(comment.created_at).$d);
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
