import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; // Import axios
import './signup.css';
import img1 from '../Image/login_img1.jpg'
const Signup=()=> {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signup = async () => {
    if (name === "" || mail === "" || pwd === "" || cpwd === "") {
      setError("Please fill all fields");
      return;
    }
    if (pwd !== cpwd) {
      setError("Passwords should be the same");
      return;
    }

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email: mail,
        password: pwd
      });

      setError(response.data.message);
      if (response.status === 201) {
        // Navigate to the login page on successful registration
        navigate('/login'); // Change '/login' to your actual login route
      }
    } catch (err) {
      setError('Error: ' + (err.response?.data?.error || err.message));
    }

  };
  return (
    <div className="signup">
      <div className="sub-main">
        <div>
          <div className='img'>
            <div className='container.img'>
            <img src={img1} className='profile'></img>
            </div>
          </div>
          <form>
          <div>
            <h1>Sign Up</h1>
          </div><div className='fir-input'>
          <input type="text" id="user" className='name'name="username" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" /></div>
          <div className='sec-input'>
          <input type="email" id="email" className='name'name="email" value={mail} placeholder="Email" onChange={(e) => setMail(e.target.value)} />
         </div>
         <div className='third-input'>
         <input type="password" id="pwd" className='name'name="password" value={pwd} placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
         </div>
         <div className='fourth-input'>
         <input type="password" id="cpwd" className="name" name="cpassword" value={cpwd} placeholder="Confirm Password" onChange={(e) => setCpwd(e.target.value)} />
         </div>
         <div className='btn1'>
         <p id="show">{error}</p>
         <button type="button" className="log" onClick={signup} id="sub">Sign Up</button>
           </div>
           </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;