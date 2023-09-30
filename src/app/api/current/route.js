import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

//connectDb();
export async function GET(request)
{
   await connectDb();   
    const userToken = request.cookies.get("authtoken")?.value;
    console.log("/api/current route "+userToken);

     if(userToken != undefined)
     {
        const data =jwt.verify(userToken,process.env.JWT_KEY);
        console.log(data);

        const user = await User.findById(data._id).select("-password");
        return NextResponse.json(user);
     }
     else
     {
      //return NextResponse.(new URL("/login",request.nextUrl));
      return NextResponse.json({message:"Error while logging out!!",success:false});
     }
}


