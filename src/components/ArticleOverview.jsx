import { Link } from "react-router-dom";
import dayjs from "dayjs";
function ArticleOverview({ article }) {
  return (
    <li className="article-overview-cards">
      <h3>{article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{String(dayjs(article.created_at).$d)}</p>
      <p>
        <Link to={`/singleArticle/${article.article_id}`}>Read more</Link>
      </p>
    </li>
  );
}
export default ArticleOverview;
