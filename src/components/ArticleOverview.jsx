function ArticleOverview({ article }) {
  return (
    <li key={article.article_id}>
      <h3>{article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
    </li>
  );
}
export default ArticleOverview;
