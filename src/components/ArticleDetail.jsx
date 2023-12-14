import dayjs from "dayjs";
import Comments from "./Comments";
import { useState, useEffect } from "react";
import { getCommentsByArticleId, upVoteArticle } from "../api/api";
import AddCommentForm from "./AddCommentForm";

function ArticleDetail({ singleArticle, setSingleArticle }) {
  const [comments, setComments] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [err, setErr] = useState(null);

  const date = String(dayjs(singleArticle.created_at).$d);

  useEffect(() => {
    getCommentsByArticleId(singleArticle.article_id).then((comments) => {
      setComments(comments);

      setHasLoaded(true);
    });
  }, []);

  function handleUpvote(articleID) {
    setSingleArticle({ ...singleArticle, votes: singleArticle.votes + 1 });

    upVoteArticle(articleID)
      .then((updatedArticle) => {
        setSingleArticle(updatedArticle);
      })
      .catch((err) => {
        if (err) {
          setErr("Something went wrong");
          setSingleArticle({
            ...singleArticle,
            votes: singleArticle.votes,
          });
        }
      });
  }

  if (!hasLoaded) {
    return <p>Please wait </p>;
  }

  return (
    <article className="p-6 bg-white shadow-lg rounded-lg">
      <section>
        <h3>Article detail</h3>

        <h4 className="text-xl font-semibold mb-1">{singleArticle.title}</h4>
        <p className="mb-3">{singleArticle.body}</p>
        <p className="italic mb-1"> {singleArticle.author}</p>
        <p className="mb-3"> {date}</p>
        {err ? <p className="text-red-500">{err}</p> : <p> </p>}

        <div className="flex items-center gap-2">
          <p>
            Votes: {singleArticle.votes}
            <button onClick={() => handleUpvote(singleArticle.article_id)}>
              Upvote
            </button>
          </p>
        </div>
      </section>

      <section className="mb-6">
        <AddCommentForm
          articleId={singleArticle.article_id}
          comments={comments}
          setComments={setComments}
          setErr={setErr}
        />
      </section>

      <section>
        <Comments comments={comments} />
      </section>
    </article>
  );
}

export default ArticleDetail;
