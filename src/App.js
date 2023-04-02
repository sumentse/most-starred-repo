import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {Container} from '@mui/material';
const GitRepos = lazy(() => import("@containers/GitRepos"));
const LoadingScreen = lazy(() => import("@components/LoadingScreen"));

const App = () => {
  return (
    <Container maxWidth="xl">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route exact path="/" element={<GitRepos />} />
          <Route path="*" element={<div>Could not find page</div>}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
