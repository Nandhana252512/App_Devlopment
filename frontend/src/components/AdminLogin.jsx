import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Add styles as needed

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'ss@gmail.com' && password === 'sss') {
      localStorage.setItem('admin', JSON.stringify({ username, password }));
      navigate('/admin/dashboard'); // Redirect to admin dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
