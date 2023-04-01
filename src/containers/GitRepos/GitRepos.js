import moment from "moment";
import useQuerySearchRepos from "@hooks/queries/useQuerySearchRepos";
import useQueryListCommits from "@hooks/queries/useQueryListCommits";

const GitRepos = () => {
  const twentyFourHoursAgo = moment()
    .startOf("hour")
    .subtract(24, "hours")
    .toISOString();
  const { data, isLoading } = useQuerySearchRepos({
    query: `q=stars:>1 pushed:>=${twentyFourHoursAgo}&sort=stars&order=desc&per_page=100`,
  });

  return <div data-testid="git-repos">Placeholder</div>;
};

export default GitRepos;
