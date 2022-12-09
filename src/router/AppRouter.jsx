import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroRoutes } from "../hero";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage />}></Route>
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
