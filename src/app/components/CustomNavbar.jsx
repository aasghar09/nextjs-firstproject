"use client";
import Link from "next/link";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { doLogout } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




export default function CustomNavbar()
{
    //console.log("It is client and should print at browser level");

     const context= useContext(UserContext);
     const router = useRouter();
     console.log("CustomNavbar context is="+context.user);

     async function ProcessLogout(){
        try{
            console.log("processing logout");
            
            const result = await doLogout();
            console.log("logout result is "+result.data);
            context.setUser(undefined);
            router.push("/");
            toast.success("Logged out successfully!");
        }catch(error){
            console.error("logout result is "+error);
            toast.error(error);
        }
    }
    return( 
    <div>
        <nav className="bg-blue-600 h-10 px-3 py-2 flex justify-between items-center">
            <div className="brand">
                <h1 className="text-2xl font-semibold">
                    <Link href={"/"}>Dashboard</Link>
                </h1> 
            </div>
            <div className="brand"> 
                <ul className="flex space-x-6"> 
                    {
                        context.user && (
                            <>
                                <li>
                                    <Link href={"/info"} className="hover:text-xl">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/add-task"} className="hover:text-xl">Add Task</Link>
                                </li>
                                <li>
                                    <Link href={"/show-tasks"} className="hover:text-xl">  Show Tasks</Link>
                                </li>
                            </>
                        )
                    }
                    

                </ul>
                
            </div>
            <div className="brand"> 
                <ul className="flex space-x-2">
                    {
                        context.user && (
                            <>
                                <li>
                                    <Link href={"#!"}>{context.user.userName}</Link>
                                </li>
                                <li>
                                    <button onClick={ProcessLogout}>logout</button>
                                </li>
                            </>
                        )
                    }
                    {
                        !context.user && (
                            <>
                                <li>
                                    <Link href={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link href={"/signup"}>sign up</Link>
                                </li>
                            </>
                        )
                    }  
                    
                </ul>
            </div>
            
        </nav>
    </div>
    );
}