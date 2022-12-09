import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  const navigate = useNavigate();

  const { login, state, logout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {state?.user?.name}
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""} `;
            }}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""} `;
            }}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""} `;
            }}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <button
            aria-label="logout-btn"
            className="btn btn-primary"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
