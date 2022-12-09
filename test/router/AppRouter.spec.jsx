import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";

describe("AppRouter spec", () => {
  it("Should show login page when not authenticated", () => {
    const context = {
      state: {
        logged: false,
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  it("Should show marvel page when authenticated", () => {
    const context = {
      state: {
        logged: true,
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByLabelText("marvel-page")).toBeTruthy();
  });
});
