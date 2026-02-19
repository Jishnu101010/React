import { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function attemptLogin() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const user = { email };
    dispatch(setUser(user));
    navigate("/med-home");
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3>Login</h3>

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary" onClick={attemptLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
