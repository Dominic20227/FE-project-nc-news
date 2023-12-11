import dayjs from "dayjs";
import Comments from "./Comments";
import { useState, useEffect } from "react";
import { getCommentsByArticleId, upVoteArticle } from "../api/api";

function ArticleDetail({ singleArticle, setSingleArticle }) {
  const [comments, setComments] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const date = String(dayjs(singleArticle.created_at).$d);

  useEffect(() => {
    getCommentsByArticleId(singleArticle.article_id).then((comments) => {
      setComments(comments);

      setHasLoaded(true);
    });
  }, []);

  function handleUpvote(articleID) {
    setHasLoaded(false);
    upVoteArticle(articleID).then((updatedArticle) => {
      setSingleArticle(updatedArticle);
      setHasLoaded(true);
    });
  }

  if (!hasLoaded) {
    return <p>Please wait </p>;
  }

  return (
    <article className="article-card">
      <section>
        <h3>Article detail</h3>
        <li>
          <h4>{singleArticle.title}</h4>
          <p>{singleArticle.body}</p>
          <p> {singleArticle.author}</p>
          <p> {date}</p>
          <p>
            Votes: {singleArticle.votes}
            <button onClick={() => handleUpvote(singleArticle.article_id)}>
              Upvote
            </button>
          </p>
        </li>
      </section>

      <section>
        <Comments comments={comments} />
      </section>
    </article>
  );
}

export default ArticleDetail;
