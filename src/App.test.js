import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe('App', ()=>{
  test("renders git repo page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByTestId("git-repos")).toBeInTheDocument();
    });
  
  });
  test("renders page not found", async () => {
    render(
      <MemoryRouter initialEntries={["/non-existing-page"]}>
        <App />
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByText(/Could not find page/)).toBeInTheDocument();
    });
  
  });

})

