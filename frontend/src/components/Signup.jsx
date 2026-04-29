import React, { useState } from 'react';
import axios from 'axios'

import './Signup.css';

const Signup = () => {
  
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
 });

 const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
 };

 const handleSubmit = async (e) =>{
  e.preventDefault();
  try {

    const response = await axios.post('http://localhost:3000/api/signup', formData);
    console.log('Sign-up form Submitted');
    console.log(response.data);
    
  } catch (error) {
    console.error('Error submitting form:', error);
  }
 }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Enter your Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;