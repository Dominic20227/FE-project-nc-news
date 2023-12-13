import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic, getAllArticles } from "../api/api";
import ArticleOverview from "../components/ArticleOverview";
import { SortByComments, SortByDate, SortByVotes } from "../utils/utils";

function Articles() {
  const [articles, setArticles] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [dateFilter, setDateFilter] = useState("dec");
  const [votesFilter, setVotesFilter] = useState("dec");
  const [commentsFilter, setCommentsFilter] = useState("dec");
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

  const sortTopicsByVotes = () => {
    const newArticles = [...articles];

    newArticles.sort(function (a, b) {
      if (votesFilter === "dec") {
        setVotesFilter("asc");
        var keyA = new Date(a.votes),
          keyB = new Date(b.votes);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      } else {
        setVotesFilter("dec");
        var keyC = new Date(a.votes),
          keyD = new Date(b.votes);
        // Compare the 2 dates
        if (keyC < keyD) return 1;
        if (keyC > keyD) return -1;
        return 0;
      }
    });

    setArticles(newArticles);
  };

  const sortTopicsByComments = () => {
    const newArticles = [...articles];

    newArticles.sort(function (a, b) {
      if (CommentsFilter === "dec") {
        setCommentsFilter("asc");
        var keyA = new Date(a.comment_count),
          keyB = new Date(b.comment_count);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      } else {
        setCommentsFilter("dec");
        var keyC = new Date(a.comment_count),
          keyD = new Date(b.comment_count);
        // Compare the 2 dates
        if (keyC < keyD) return 1;
        if (keyC > keyD) return -1;
        return 0;
      }
    });

    setArticles(newArticles);
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          SortByDate(articles, setArticles, dateFilter, setDateFilter);
        }}
      >
        Sort by date
      </button>

      <button
        onClick={() =>
          SortByVotes(articles, setArticles, votesFilter, setVotesFilter)
        }
      >
        Sort by Votes {votesFilter}
      </button>

      <button
        onClick={() =>
          SortByComments(
            articles,
            setArticles,
            commentsFilter,
            setCommentsFilter
          )
        }
      >
        Sort by Comments {commentsFilter}
      </button>
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
