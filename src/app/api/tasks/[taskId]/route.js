import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function  GET(request,{ params }){

    const { taskId } = params;
    console.log("params taskId is "+taskId);
    const task = await Task.findById(taskId);
   
    return NextResponse.json(task);

} 
export async function DELETE(request,{ params }){
    const {taskId} = params;
    
    
    try{
        //console.log("params "+{params.id}));
        //console.log("params"+new URL(request.url));
        console.log("taskId is"+taskId);
        console.log("going for the deletion");
        //console.log("id is ="+userId.get("id"));
        const result = await Task.deleteOne({
            _id : taskId,
        });
        return NextResponse.json({
            message : "Task deleted successfully",
            success : true,
        });
    }catch(error){
        console.log("Error in task deletion"+error);
        return NextResponse.json({
            message : "Failure in task deletion",
            success : false,
        });
    }
}