import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './ManageUsers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState([]);

  useEffect(() => {
    // Fetch user data
    const fetchUsers = () => {
      setUsers([
        { id: 1, name: 'User 1', email: 'user1@example.com', role: 'Admin' },
        { id: 2, name: 'User 2', email: 'user2@example.com', role: 'User' },
        // Add more user data as needed
      ]);
    };
    fetchUsers();

    // Fetch login details from localStorage
    const fetchLoginDetails = () => {
      const details = JSON.parse(localStorage.getItem('loginDetails')) || [];
      setLoginDetails(details);
    };
    fetchLoginDetails();
  }, []);

  return (
    <div className="manage-users-container">
      <Sidebar />
      <div className="manage-users-content">
        <h1>Manage Users</h1>
        
        <div className="user-section">
          <h2>User List</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="login-details-section">
          
          <table className="login-details-table">
           
            <tbody>
              {loginDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.userId}</td>
                  <td>{detail.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
