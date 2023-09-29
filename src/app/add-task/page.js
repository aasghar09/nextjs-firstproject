"use client";

import { addTask } from "@/services/taskService";
import Image from "next/image";
import { useContext, useState } from "react";
import {toast} from "react-toastify";
import UserContext from "../context/userContext";

export default function AddTask(){
    const [task,setTask]=useState({
        title : "",
        content : "",
        status :"N",
        userId :"",
        // 64f3240a05b068e0c37f6c6a

    });

    const user = useContext(UserContext);

    const fireSubmitHandle = async (event)=>{
        event.preventDefault();
        console.log(task);

        //validate the data here

        try{
          const result = await addTask(task);
          console.log(result);
          toast.success("Your task has been added succesfully",{
            position : "top-center",
        });

        setTask({
            title : "",
            content : "",
            status :"P",
            userId :"",
        })
        }catch(error){
            console.log(error);
            toast.error("some error while adding your task "+error,{
                position : "top-center",
            });
        }

    };
    return(
        <div className="bg-blue-200 grid grid-cols-12"> 
            <div className="justify-center col-span-6 col-start-5 ">
                    <Image src="todo-form-add.svg"  width={200} height={100} alt="Add Todo's"></Image>
            </div>
            <div className="col-span-6 col-start-1 border-l-pink-800 px-3">
                Add Task component goes here...
                <form action="#!" onSubmit={fireSubmitHandle}>
                    <div>
                        <label htmlFor="task_title" className="block text-blue-400 text-sm font-medium mb-1">
                            Title
                        </label>
                        <input type="text" id="task_title" name="task_title"
                        className="focus:ring-blue-500 focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300" 
                        onChange={(event)=> {
                            setTask({...task,title : event.target.value});
                            }
                        } value={task.title}/>
                        
                    </div>
                    <div>
                        <label htmlFor="task_content" className="block text-blue-400 text-sm font-medium mb-1">
                            Content
                        </label>
                        <textarea type="text" rows="{5}" id="task_content" name="task_content"
                        className="px-5 w-full rounded-full bg-blue-300" 
                        onChange={(event)=> {
                            setTask({...task,content : event.target.value});
                            }
                        } value={task.content}/>
                        
                    </div>
                    <div>
                        <label htmlFor="task_status" className="block text-blue-400 text-sm font-medium mb-1">
                            Status
                        </label>
                        <select  name="task_status" id="task_status" className="hover:bg-blue-950 px-2 w-full rounded-full bg-blue-300"
                        onChange={(event)=> {
                            setTask({...task,status : event.target.value});
                            }
                        } value={task.status}
                        >
                            <option value="N" disabled>---Select---</option>
                            <option value="P">Pending</option>
                            <option value="C">Completed</option>
                        </select>
                    </div>
                    <div className="mb-2 flex mt-4">
                        <button type="submit" className="px-2 py-2 mr-1 ml-1 
                            rounded-lg bg-blue-600 hover:bg-blue-950">  
                            Add Todo's
                        </button>
                        <button className="px-2 py-2 rounded-lg bg-slate-600 hover:to-blue-950">  
                            Cancel
                        </button>
                        {/*JSON.stringify(task)*/}
                    </div>
                </form>
            </div>
            
                    
            
                

        </div>
    );
}