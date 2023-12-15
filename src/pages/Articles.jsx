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
    return <p className="text-center text-xl mt-5">Loading</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Navbar />

      <p className="inline">
        Sort Votes
        <select
          className="ml-[5px]"
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

      <p className="inline ml-[20px]">
        Sort Dates
        <select
          className="ml-[5px]"
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

      <p className="inline inline ml-[20px]">
        Sort Comments
        <select
          className="ml-[5px]"
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

      <h2 className="mt-[40px] text-7xl">Articles </h2>

      <ul>
        {articles.map((article) => {
          return <ArticleOverview article={article} key={article.article_id} />;
        })}
      </ul>

      <h2 className="text-4xl font-bold text-center my-6">Articles </h2>

      <ul className="space-y-4">
        {articles.map((article) => {
          return <ArticleOverview article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
}

export default Articles;
