
import React, { useState } from "react";
// import "C:\\Users\\HP\\Desktop\\KMIT\\Sem\\react\\safestreet2\\src\\App.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // Validate if passwords match
    if (e.target.value !== password) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      alert("Registration Successful!");
      // Proceed with further logic (e.g., API call to register user)
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name: </label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email: </label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <p className="fplink">Already have an account? <Link to="/login">Login</Link></p>

          {error && <p className="error-message">{error}</p>}

          <button onClick={()=>navigate("/home")} type="submit" className="btn" disabled={error !== ""}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
