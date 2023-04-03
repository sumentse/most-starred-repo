import { fireEvent, render, screen } from "@testing-library/react";
import RepoCard from "./";

describe("RepoCard", () => {
  let props;

  beforeEach(() => {
    props = {
      name: "freeCodeCamp",
      owner: {
        login: "freeCodeCamp",
        avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
      },
      description: "open source code base",
      menuItems: [
        {
          label: "Example Link",
          menuPress: jest.fn(),
        },
      ],
      forkCount: 1,
      starCount: 100,
      watcherCount: 1000,
      url: "https://avatars.githubusercontent.com/u/9892522?v=4",
    };
  });

  it("renders", () => {
    render(<RepoCard {...props} />);
    expect(screen.getByText(/freecodecamp/i)).toBeInTheDocument();
    expect(screen.getByText(/open source code base/i)).toBeInTheDocument();
    expect(screen.getByTestId("freeCodeCamp-fork-count")).toHaveTextContent(1);
    expect(screen.getByTestId("freeCodeCamp-star-count")).toHaveTextContent(
      100
    );
    expect(screen.getByTestId("freeCodeCamp-watcher-count")).toHaveTextContent(
      1000
    );
  });

  it("show menu items", () => {
    render(<RepoCard {...props} />);
    const menuButton = screen.getByTestId("MoreVertIcon");
    fireEvent.click(menuButton);
    const menuLink = screen.getByText(/example link/i);
    expect(menuLink).toBeInTheDocument();
    fireEvent.click(menuLink);
    expect(props.menuItems[0].menuPress).toHaveBeenCalledTimes(1);
  });
});
