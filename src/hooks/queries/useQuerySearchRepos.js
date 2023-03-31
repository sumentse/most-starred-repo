import { useQuery } from "@tanstack/react-query";
import Github from "services/api/github";
import gitHubQueryKeys from './queryKeys';


const searchRepos = (query) => async () => {
  const response = await Github.searchRepositories(query);
  return response.data;
};

const useQuerySearchRepos = ({ query = "" }) =>
  useQuery({
    queryKey: gitHubQueryKeys.repos(query),
    queryFn: searchRepos(query),
    enabled: !!query,
  });

export default useQuerySearchRepos;
