import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic, getAllArticles } from "../api/api";
import ArticleOverview from "../components/ArticleOverview";
import { SortByComments, SortByDate, SortByVotes } from "../utils/utils";

function Articles() {
  const [articles, setArticles] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  const { topic } = useParams();

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic).then((res) => {
        setArticles(res);
        setHasLoaded(true);
      });
    }
    getAllArticles().then((res) => {
      setArticles(res);
      setHasLoaded(true);
    });
  }, []);

  if (!hasLoaded) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Navbar />

      <p>
        Sort Votes
        <select
          onChange={(e) => {
            const userSelection = e.target.value;

            SortByVotes(userSelection, articles, setArticles);
          }}
        >
          <option> Choose</option>
          <option value="ASC">ASC</option>
          <option value="DEC">DEC</option>
        </select>
      </p>

      <p>
        Sort Dates
        <select
          onChange={(e) => {
            const userSelection = e.target.value;

            SortByDate(userSelection, articles, setArticles);
          }}
        >
          <option> Choose</option>
          <option value="ASC">ASC</option>
          <option value="DEC">DEC</option>
        </select>
      </p>

      <p>
        Sort Comments
        <select
          onChange={(e) => {
            const userSelection = e.target.value;

            SortByComments(userSelection, articles, setArticles);
          }}
        >
          <option> Choose</option>
          <option value="ASC">ASC</option>
          <option value="DEC">DEC</option>
        </select>
      </p>

      <h2>Articles </h2>
      <ul>
        <ul>
          {articles.map((article) => {
            return (
              <ArticleOverview article={article} key={article.article_id} />
            );
          })}
        </ul>
      </ul>
    </div>
  );
}

export default Articles;
