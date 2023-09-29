"use client";

import { doLogin } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Login(){
    const [login,setLogin] = useState({
        email : "",
        password : "",
        
    });
    const router = useRouter();

    const  HandleLogin=async (event)=>{
        event.preventDefault();
        console.log(login);
        try{
            if(login.email.trim === "" || login.password.trim === ""){
                toast.warn("Email and/or password should not be empty",{position : "top-center"});
            }
            const loggedInUser = await doLogin(login);
            if(loggedInUser != null){
                console.log(loggedInUser);
            toast.success("User Logged Successfully!",{position:"top-center"});
            setLogin({
                email : "",
                password : "",
            });
            router.push("/");
        }
        }catch(error){
            let errorMessage = error.response.data.message;
            toast.error(errorMessage,{position:"top-center"});
        }
    }
    return(
        <div className="bg-blue-200 grid grid-cols-12">
         <div className="col-span-4 col-start-5  ">
            <div className="text-3xl text-center">
                Please Login   
            </div>
            <div className="overflow-y-auto h-80">
                <form action="#!" onSubmit={HandleLogin} >
                    <div> 
                        <label  htmlFor="user_email" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Email
                        </label>
                        <input type="email" id="user_email" name="user_email" 
                        placeholder="Email" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300"
                        onChange={(event)=> {
                            setLogin({...login,email:event.target.value})}}
                            value={login.email}
                        />
                    </div>
                    
                    <div> 
                        <label  htmlFor="user_password" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Password
                        </label>
                        <input type="password" id="user_password" name="user_password" 
                        placeholder="Password" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300"
                        onChange={(event)=> {
                            setLogin({...login,password:event.target.value})}}
                            value={login.password}
                        />
                    </div>
                    <div className="text-center mt-2"> 
                        <button type="submit" className="px-2 py-2 mr-1 ml-1 mb-2
                            rounded-lg bg-blue-600 hover:bg-blue-950">Submit</button>
                        <button type="reset" className="px-2 py-2 mr-1 ml-1 mb-2
                            rounded-md bg-gray-500 hover:bg-gray-400" >Reset</button>
                    </div>
                    {JSON.stringify(login )}
                </form>
            </div>

           </div>
        </div>
    );
    }