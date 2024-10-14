import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiBaseUrl } from '../../index';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Signup() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
// submit handler
const submitHandler = async (e) => {
    e.preventDefault();
    const userObj = { email, username, password };
    try
    {
        const response = await axios.post(`${apiBaseUrl}/api/v1/user/signup`, userObj, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials : true
        });
        toast.success("User signed up successfully:", response.data);
        setEmail("");
        setUsername("");
        setPassword("");
        navigate('/login');
    }
    catch(error)
    {
        toast.error("Error signing up:", error.response ? error.response.data : error.message);
    }
}
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
                <form className='mt-4' onSubmit={submitHandler}>
                    <h2 className='pageHeading mb-4 mt-3'>Signup</h2>
                    <div className='form-group'>
                        <label className='label'>Email</label>
                        <input type='email' required value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>Username</label>
                        <input type='text' required value={username} onChange={e => setUsername(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>Password</label>
                        <input type='password' required value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Signup</button>
                    </div>
                    <div className='form-group'>
                    <p className='authChangeText'>Already have an account <NavLink to='/login'>Login</NavLink></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;