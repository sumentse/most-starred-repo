const gitHubKeys = {
  all: ["github"],
  search: ()=> [...gitHubKeys.all, "search"],
  list: ()=> [...gitHubKeys.all, "list"],
  repos: (query) => [...gitHubKeys.search(), "repos", query],
  listCommits: (params) => [...gitHubKeys.list(), "commits", params],
};

export default gitHubKeys;
