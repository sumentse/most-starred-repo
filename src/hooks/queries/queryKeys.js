var gitHubKeys = {
  all: ["github"],
  search: ()=> [...gitHubKeys.all, "search"],
  list: ()=> [...gitHubKeys.all, "list"],
  repos: (query) => [...gitHubKeys.search(), "repos", query],
  listCommits: (query) => [...gitHubKeys.list(), "commits", query],
};

export default gitHubKeys;
