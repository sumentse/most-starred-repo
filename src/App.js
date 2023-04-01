import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const GitRepos = lazy(() => import("@containers/GitRepos"));
const LoadingScreen = lazy(() => import("@components/LoadingScreen"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route exact path="/" element={<GitRepos />} />
          <Route path="*" element={<div>Could not find page</div>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
