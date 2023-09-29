"use client";
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext';
import { deleteTaskService, getUserTasks } from '@/services/userService';
import Task from './task';
import { toast } from 'react-toastify';


const ShowTasks = () => {
  
    const[tasks,setTasks] = useState([]);
    const context = useContext(UserContext);

    async function loadTasks(userId){
            try{
                console.log("showtask user id ="+userId);
            const returnedTasks= await getUserTasks(userId);
            setTasks([...returnedTasks]);
        }catch(error){
            console.log("error while loading task in client "+error);
        }
    }

    useEffect(() => {
    if(context.user){
        console.log("showtask user object is ="+context.user);
        loadTasks(context.user._id);
    }
  },[context.user]); //fires whenever user changes

  async function deleteTaskParent(taskId){
    try{
        const result = await deleteTaskService(taskId);
        let revisedMap =[];
        tasks.map((task) => {
                if(task._id != taskId){
                    revisedMap.push(task);
                }
            });
            setTasks(revisedMap);
        toast.success("Task deleted succesfully");

    }catch(error){
        console.log(error);
        toast.error("Error in client while deleting task");
    }
  }
    return (
    <div className="container grid ">
        <div>
            <h1 className="col-span-6 col-start-4 text-3xl text-center" >Tasks found ({tasks.length})</h1>
            {
                tasks.map((task) =>(
                    <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent} />
                ))
            }
        </div>    
    </div>
  );

}
export default ShowTasks;