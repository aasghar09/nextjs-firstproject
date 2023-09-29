import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

//connectDb();

export async function GET(request){

   /* const users =[
        {
            name: "Ali Asghar",
            email: "ali@mydomain.com",
            isadmin : 1
        },
        {
            name: "Ibrahim",
            email: "ibrahim@mydomain.com",
            isadmin : 0
        },
        {
            name: "Hussian",
            email: "ali@mydomain.com",
            isadmin : 0
        }
    ]*/
    let users = [];
    try{
        console.log("going to get user");
        users = await User.find();
        
    }catch(error){
        console.log("Error in getting users "+error);
        return NextResponse.json({
            message : "Error in getting users",
            success : false,
        });
    }

    return NextResponse.json(users);
    //return NextResponse.json(users,{status:200, statusText:"Users get succesfully"});
}

export async function POST(request){
    // fetch user from request
    const {userName,email,age,address,password,about} = await request.json();
    console.log({userName,email,age,address,password,about});
    //create user object with model
    const user = new User({
        userName,
        email,
        age,
        address,
        password,
        about,
    });

    try{
        //since the method is async, so in order to make below method synchronize, we are using await
        user.password = bcrypt.hashSync(
            user.password
            ,parseInt(process.env.BCRYPT_SALT));
            
        const createdUser = await user.save();

        const response = NextResponse.json(user,{
            message : "User with email "+createdUser.email+" created successfully",
            status:201,
        });
        return response;
    }catch(error){
        console.log("Error has occured during user creation..."+error);
        return NextResponse.json({
            message : "Failed to cerate user",
            status: 500,
        })
    }

    
}

export function DELETE(request){
    console.log("Implement delete service here...");
}

export function PUT(request){
    console.log("Implement put service here...");
}