import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;