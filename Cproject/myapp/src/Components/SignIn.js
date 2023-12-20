// SignIn.jsx
import React from 'react';
import '../Asserts/Cssfiles/SignIn.css'; // Import your CSS file

function SignIn({ onClose }) {
  const handleSignIn = () => {
    // Add your sign-in logic here
    // You can submit the form or handle the authentication process
    // For simplicity, we'll just close the popup in this example
    onClose();
  };

  return (
    <div className="signInPopup">
      <div className="formR">
        <p className="title">Sign In</p>
        <input type="email" id="email" placeholder="Enter Your Email" className="input" required />
        <label htmlFor="username"></label>
        <input type="text" id="username" placeholder="Enter Name" className="input" required />
        <label htmlFor="password"></label>
        <input type="password" id="password" placeholder="Create a password" className="input" required />
        <label htmlFor="confirm-password"></label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Re Enter The Password"
          className="input"
          required
        />
        <button type="submit" className="btnR" onClick={handleSignIn}>
          Sign In
        </button>
        <button type="button" className="closeBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignIn;
