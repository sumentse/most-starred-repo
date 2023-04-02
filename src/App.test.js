import { render, screen, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test.skip("renders git repo page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(
      () => {
        expect(screen.getByTestId("git-repos")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
  test("renders page not found", async () => {
    render(
      <MemoryRouter initialEntries={["/non-existing-page"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Could not find page/i)).toBeInTheDocument();
  });
});
