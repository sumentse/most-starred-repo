import { useQuery } from "@tanstack/react-query";
import Github from "services/api/github";

const searchCommits = (query) => async () => {
  const response = await Github.searchCommits(query);
  return response.data;
};

const useQuerysearchCommits = ({ query = "" }) =>
  useQuery({
    queryKey: ["github", "repos", query],
    queryFn: searchCommits(query),
    enabled: !!query,
  });

export default useQuerysearchCommits;
