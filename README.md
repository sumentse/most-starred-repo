# Most Starred Git Repositories

## Overview of project
This web application allows users to discover the most popular GitHub repositories in the last 24 hours. The application retrieves data from the GitHub API and presents the top 100 repositories based on the number of stars they received during that time period.

In addition to browsing the repository list, users can also view a list of commits made in the last 24 hours for any repository of interest. This feature enables users to explore recent contributions to their favorite projects and stay up to date with the latest changes.

The application features a clean and modern design, with an intuitive user interface that is optimized for a range of devices. The code is structured with best practices in mind, ensuring maintainability, scalability, and performance.

Overall, this project aims to provide a valuable tool for developers and users interested in keeping up with the latest trends and activity on GitHub.
## Installation
1. Clone the repository to your local machine using the command git clone https://github.com/sumentse/react-coding-exercise.git.
2. Install the dependencies by running the command `yarn install`.
3. Create a .env file in the root of the project directory and add the required environment variables. You can copy the contents of .env.example file and replace the values with your own.
4. Start the server by running the command `yarn start`. The server will run on port 3000 by default.
5. Open your web browser and navigate to http://localhost:3000 to view the application.

## Code Structure
```
App/
├─ src/
│  ├─ components/
│  │  ├─ StatsInfo/
│  │  │  ├─ StatsInfo.js
│  │  │  ├─ StatsInfo.test.js
│  │  │  ├─ index.js
│  ├─ hooks/
│  │  ├─ queries/
│  │  │  ├─ queryKeys.js
│  │  │  ├─ useQuerySearchRepo.js
│  ├─ services/
│  │  ├─ api/
│  │  │  ├─ base.js
│  │  │  ├─ github.js
│  ├─ utils/
│  ├─ container/
├─ .github/workflows/
│  ├─ firebase-hosting-merge.yml
├─ public/
├─ craco.config.js
├─ firebase.json
├─ jsconfig.json
├─ package.json
├─ .env

```
- src/ contains the main source code of the application.
- components/ is a directory for all of the presentational components of the application. It contains a sub-directory StatsInfo/ for a specific component and its corresponding files.
- hooks/ is a directory for all of the custom hooks of the application. It contains a sub-directory queries/ for hooks related to querying data from the backend API, and two corresponding files queryKeys.js and useQuerySearchRepo.js.
- services/ is a directory for all of the business logic services of the application. It contains a sub-directory api/ for the API service and two corresponding files base.js and github.js.
- utils/ is a directory for all of the utility functions of the application.
- container/ is a directory for all of the container components of the application, which are responsible for connecting to the state and rendering the presentational components.
- .github/workflows/ is a directory for the GitHub Actions workflows.
- public/ is a directory for the public assets of the application.
- craco.config.js is the configuration file for craco, a configuration layer for create-react-app.
- firebase.json is the configuration file for Firebase hosting.
- jsconfig.json is the configuration file for JavaScript language support in the editor.
- package.json is the configuration file for the dependencies and scripts of the application.
- .env is the configuration file for the environment variables of the application.

## Technical Details
- The application is built using React and utilizes the Create React App boilerplate.
- The backend API is provided by the GitHub API.
- The frontend uses the Material-UI component library for styling and layout.
- State management and data fetching is handled by React Query, a library that provides caching, query deduplication, and automatic background refetching of data.
- Custom hooks are used to manage state and API requests, and are located in the `src/hooks` directory.
- The `src/components` directory contains presentational components that are rendered by container components located in `src/container`.
- The API service is located in the `src/services/api` directory and uses the Axios library for making HTTP requests.
- The application is fully responsive and utilizes media queries to adjust the layout for different screen sizes.

## Implementation Decisions
- Redux was not used in this application as the size and complexity of the application did not warrant the additional overhead and boilerplate code that comes with using Redux.
- TypeScript was not used in this application as the team was not familiar with TypeScript and decided to stick with JavaScript to avoid potential implementation errors and delays.