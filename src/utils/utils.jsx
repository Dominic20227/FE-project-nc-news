export const SortByDate = (
  articles,
  setArticles,
  dateFilter,
  setDateFilter
) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (dateFilter === "dec") {
      setDateFilter("asc");
      var keyA = new Date(a.created_at),
        keyB = new Date(b.created_at);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    } else {
      setDateFilter("dec");
      var keyC = new Date(a.created_at),
        keyD = new Date(b.created_at);
      // Compare the 2 dates
      if (keyC < keyD) return 1;
      if (keyC > keyD) return -1;
      return 0;
    }
  });

  setArticles(newArticles);
};

export const SortByVotes = (
  articles,
  setArticles,
  votesFilter,
  setVotesFilter
) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (votesFilter === "dec") {
      setVotesFilter("asc");
      var keyA = new Date(a.created_at),
        keyB = new Date(b.created_at);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    } else {
      setVotesFilter("dec");
      var keyC = new Date(a.created_at),
        keyD = new Date(b.created_at);
      // Compare the 2 dates
      if (keyC < keyD) return 1;
      if (keyC > keyD) return -1;
      return 0;
    }
  });

  setArticles(newArticles);
};

export const SortByComments = (
  articles,
  setArticles,
  commentsFilter,
  setCommentsFilter
) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (commentsFilter === "dec") {
      setCommentsFilter("asc");
      var keyA = new Date(a.created_at),
        keyB = new Date(b.created_at);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    } else {
      setCommentsFilter("dec");
      var keyC = new Date(a.created_at),
        keyD = new Date(b.created_at);
      // Compare the 2 dates
      if (keyC < keyD) return 1;
      if (keyC > keyD) return -1;
      return 0;
    }
  });

  setArticles(newArticles);
};
