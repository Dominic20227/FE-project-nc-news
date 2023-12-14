export const SortByDate = (userSelection, articles, setArticles) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (userSelection === "ASC") {
      var keyA = new Date(a.created_at),
        keyB = new Date(b.created_at);
      // Compare the 2 dates

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    if (userSelection === "DEC") {
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

export const SortByVotes = (userSelection, articles, setArticles) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (userSelection === "ASC") {
      var keyA = a.votes,
        keyB = b.votes;
      // Compare the 2 dates

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    if (userSelection === "DEC") {
      var keyC = a.votes,
        keyD = b.votes;
      // Compare the 2 dates

      if (keyC < keyD) return 1;
      if (keyC > keyD) return -1;
      return 0;
    }
  });

  setArticles(newArticles);
};
export const SortByComments = (userSelection, articles, setArticles) => {
  const newArticles = [...articles];

  newArticles.sort(function (a, b) {
    if (userSelection === "ASC") {
      var keyA = a.comment_count,
        keyB = b.comment_count;
      // Compare the 2 dates

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    if (userSelection === "DEC") {
      var keyC = a.comment_count,
        keyD = b.comment_count;
      // Compare the 2 dates

      if (keyC < keyD) return 1;
      if (keyC > keyD) return -1;
      return 0;
    }
  });

  setArticles(newArticles);
};
