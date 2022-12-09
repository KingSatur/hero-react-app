import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router";

describe("PrivateRouter tests", () => {
  it("Should show children if authenticated", () => {
    Storage.prototype.setItem = jest.fn();

    const context = {
      state: {
        logged: true,
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route path="login" element={<h1>Login page</h1>}></Route>
            <Route
              path="marvel"
              element={
                <PrivateRoute>
                  <h1>Title private route</h1>
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
    expect(screen.getByText("Title private route")).toBeTruthy();
  });
});
