import { Grid } from "@mui/material";
import moment from "moment";
import useQuerySearchRepos from "@hooks/queries/useQuerySearchRepos";
import useQueryListCommits from "@hooks/queries/useQueryListCommits";
import RepoCard from "@components/RepoCard";

const GitRepos = () => {
  const twentyFourHoursAgo = moment()
    .startOf("hour")
    .subtract(24, "hours")
    .toISOString();
  const { data: repoData, isLoading } = useQuerySearchRepos({
    query: `q=stars:>1 pushed:>=${twentyFourHoursAgo}&sort=stars&order=desc&per_page=10`,
  });

  const buildCards = () => {
    return repoData.items.map(
      ({ id, name, owner, html_url, description, stargazers_count }) => {
        const menuItems = [
          {
            label: "Open Git Repo",
            externalUrl: html_url
          },
          {
            label: "View Commits",
            menuPress: () => console.log("open modal"),
          },
        ];
        return (
          <Grid item xs={12} md={4} key={id}>
            <RepoCard
              name={name}
              owner={owner}
              description={description}
              starCount={stargazers_count}
              url={html_url}
              menuItems={menuItems}
            />
          </Grid>
        );
      }
    );
  };

  if (isLoading) return null;

  return (
    <Grid container spacing={3} sx={{ my: 10 }}>
      {buildCards()}
    </Grid>
  );
};

export default GitRepos;
