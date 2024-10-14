import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { apiBaseUrl } from '../../index';
import toast from 'react-hot-toast';
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // submit handler
    const submitHandler = async (e) => {
        e.preventDefault();
        const userObj = { email, password };
        try
        {
            const response = await axios.post(`${apiBaseUrl}/api/v1/user/login`, userObj, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials : true
            });
            toast.success("User Loged In successfully:", response.data);
            setEmail("");
            setPassword("");
            location.reload();
        }
        catch(error)
        {
            toast.error("Error Login :", error.response ? error.response.data : error.message);
        }
    }
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
                <form className='mt-4' onSubmit={submitHandler}>
                    <h2 className='pageHeading mb-4 mt-3'>Login</h2>
                    <div className='form-group'>
                        <label className='label'>Email</label>
                        <input type='email' required value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>Password</label>
                        <input type='password' required value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                    <div className='form-group'>
                        <p className='authChangeText'>Create new account? <NavLink to='/signup'>Signup</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;