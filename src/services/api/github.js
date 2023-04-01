import { get } from "./base";
import moment from "moment";

const Github = {
  searchRepositories: (query = "") => get(`/search/repositories?${query}`),
  listCommits: ({
    owner,
    repo,
    since = moment().startOf("hour").subtract(24, "hours").toISOString(),
  }) => get(`/repos/${owner}/${repo}/commits?since=${since}`),
};

export default Github;
