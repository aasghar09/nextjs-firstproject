import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function  GET(request,{ params }){

    const { userId } = params;
    console.log("params"+userId);
    const user = await User.findById(userId);
   
    return NextResponse.json(user);

} 
export async function DELETE(request,{ params }){
    const {userId} = params;
    
    
    try{
        //console.log("params "+{params.id}));
        console.log("params"+new URL(request.url));
        console.log("going for the deletion");
        //console.log("id is ="+userId.get("id"));
        await User.deleteOne({
            _id : userId,
        });
        return NextResponse.json({
            message : "Record deleted successfully",
            success : true,
        })
    }catch(error){
        console.log("Error in deletion"+error);
        return NextResponse.json({
            message : "Failure in deletion",
            success : false,
        });
    }
}

export async function PUT(request,{params}){
    const {userId} = params;

    const{age,address,password} = await request.json();

    try{
        let user = await User.findById(userId);
        user.age = age;
        user.address = address;
        user.password = password;

        const updateUser = await user.save();
        return NextResponse.json(updateUser);

    }catch(error){
        return NextResponse.json({
            message: "failed to update user",
            success : failed
        });
    }

}