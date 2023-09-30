import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
import { connectDb } from "@/helper/db";


export async function POST(request)
{
    await connectDb();    
     
    const{email,password}=await request.json();
    const oneHour =  60 * 60 * 1000;
     try{
        console.log("email "+email);
        console.log("password "+password);
        const loggedInUser = await User.findOne({
            email : email,
        });
        console.log("inside try2");
        if(loggedInUser == null){
            throw new Error("Error in fetching user");
            /*return NextResponse.json({
                message : "Error in fetching user",
                success : false,
            });*/
        }

        const passwordMatched = bcrypt.compareSync(password,loggedInUser.password);

        if(!passwordMatched){
            throw new Error("Password is wrong");
            /*return NextResponse.json({
                message : "Password is wrong",
                success : false,
            });*/
        }

        const nextResponse = NextResponse.json({
            message: "Login Successfully!!",
            success:true,
        });
        
       

        const token = jwt.sign({
            _id : loggedInUser._id,
            username : loggedInUser.username,
        },process.env.JWT_KEY);
        console.log("token="+token);
        nextResponse.cookies.set("authtoken",token,{
            expires : Date.now() + oneHour,
            httpOnly : true,
        });

        //console.log(loggedInUser);

        return nextResponse;

     }catch(error){
        return NextResponse.json({
            message: error.message,
            success : false,
        },
        {
            status:500,
        });
     }
}
