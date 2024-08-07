import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter username and password');
    }
  };

  const handleAdminClick = () => {
    setIsAdmin(!isAdmin);
    if (!isAdmin) {
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } else {
      alert('Admin mode is disabled.');
    }
  };

  const handleSignup = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          <button onClick={handleSignup} style={styles.signupButton}>
            Signup
          </button>
        </div>
        <button onClick={handleAdminClick} style={styles.adminButton}>
          {isAdmin ? 'Disable Admin' : 'Admin'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://websta.me/wp-content/uploads/2020/07/eCommerce.png")', // Update with the correct path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Increased opacity for better contrast
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    background: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
  signupButton: {
    background: '#17a2b8',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
  adminButton: {
    marginTop: '10px',
    background: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
};

export default Login;
