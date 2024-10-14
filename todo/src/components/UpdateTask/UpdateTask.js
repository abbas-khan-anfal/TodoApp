import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { apiBaseUrl } from '../../index';
import toast from 'react-hot-toast';

function UpdateTask() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    // get update task data
    const getUpdateTaskHandler = async () => {
        try
        {
            const { data } = await axios.get(`${apiBaseUrl}/api/v1/task/getupdtask/${id}`);
            const { task } = data;
            setTitle(task.title);
            setDescription(task.description);
        }
        catch(error)
        {
            console.log(`Error : ${error.response?.data || error.message}`);
        }
    }

    // submit handler
    const submitHandler = async (e) => {
        e.preventDefault();
        const updatedObj = {id, title, description};
        try
        {
            const response = await axios.put(`${apiBaseUrl}/api/v1/task/update`,updatedObj,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials : true
            });
            toast.success("Task Updated Successfully");
        }
        catch(error)
        {
            toast.error(`Error : ${error.response?.data || error.message}`);
        }
    }

    useEffect(() => {
        getUpdateTaskHandler();
    },[])
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
                <form className='mt-4' onSubmit={submitHandler}>
                    <button className='btn' onClick={e => goBack(e)}>{"< Back"}</button>
                    <h2 className='pageHeading mb-4 mt-3'>Update Task</h2>
                    <div className='form-group'>
                        <label className='label'>Task Title</label>
                        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>Task Description</label>
                        <textarea className='form-control' required value={description} onChange={(e) => setDescription(e.target.value)} rows={4}></textarea>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Update Task</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateTask;