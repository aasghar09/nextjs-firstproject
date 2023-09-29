import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{ params }){
    const{userId} = params;

    try{
       console.log("Getting tasks of specific user");
       console.log("userIdd="+userId );
    const tasks = await Task.find({
        //schemaId:variableId
        userId:userId,
    });

    return NextResponse.json(tasks);
    } catch (error){
        return NextResponse.json({
            message : "Facing error in getting tasks for specified user",
            status : 400,
        });
    }

}