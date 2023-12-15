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
    <article className="container mx-auto p-4">
      <Navbar />
      <h2 className="text-2xl font-bold text-center my-6">
        {singleArticle.title}
      </h2>

      <ul>
        <ArticleDetail
          singleArticle={singleArticle}
          setSingleArticle={setSingleArticle}
        />
      </ul>
    </article>
  );
}

export default SingleArticle;
