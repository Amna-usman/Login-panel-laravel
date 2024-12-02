import React, { useState } from 'react';
import './index.css';

function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [registrationID, setRegistrationID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const outputStyle = {
    marginTop: '30px',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>User Login Panel</h1>

      <div style={formStyle}>
        <form>
          <label style={labelStyle}>First Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="Firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label style={labelStyle}>Last Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="Lastname"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label style={labelStyle}>Registration ID:</label>
          <input
            style={inputStyle}
            type="text"
            name="Registration-ID"
            onChange={(e) => setRegistrationID(e.target.value)}
          />

          <label style={labelStyle}>Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label style={labelStyle}>Confirm Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="Confirm-Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button style={buttonStyle} type="button">
            Submit
          </button>
        </form>
      </div>

      {/* Output */}
      <div style={outputStyle}>
        <p>
          <strong>Firstname:</strong> {firstname}
        </p>
        <p>
          <strong>Lastname:</strong> {lastname}
        </p>
        <p>
          <strong>Registration ID:</strong> {registrationID}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
        <p>
          <strong>Confirm Password:</strong> {confirmpassword}
        </p>
      </div>
    </div>
  );
}

export default App;
