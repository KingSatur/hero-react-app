import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initState = () => {
  // @ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, initState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "123123",
        name,
      },
    };
    localStorage.setItem("user", JSON.stringify(action?.payload));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
      payload: {},
    };
    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login, state, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
