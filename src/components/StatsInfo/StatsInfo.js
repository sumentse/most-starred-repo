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
  borderTopColor = grey[300],
  forkCount = 0,
  watcherCount = 0,
  starCount = 0,
}) => {
  return (
    <Paper
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
          <Styled.Counter>{forkCount}</Styled.Counter>
          <Styled.Label>Forks</Styled.Label>
        </Styled.Stats>
        <Styled.Stats>
          <Styled.Counter>{watcherCount}</Styled.Counter>
          <Styled.Label>Watchers</Styled.Label>
        </Styled.Stats>
        <Styled.Stats>
          <Styled.Counter>{starCount}</Styled.Counter>
          <Styled.Label>Stars</Styled.Label>
        </Styled.Stats>
      </Styled.StatsContainer>
    </Paper>
  );
};

StatsInfo.propTypes = {
  borderTopColor: PropTypes.string,
  forkCount: PropTypes.number,
  watcherCount: PropTypes.number,
  starCount: PropTypes.number,
};

export default StatsInfo;
