import { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function registerUser() {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    alert("Registered successfully!");
    navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3>Register</h3>

        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-success" onClick={registerUser}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
