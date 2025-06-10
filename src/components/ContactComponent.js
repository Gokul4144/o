// src/components/ContactComponent.js
import React, { useState, useEffect } from 'react';
import '../style.css';

function ContactComponent() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log("Contact form loaded");
  }, []);

  useEffect(() => {
    if (response !== '') {
      alert("Your message was sent.");
    }
  }, [response]);

  const handleSend = () => {
    if (message.trim()) {
      setResponse("Message sent!");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <textarea
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={handleSend}>Send</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default ContactComponent;
