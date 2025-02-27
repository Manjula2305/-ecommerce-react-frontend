import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // ✅ Import the CSS file

const LoginPage = ({ updateLoginStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/categories');  // Redirect if already logged in
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Manju" && password === "Welcome") {
      localStorage.setItem("token", "dummy_token");
      setSuccess(true);
      setError(''); // Clear any previous error
      updateLoginStatus(true); // Update login status in App.js

      setTimeout(() => {
        navigate('/categories');
      }, 1500);
    } else {
      setError("Invalid username or password!");
      setSuccess(false); // Ensure success is false on error
      updateLoginStatus(false); // Update login status in App.js
    }
  };

  return (
      <div className="login-background">
    <div className="login-container">
     {/*Background Image*/}
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Login Successful! Redirecting...</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>  {/*Change Button Text Login */}
      </form>
    </div>
    </div>
  );
};

export default LoginPage;