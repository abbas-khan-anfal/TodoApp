import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {apiBaseUrl} from '../../index.js';

function AddTask() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const taskObj = {title, description};
        try
        {
            const response = await axios.post(`${apiBaseUrl}/api/v1/task/add`, taskObj ,{
                headers : {
                    'Content-Type': 'application/json',
                },
                withCredentials : true
            });
            toast.success("Task Addedd Successfully");
            setTitle("");
            setDescription("");

        }
        catch(error)
        {
            toast.error(`Error: ${error.response?.data || error.message}`);
            // ?. optional chaining prevent error when undefined occure
        }
    }


    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8 col-sm-12'>
                    <form className='mt-4' onSubmit={submitHandler}>
                        <button className='btn' onClick={e => goBack(e)}>{"< Back"}</button>
                        <h2 className='pageHeading mb-4 mt-3'>Add Task</h2>
                        <div className='form-group'>
                            <label className='label'>Task Title</label>
                            <input type='text' required value={title} onChange={e => setTitle(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label className='label'>Task Description</label>
                            <textarea className='form-control' required value={description} onChange={e => setDescription(e.target.value)} rows={4}></textarea>
                        </div>
                        <div className='form-group'>
                            <button className='btn' type='submit'>Save Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
