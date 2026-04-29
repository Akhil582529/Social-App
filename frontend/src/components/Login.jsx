import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData)
      console.log("Login form Submitted");
    } catch (error) {
      console.log("Error while logging in", error);
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Enter your Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input 
            type="password" 
            placeholder="Enter your Password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;