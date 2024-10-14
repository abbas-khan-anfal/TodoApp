import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h2 className='mt-3'>404 Page Not Found!</h2>
                <p>We Obsereved You!</p>
                <button className='btn' onClick={e => goBack(e)}>Go Back</button>
            </div>
        </div>
    </div>
  )
}

export default NotFound;