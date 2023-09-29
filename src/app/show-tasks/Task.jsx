
import React from 'react';
import { ImCross } from "react-icons/im";

const Task = ({task,deleteTaskParent}) => {
  async function deleteTask(taskId){
   //const result =  deleteTask();
   deleteTaskParent(taskId);
  }removeEventListener
  return (
    <div >
        <div>
            <h1>{task.title}</h1>
            <h1>{task.content}</h1>
            <h1>{task.status=="P"?"Pending":"Completed"}</h1>
        </div>
        <div className='flex justify-center'>
          <span onClick={()=> {
            deleteTask(task._id)
          }}> <ImCross/></span>
          
        </div>
    </div>
  )
}

export default Task;