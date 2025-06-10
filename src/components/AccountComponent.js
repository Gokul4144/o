// src/components/AccountComponent.js
import React, { useState, useEffect } from 'react';
import '../style.css';

function AccountComponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    console.log("Account Component Mounted");
    return () => {
      console.log("Account Component Unmounted");
    };
  }, []);

  useEffect(() => {
    if (saved) {
      alert("Account information saved!");
    }
  }, [saved]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Save Account</button>
      </form>
    </div>
  );
}

export default AccountComponent;
