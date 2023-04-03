import PropTypes from "prop-types";
import { Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const Styled = {
  StatsContainer: styled(Box)(() => {
    return {
      display: "flex",
      justifyContent: "space-evenly",
    };
  }),
  Stats: styled(Box)(() => {
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  }),
  Counter: styled(Typography)(() => {
    return {
      fontWeight: "bold",
      fontSize: 17,
    };
  }),
  Label: styled(Typography)(() => {
    return {
      color: grey[700],
      fontSize: 14,
      marginTop: -6,
    };
  }),
};

const StatsInfo = ({
  repoName,
  borderTopColor = grey[300],
  forkCount = 0,
  watcherCount = 0,
  starCount = 0,
}) => {
  return (
    <Paper
      data-testid={`${repoName}-stats-info`}
      elevation={2}
      sx={{ mt: 2, p: 2, borderTop: `solid 2px ${borderTopColor}` }}
    >
      <Styled.StatsContainer>
        <Styled.Stats
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styled.Counter data-testid={`${repoName}-fork-count`}>{forkCount}</Styled.Counter>
          <Styled.Label >Forks</Styled.Label>
        </Styled.Stats>
        <Styled.Stats>
          <Styled.Counter data-testid={`${repoName}-watcher-count`}>{watcherCount}</Styled.Counter>
          <Styled.Label>Watchers</Styled.Label>
        </Styled.Stats>
        <Styled.Stats>
          <Styled.Counter data-testid={`${repoName}-star-count`}>{starCount}</Styled.Counter>
          <Styled.Label>Stars</Styled.Label>
        </Styled.Stats>
      </Styled.StatsContainer>
    </Paper>
  );
};

StatsInfo.propTypes = {
  repoName: PropTypes.string.isRequired,
  borderTopColor: PropTypes.string,
  forkCount: PropTypes.number,
  watcherCount: PropTypes.number,
  starCount: PropTypes.number,
};

export default StatsInfo;
