import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./index.css";

import SingleArticle from "./pages/SingleArticle";
import Articles from "./pages/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allArticles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/singlearticle/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
