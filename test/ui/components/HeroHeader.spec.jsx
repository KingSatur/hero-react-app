import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { AppRouter } from "../../../src/router";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("HeroHeader tests", () => {
  it("Should show name ", () => {
    const context = {
      state: {
        logged: true,
        user: {
          name: "Lio matsi",
        },
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Lio matsi"));
  });

  it("Should logout", () => {
    const logout = jest.fn();
    const context = {
      state: {
        logged: true,
        user: {
          name: "Lio matsi",
        },
      },
      logout,
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const btn = screen.getByLabelText("logout-btn");

    fireEvent.click(btn);

    expect(logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login");
  });
});
