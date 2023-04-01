import logo from "./logo.svg";
import useQuerySearchRepos from "@hooks/queries/useQuerySearchRepos";
import moment from "moment";

const Test = () => {
  const twentyFourHoursAgo = moment()
    .startOf("hour")
    .subtract(24, "hours")
    .toISOString();
  const { data, isLoading } = useQuerySearchRepos({
    query: `q=stars:>1 pushed:>=${twentyFourHoursAgo}&sort=stars&order=desc&per_page=100`,
  });

  console.log({ data, isLoading });

  return <div />;
};

const App = () => {

  return (
    <div className="App">
      <Test />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing deploy with yarn</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
