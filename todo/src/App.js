import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Task/Tasks';
import UpdateTask from './components/UpdateTask/UpdateTask';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from './index.js';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader.js';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

// check auth state
const authStateChange = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/api/v1/user/in`,{
      withCredentials : true
    });
    setUser(true);
    // console.log(data.message)
  } catch (error) {
    // console.log("Login First :", error.message);
    setUser(false);
  }
  finally
  {
    setLoading(false);
  }
};




  useEffect(() => {
    authStateChange();
  },[])

  if(loading)
  {
    return (
      <Loader/>
    )
  }


  return (
    <Router>
      <Toaster /> {/* Place Toaster outside of Routes */}
      <Routes>
        {
          user
          ?
          (
            <>
              <Route path='/' element={
              <>
                <Navbar/>
                <Tasks />
                <Footer/>
              </>
            } />

            <Route path='/addtask' element={
              <>
                <Navbar/>
                <AddTask />
                <Footer/>
              </>
            } />
            <Route path='/updatetask/:id' element={
              <>
                <Navbar/>
                <UpdateTask />
                <Footer/>
              </>
            } />
            <Route path='*' element={<Navigate to='/' />} />
            </>
            
          )
          :
          (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<Navigate to='/login' />} />
            </>
          )
        }
      </Routes>
    </Router>
  )
}

export default App;