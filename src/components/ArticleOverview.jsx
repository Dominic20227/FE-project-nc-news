function ArticleOverview({ article }) {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
    </li>
  );
}
export default ArticleOverview;
