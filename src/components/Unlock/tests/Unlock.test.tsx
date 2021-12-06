import { renderWithRouter, routeNames } from "testUtils";

describe("Unlock Component", () => {
  it("displays unlock links", () => {
    const screen = renderWithRouter({ route: routeNames.unlock });

    const ledgerLink = screen.getByTestId("ledgerLink");
    expect(ledgerLink).toBeDefined();

    const walletLink = screen.getByTestId("walletLink");
    expect(walletLink).toBeDefined();

    const walletConnectLink = screen.getByTestId("walletConnectLink");
    expect(walletConnectLink).toBeDefined();
  });
});
