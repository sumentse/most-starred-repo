import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import moment from "moment";
import useQuerySearchRepos from "@hooks/queries/useQuerySearchRepos";
import useQueryListCommits from "@hooks/queries/useQueryListCommits";
import RepoCard from "@components/RepoCard";
import CommitHistoryModal from "@components/CommitHistoryModal";
import useModal from "@hooks/useModal";
import LoadingScreen from "@components/LoadingScreen";

const GitRepos = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const twentyFourHoursAgo = moment()
    .startOf("hour")
    .subtract(24, "hours")
    .toISOString();

  const { data: repoData, isLoading: isSearchRepoLoading } =
    useQuerySearchRepos({
      query: `q=stars:>1 pushed:>=${twentyFourHoursAgo}&sort=stars&order=desc&per_page=100`,
    });
  const { data: commitsData, isLoading: isListCommitsLoading } =
    useQueryListCommits({ ...selectedRepo, twentyFourHoursAgo });

  const viewCommits = ({ owner, repo }) => {
    setSelectedRepo({ owner, repo });
    openModal();
  };

  const buildCards = () => {
    return repoData.items.map(
      ({
        id,
        name,
        owner,
        html_url,
        description,
        forks,
        watchers,
        stargazers_count,
      }) => {
        const menuItems = [
          {
            label: "Open Git Repo",
            externalUrl: html_url,
          },
          {
            label: "View Commits",
            menuPress: () =>
              viewCommits({
                owner: owner.login,
                repo: name,
              }),
          },
        ];
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <RepoCard
              name={name}
              owner={owner}
              description={description}
              forkCount={forks}
              starCount={stargazers_count}
              watcherCount={watchers}
              url={html_url}
              menuItems={menuItems}
            />
          </Grid>
        );
      }
    );
  };

  if (isSearchRepoLoading) return <LoadingScreen />;

  return (
    <Box sx={{ my: 10 }}>
      <Typography variant="h4" component="h1">
        Top 100 Star Repositories
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {buildCards()}
        <CommitHistoryModal
          open={isOpen}
          closeModal={closeModal}
          commits={commitsData || []}
          isLoading={isListCommitsLoading}
        />
      </Grid>
    </Box>
  );
};

export default GitRepos;
