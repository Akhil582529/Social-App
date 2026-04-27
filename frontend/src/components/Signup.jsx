import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <div>
          <input 
            type="text" 
            placeholder="Enter your Name" 
            name="name"
          />
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Enter your Email" 
            name="email"
          />
        </div>

        <div>
          <input 
            type="password" 
            placeholder="Enter your Password" 
            name="password"
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;