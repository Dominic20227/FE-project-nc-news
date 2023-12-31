import axios from "axios";

const nc_news_api = axios.create({
  baseURL: "https://articlesapi-jz0j.onrender.com/api",
});

export const getAllArticles = () => {
  return nc_news_api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return nc_news_api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article[0];
  });
};

export const getCommentsByArticleId = (articleId) => {
  return nc_news_api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const upVoteArticle = (articleId) => {
  return nc_news_api
    .patch(`/articles/${articleId}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.updatedArticle;
    });
};

export const postCommentByArticleId = (articleId, comment) => {
  return nc_news_api
    .post(`/articles/${articleId}/comments`, {
      username: "jessjelly",
      body: comment,
    })
    .then(({ data }) => data.comments);
};

export const deleteCommentByCommentId = (commentId) => {
  return nc_news_api.delete(`/comments/${commentId}`).then((res) => {
    return res;
  });
};

export const getTopics = () => {
  return nc_news_api.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticlesByTopic = (topic) => {
  return nc_news_api.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};
