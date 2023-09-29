import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request){

     let tasks = [];
     try{
         console.log("going to get user");
         tasks = await Task.find(); 
         
     }catch(error){
         console.log("Error in getting users "+error);
         return NextResponse.json({
             message : "Error in getting users",
             success : false,
         });
     }
 
     return NextResponse.json(tasks);
     //return NextResponse.json(users,{status:200, statusText:"Users get succesfully"});
 }


 export async function POST(request){
    const {title,content,status,userId} = await request.json();

    const token = request.cookies.get("authtoken")?.value;
    const result = jwt.verify(token,process.env.JWT_KEY);

    const task  = new Task({
        title,
        content,
        status,
        userId : result._id,

    });

    
    try{
        console.log ("Going for creation of task..");
        const createdtask = await task.save();

        return NextResponse.json(createdtask,{
            status : 201,
        })
    }catch(error){
        console.log ("Failure while creating task"+error);
        return NextResponse.json({
            message : "Failure while creating task",
            success : false, 
        })
    }
 }