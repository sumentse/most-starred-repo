import { fireEvent, render, screen } from "@testing-library/react";
import CommitHistoryModal from "./";

describe("CommitHistoryModal", () => {
  let props;

  beforeEach(() => {
    props = {
      open: true,
      commits: [],
      closeModal: jest.fn(),
      isLoading: false,
    };
  });

  it("renders with no commit history", () => {
    render(<CommitHistoryModal {...props} />);
    expect(screen.getByText(/commits in last 24 hours/i)).toBeInTheDocument();
    expect(screen.getByText(/total commits: 0/i)).toBeInTheDocument();
  });

  it("renders no modal", () => {
    props.open = false;
    render(<CommitHistoryModal {...props} />);
    expect(
      screen.getByRole("presentation", { hidden: true })
    ).toBeInTheDocument();
  });

  it("click on close modal", () => {
    render(<CommitHistoryModal {...props} />);
    const closeButton = screen.getByTestId("CancelIcon");

    fireEvent.click(closeButton);
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });

  it("renders with commit history", () => {
    props.commits = [
      {
        commit: {
          author: {
            date: new Date(2021, 0, 1),
            name: "John",
          },
          message: "example commit",
          tree: {
            sha: "3209423094",
          },
        },
      },
    ];
    render(<CommitHistoryModal {...props} />);
    expect(screen.getByText("1/1/21 12:00 AM")).toBeInTheDocument();
    expect(screen.getByText(/john/i)).toBeInTheDocument();
    expect(screen.getByText(/example commit/i)).toBeInTheDocument();
  });

  it("renders with loading spinner", () => {
    props.isLoading = true;
    render(<CommitHistoryModal {...props} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
