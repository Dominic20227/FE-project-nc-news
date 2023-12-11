import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import SingleArticle from "./pages/SingleArticle";
import AllArticles from "./pages/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allArticles" element={<AllArticles />} />
        <Route path="/article/:topic" element={<ArticlesByTopic />} />
        <Route path="/singlearticle/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
