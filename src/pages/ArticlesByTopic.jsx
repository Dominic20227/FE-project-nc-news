import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../api/api";
import dayjs from "dayjs";

function ArticlesByTopic() {
  const [topics, setTopics] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const { topic } = useParams();

  console.log(topic);
  useEffect(() => {
    getArticlesByTopic(topic).then((res) => {
      console.log(res);
      setTopics(res);
      setHasLoaded(true);
    });
  }, []);

  if (!hasLoaded) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>Articles By Topic</h2>

      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.article_id}>
              <h4>{topic.topic}</h4>
              <h5>{topic.title}</h5>
              <p>{topic.author}</p>

              <p>votes: {topic.votes}</p>
              <p>{String(dayjs(topic.created_at).$d)}</p>

              <Link to={`/singlearticle/${topic.article_id}`}> Read more </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesByTopic;
