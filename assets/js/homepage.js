var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };
  
  getUserRepos();

  //left off at 6.1.4