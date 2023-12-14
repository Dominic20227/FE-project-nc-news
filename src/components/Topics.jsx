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
    return <p className="text-center text-xl">Loading</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
      {topics.map((topic) => {
        return (
          <li
            className="text-center shadow-lg my-4 mx-2 p-6 h-[300px] hover:shadow-xl transition-shadow duration-300 "
            key={topic.slug}
          >
            <p className="text-3xl font-semibold">{topic.slug}</p>
            <p className="text-xl mb-4"> {topic.description}</p>
            <Link
              className="text-lg text-blue-600 hover:text-blue-800 "
              to={`/articles/${topic.slug}`}
            >
              {" "}
              Read more!
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Topics;
