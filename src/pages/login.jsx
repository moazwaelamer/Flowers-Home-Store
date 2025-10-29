import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../script";
import  { useEffect } from "react";
 useEffect(() => {
document.title = "Flowers Home"} , [document.body])
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(username, password); 

    if (result.success) {
      navigate("/"); 
    } else {
      console.log("Invalid username or password"); 
    }
  };
 

  return (
    <div>
      
      
      <main>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Don’t have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </main>
      
    </div>
  );
};
export default Login;

