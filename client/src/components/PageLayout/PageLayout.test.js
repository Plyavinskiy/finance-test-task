import PageLayout from "./PageLayout";
import renderWithRedux from "../../helpers/test/renderWithRedux";

describe("PageLayout component", () => {
  it("should render PageLayout component", () => {
    const { getByTestId } = renderWithRedux(<PageLayout />, {
      initialState: { tickers: [] },
    });

    const pageLayout = getByTestId("page-layout");
    expect(pageLayout).toBeInTheDocument();
  });
});
