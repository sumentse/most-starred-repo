import { CircularProgress, Grid } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      data-testid="loading-screen"
    >
      <Grid item xs={3}>
        <CircularProgress data-testid="spinner" />
      </Grid>
    </Grid>
  );
};

export default LoadingScreen;
