import { useQuery } from "@tanstack/react-query";
import Github from "services/api/github";
import gitHubQueryKeys from "./queryKeys";

const searchCommits = (query) => async () => {
  const response = await Github.searchCommits(query);
  return response.data;
};

const useQuerySearchCommits = ({ query = "" }) =>
  useQuery({
    queryKey: gitHubQueryKeys.commits(query),
    queryFn: searchCommits(query),
    enabled: !!query,
  });

export default useQuerySearchCommits;
