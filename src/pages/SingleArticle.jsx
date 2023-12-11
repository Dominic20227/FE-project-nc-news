import { useEffect, useState } from "react";
import ArticleDetail from "../components/ArticleDetail";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/api";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setSingleArticle(singleArticle);
      setHasLoaded(true);
    });
  }, []);

  if (!hasLoaded) {
    return <p> Loading</p>;
  }
  return (
    <div>
      <Navbar />
      <h2>Single Article</h2>

      <ul>
        <ArticleDetail singleArticle={singleArticle} />
      </ul>
    </div>
  );
}

export default SingleArticle;
