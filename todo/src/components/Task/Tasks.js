import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {apiBaseUrl} from '../../index.js';
import moment from 'moment';
import CompLoader from '../Loader/CompLoader.js';
import toast from 'react-hot-toast';

function Tasks() {
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch data handler
    const fetchTasksHandler = async () => {
        try
        {
            const { data } = await axios.get(`${apiBaseUrl}/api/v1/task/fetch`,{
                withCredentials : true,
            });
            const { tasks } = data;
            setFetchData(tasks);
        }
        catch(error)
        {
            console.log(`Error : ${error.response?.data || error.message}`);
        }
        finally
        {
            setLoading(false);
        }
    }

    // delete handler
    const deleteHandler = async (id) => {
        try
        {
            const response = await axios.delete(`${apiBaseUrl}/api/v1/task/delete/${id}`,{
                withCredentials : true
            });
            toast.success(`Task Deleted Successfully`);
            fetchTasksHandler();
        }
        catch(error)
        {
            toast.error(`Error : ${error.response?.data || error.message}`);
        }
    }

    useEffect(() => {
        fetchTasksHandler();
    },[]);

    // map fetched data
    let mappedData;
    if(fetchData.length > 0)
    {
        mappedData = fetchData.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{moment(task.createdAt).format('MM/DD/YYYY')}</td>
                            <td><button className='btn redBtn' onClick={() => deleteHandler(task._id)}>Delete</button></td>
                            <td><NavLink className='btn' to={`updatetask/${task._id}`}>Edit</NavLink></td>
                        </tr>
                    ))
    }
    else
    {
        mappedData = (
            <tr>
                <td colSpan={6} className='text-center' style={{border:'1px solid #c1c1c1', marginTop:'10px'}}>No Task Added Yet!</td>
            </tr>
        )
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h2 className='pageHeading mb-4 mt-3'>All Tasks</h2>
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <th>T:no</th>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Created At</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            loading
                            ?
                            <tr>
                                <td colSpan={6} className='text-center' style={{border:'1px solid #c1c1c1', marginTop:'10px'}}>{<CompLoader/>}</td>
                            </tr>
                            :
                            mappedData
                        }
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default Tasks;