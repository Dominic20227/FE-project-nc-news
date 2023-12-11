import axios from "axios";

const nc_news_api = axios.create({
  baseURL: "https://articlesapi-jz0j.onrender.com/api",
});

export const getAllArticles = () => {
  return nc_news_api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
