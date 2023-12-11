function ArticleDetail({ singleArticle }) {
  return (
    <div className="article-card">
      <h3>Article detail</h3>
      <li>
        <h4>{singleArticle.title}</h4>
        <p>{singleArticle.body}</p>
        <p>author: {singleArticle.author}</p>
        <p>Date: {singleArticle.created_at}</p>
        <p>Votes: {singleArticle.votes}</p>
      </li>
    </div>
  );
}

export default ArticleDetail;
