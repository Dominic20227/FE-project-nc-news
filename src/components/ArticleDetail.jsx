import dayjs from "dayjs";

function ArticleDetail({ singleArticle }) {
  const date = String(dayjs(singleArticle.created_at).$d);

  return (
    <div className="article-card">
      <h3>Article detail</h3>
      <li>
        <h4>{singleArticle.title}</h4>
        <p>{singleArticle.body}</p>
        <p> {singleArticle.author}</p>
        <p> {date}</p>
        <p>Votes: {singleArticle.votes}</p>
      </li>
    </div>
  );
}

export default ArticleDetail;
