import { useQuery } from "@tanstack/react-query";
import Github from "@services/api/github";
import gitHubQueryKeys from "./queryKeys";

const listCommits = (params) => async () => {
  
  const response = await Github.listCommits(params);
  return response.data;
};

const useQueryListCommits = ({ query = "" }) =>
  useQuery({
    queryKey: gitHubQueryKeys.commits(query),
    queryFn: listCommits(query),
    enabled: !!query,
  });

export default useQueryListCommits;
