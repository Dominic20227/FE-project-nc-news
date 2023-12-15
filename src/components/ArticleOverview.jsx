import { Link } from "react-router-dom";
import dayjs from "dayjs";
function ArticleOverview({ article }) {
  return (
    <li className="article-overview-cards mt-[50px] border-b border-solid ">
      <h5 className="text-2xl">{article.title}</h5>
      <h4 className="mt-2">Topic: {article.topic}</h4>
      <p>Author: {article.author}</p>

      <p>Votes: {article.votes}</p>
      <p>{String(dayjs(article.created_at).$d)}</p>
      <p className="mb-[50px]">
        <Link to={`/singleArticle/${article.article_id}`}>Read more</Link>
      </p>
    </li>
  );
}
export default ArticleOverview;
