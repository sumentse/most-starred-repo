var gitHubKeys = {
  all: ["github"],
  search: ()=> [...gitHubKeys.all, "search"],
  repos: (query) => [...gitHubKeys.search(), "repos", query],
  commits: (query) => [...gitHubKeys.search(), "commits", query],
};

export default gitHubKeys;
