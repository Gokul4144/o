// src/App.js
import React from 'react';
import AccountComponent from './components/AccountComponent';
import ContactComponent from './components/ContactComponent';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>My Assignment-3 React App</h1>
      <AccountComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
