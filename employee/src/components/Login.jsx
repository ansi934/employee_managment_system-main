/*// Login.jsx
import { useState } from 'react';

function Login({ setRole, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const users = [
      { username: 'admin@example.com', password: 'admin123', role: 'admin' },
      { username: 'employee@example.com', password: 'emp123', role: 'employee' },
      { username: 'emp1@example.com', password: 'emp1123', role: 'employee' },
      { username: 'emp2@example.com', password: 'emp2123', role: 'employee' }
    ];

    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (foundUser) {
      setRole(foundUser.role);
      setUser(foundUser.username);
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Employee Management System</h1>
        <p>Login to continue</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="inputField"
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="inputField"
        /><br />

        <button onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;*/
// src/components/Login.jsx
import { useState } from "react";
import axios from "axios";

function Login({ setRole, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/api/employees/login`, {
        email: username,
        password: password,
      });
      setRole(res.data.role);
      setUser(res.data.username || username);
    } catch (err) {
      const msg = err.response?.data?.error || err.response?.data?.message || "Login failed";
      setError(msg);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Employee Management System</h1>
        <p>Login to continue</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inputField"
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
        <br />

        <button onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;

