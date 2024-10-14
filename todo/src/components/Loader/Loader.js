import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div style={{display:'flex',height:'100vh', justifyContent:'center',alignItems:'center', width:'100%'}}>
          <div className="loader"></div>
          <span style={{marginLeft: '10px'}}>Loading...</span>
    </div>
  )
}

export default Loader;