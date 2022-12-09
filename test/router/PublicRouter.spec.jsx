import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { LoginPage } from "../../src/auth/page/LoginPage";
import { PublicRoutes } from "../../src/router";

describe("PublicRouter tests", () => {
  it("Should show children if not authenticated", () => {
    const context = {
      state: {
        logged: false,
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <PublicRoutes>
          <h1>Title public route</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Title public route")).toBeTruthy();
  });

  it("Should not show children if authenticated", () => {
    const context = {
      state: {
        logged: true,
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="search" element={<h1>Search page</h1>} />
            <Route
              path="login"
              element={
                <PublicRoutes>
                  <h1>Title public route</h1>
                </PublicRoutes>
              }
            ></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Search page")).toBeTruthy();
  });
});
