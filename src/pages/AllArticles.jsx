import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import Navbar from "../components/Navbar";
import ArticleOverview from "../components/ArticleOverview";

function AllArticles() {
  const [allArticles, setAllArticles] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setAllArticles(articles);
      setHasLoaded(true);
    });
  }, []);

  if (!hasLoaded) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Navbar />
      <h2>All Articles</h2>

      <ul>
        {allArticles.map((article) => {
          return <ArticleOverview article={article} />;
        })}
      </ul>
    </div>
  );
}

export default AllArticles;
