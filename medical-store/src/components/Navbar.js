import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Medical Store</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
