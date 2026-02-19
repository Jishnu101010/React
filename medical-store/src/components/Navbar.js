import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(removeUser());
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-3">
      <h4 className="navbar-brand mb-0">💊 MediTrack</h4>

      <ul className="navbar-nav ms-auto">
        {!user && (
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Sign Up
            </NavLink>
          </li>
        )}

        {!user && (
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        )}

        {user && (
          <>
            <li className="nav-item">
              <NavLink to="/med-home" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/med-list" className="nav-link">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={logout}
              >
                Logout
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
