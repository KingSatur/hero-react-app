import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login, state } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const onLogin = () => {
    login("leo matsi");
    navigate(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
