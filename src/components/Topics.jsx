import { useState, useEffect } from "react";
import { getTopics } from "../api/api";
import { Link } from "react-router-dom";

function Topics() {
  const [topics, setTopics] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
      setHasLoaded(true);
    });
  }, []);

  if (!hasLoaded) {
    return <p>Loading</p>;
  }
  return (
    <ul>
      {topics.map((topic) => {
        return (
          <li key={topic.slug}>
            {" "}
            <p>{topic.slug}</p>
            <p> {topic.description}</p>
            <Link to={`/articlesByTopic?topic=${topic.slug}`}> See more!</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Topics;
