import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import './login.css';
import img1 from '../Image/login_img1.jpg'

const Login=()=> {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const login = async () => {
    if (name === "" || pwd === "") {
      setError("Please fill all fields");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        name: name,  // Ensure this matches your DB
        password: pwd // Ensure this matches your DB
      });
  
      setError(response.data.message);
      if (response.status === 200) {
        navigate('/'); // Successful login, navigate to home
      }
    } catch (err) {
      setError('Error: ' + (err.response?.data?.error || err.message));
    }
  };
  
  return (
    <div className="main">
      <div className="submain">
        <div>
          <div className='img'>
            <div className='container.img'>
            <img src={img1} className='profile'></img>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
          </div>
          <div className='first-input'>
          <input type="text" id="user" className='name'name="username" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
          </div>
          <div className='second-input'>
          <input type="password" id="pwd" className='name'name="password" value={pwd} placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
         </div>
         <div className='login-button'>
         <p id="show">{error}</p>
         <button type="button" className="log" onClick={login} id="sub">Login</button>
           <p className='link'>
        <a href='#'>Forget Password</a> or <a href='#'>Sign Up</a>
      </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;