// LogIn.jsx
import React from 'react';
import '../Asserts/Cssfiles/Login.css';

const Login = ({ onClose }) => {
  return (
    <div className='LogInPopup' id='LogInPopup'>
      <div className="form">
        <p className="title">Log In</p>
        
        <input type="text" id="username" placeholder="Enter Username" className="input" required />
        <input type="password" id="password" placeholder="Enter Your Password" className="input" required />
        <button type="submit" className="btn" onClick={onClose}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
