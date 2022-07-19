import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "./Modal";
import Header from "../Header/Header";
import renderWithRedux from "../../helpers/test/renderWithRedux";

describe("Modal component", () => {
  it("should open a modal window", async () => {
    const { getByText } = renderWithRedux(<Header />, {
      initialState: { tickers: [] },
    });

    fireEvent.click(getByText(/Add ticker/i));

    await waitFor(() =>
      expect(getByText(/Enter ticker name/i)).toBeInTheDocument(),
    );
  });

  it("should render the component onto the screen", () => {
    render(<Modal open />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByTestId("save-ticker")).toBeInTheDocument();
  });

  it('should disable the "Save ticker" button on initialization', () => {
    render(<Modal open />);

    expect(screen.getByTestId("save-ticker")).toBeDisabled();
  });

  it('should enable the "Save ticker" button when an input is entered', () => {
    render(<Modal open />);

    expect(screen.getByTestId("save-ticker")).toBeDisabled();

    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: "TEST" } });

    expect(screen.getByTestId("save-ticker")).toBeEnabled();
  });

  it("should get user input", () => {
    render(<Modal open />);
    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: "TEST" } });
    expect(screen.getByDisplayValue(/TEST/i)).toBeInTheDocument();
  });
});
