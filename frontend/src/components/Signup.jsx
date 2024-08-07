import React, { useState } from 'react';
import backgroundImage from './background.jpg'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 
  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Admin:', isAdmin ? 'Yes' : 'No');
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Signup</h2>
        <form>
          <label style={styles.label}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
            />
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </label>
          <label style={styles.label}>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              placeholder="Confirm your password"
            />
          </label>
          <button type="button" onClick={handleSignup} style={styles.button}>
            Signup
          </button>
          <button type="button" onClick={toggleAdmin} style={styles.adminButton}>
            {isAdmin ? 'Disable Admin' : 'Admin'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("https://websta.me/wp-content/uploads/2020/07/eCommerce.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
    fontSize: '16px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    background: '#007BFF',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    marginTop: '15px',
    width: '100%',
    transition: 'background 0.3s ease',
  },
  adminButton: {
    background: '#28a745', // Different color for the admin button
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    marginTop: '10px',
    width: '100%',
    transition: 'background 0.3s ease',
  },
};

export default Signup;
