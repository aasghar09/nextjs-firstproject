import { User } from "@/models/user";
import mongoose from "mongoose";

const  myObj={isConnected:0,};

export async function connectDb(){
    try{
        
        console.log("isConnected ="+myObj.isConnected);
        if(myObj.isConnected)
        return;
        console.log("going for connection...");
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "work_manager",

        });
        console.log("connection established...");
        console.log("connection?.readyState = "+connection?.readyState);
        if(connection?.readyState == 1)
            myObj.isConnected = 1;

        console.log("connection host is = "+connection.host);

       /* const user = new User({
            userName : "testUser",
            email : "testuser@testdomain.com",
            age : 21,
            address : "just a test address",
            password : "mypassword",
        });

       await user.save();
       console.log("user save succesfully");*/

    }catch(error){
         console.log('failed to connect db');
         console.log(error);
    }
};