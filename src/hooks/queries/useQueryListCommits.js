import { useQuery } from "@tanstack/react-query";
import Github from "@services/api/github";
import gitHubQueryKeys from "./queryKeys";

const listCommits = (params) => async () => {
  const response = await Github.listCommits(params);
  return response.data;
};

const useQueryListCommits = (params) => {
  const { owner, repo } = params;
  return useQuery({
    queryKey: gitHubQueryKeys.listCommits(params),
    queryFn: listCommits(params),
    enabled: Boolean(owner && repo),
  });
};

export default useQueryListCommits;
