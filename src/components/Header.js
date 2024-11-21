import React, { useState } from 'react';
import axios from 'axios';
import './Header.css';

function Header() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // In Header.js, update the port to match your server
await axios.post('http://localhost:5000/api/send-email', { email });  // or 5001, whichever your server is using
      setMessage('🎉 Successfully subscribed! Check your email.');
      setEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setMessage('😕 Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Stay Updated</h1>
        <p className="header-subtitle">
          Subscribe to our newsletter for the latest updates and exclusive content
        </p>
        
        <div className="subscription-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? (
                  <span>Subscribing...</span>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>
            
            {message && (
              <div className={`message ${
                message.includes('Successfully') 
                  ? 'success-message' 
                  : 'error-message'
              }`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;