import React, { useState } from 'react';
import './index.css';

function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [registrationID, setRegistrationID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [counter, setCounter] = useState(0); // Set counter as a number
  const [buttonColor, setButtonColor] = useState(''); // New state for button color
  const colorarray = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan', 'magenta',
    'lime', 'teal', 'indigo', 'violet', 'gold', 'silver', 'gray', 'peach'
  ];
   

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
    backgroundColor: buttonColor, // Set the background color dynamically
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

  function userclick() {
    setCounter(counter + 1);
    // Randomly select a color from the colorarray and update button color
    const randomColor = colorarray[Math.floor(Math.random() * colorarray.length)];
    setButtonColor(randomColor);
  }

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

          <button style={buttonStyle} type="button" onClick={userclick}>
            Submit
          </button>
        </form>
      </div>

      {/* Clickme Button */}
      <button className="btn-btn-success" onClick={userclick}>
        Clickme
      </button>

      {/* Show counter value */}
      <div style={outputStyle}>
        <p>
          <strong>Click Counter:</strong> {counter}
        </p>
      </div>

      {/* Output Form Data */}
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
