import { get } from "./base";

const Github = {
  searchRepositories: (query = "") => get(`/search/repositories?${query}`),
  searchCommits: (query = "") => get(`/search/commits${query}`),
};

export default Github;
