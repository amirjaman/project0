import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";

const Login = () => {
  const [profile, setProfile] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.get("http://localhost:3000/google");
      console.log(user);
      setProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-card">
        <span>Simple Living</span>
        <span>High Thinking</span>
        <span>Grow With</span>
        <span>Us...</span>
      </div>
      <form className="login-card">
        {/* Welcome message */}
        <h2 className="greeting">Welcome to Wealth Finovation</h2>

        <div className="login-form">
          <button className="google" onClick={handleLogin} >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/96/google-logo.png"
              alt="google-logo"
            />
            Continue with Google
          </button>
          <span className="or">or</span>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Email id"
              className="username"
            />
            <button type="submit" className="login">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
