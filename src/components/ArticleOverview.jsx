import { Link } from "react-router-dom";

function ArticleOverview({ article }) {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>
        <Link to={`/singleArticle/${article.article_id}`}>See more</Link>
      </p>
    </li>
  );
}
export default ArticleOverview;
