"use client";

import { addUser } from "@/services/userService";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";


export default function Signup()
{
    const [userProfile,setUserProfile] = useState({
        userName: "",
        email : "",
        age:"",
        address : "",
        password : "",
        about : "",
    });

    const  HandleSubmit=async (event)=>{
        event.preventDefault();
        console.log(userProfile);
        try{
            var cPass = document.getElementById("confirm_password").value;
            if(userProfile.password != cPass){
                toast.warning("Confirm Passwords do not match");
                return;
            }
            const result = await addUser(userProfile);
            toast.success("User created Succesfully",{position:"top-center"});
            setUserProfile({
                userName: "",
                email : "",
                age:"",
                address : "",
                password : "",
                about : "",
            })
        }catch(error){
            toast.error("Some error whole creating user "+error,{position:"top-center"});
        }
    }
    return(
        <div className="bg-blue-200 grid grid-cols-12">
         <div className="col-span-4 col-start-5  ">
            <div className="justify-center">
                    <Image src="sign-in.svg"  width={200} height={100}   alt="Add Userinfo"></Image>
            </div>
            <div className="text-3xl text-center">
                Sign up    
            </div>
            <div className="overflow-y-auto h-80">
                <form action="#!" onSubmit={HandleSubmit} >
                    <div> 
                        <label  htmlFor="user_name" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Username
                        </label>
                        <input type="text" id="user-name" name="user_name" 
                        placeholder="Username" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300 mb-2" 
                        onChange={(event)=> {
                            setUserProfile({...userProfile,userName:event.target.value})}}
                            value={userProfile.userName}
                            />
                        
                    </div>
                    <div> 
                        <label  htmlFor="user_email" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Email
                        </label>
                        <input type="email" id="user_email" name="user_email" 
                        placeholder="Email" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300"
                        onChange={(event)=> {
                            setUserProfile({...userProfile,email:event.target.value})}}
                            value={userProfile.email}
                        />
                    </div>
                    <div> 
                        <label  htmlFor="user_age" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Age
                        </label>
                        <input type="text" id="user_age" name="user_age" 
                        placeholder="Age" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300 mb-2" 
                        onChange={(event)=> {
                            setUserProfile({...userProfile,age:event.target.value})}}
                            value={userProfile.age}
                        />
                    </div>
                    <div> 
                        <label  htmlFor="user_address" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Addresss
                        </label>
                        <textarea rows={2}  id="user_address" name="user_address" 
                        placeholder="About" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300 mb-2" 
                        onChange={(event)=> {
                            setUserProfile({...userProfile,address:event.target.value})}}
                            value={userProfile.address}
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
                            setUserProfile({...userProfile,password:event.target.value})}}
                            value={userProfile.password}
                        />
                    </div>
                    <div> 
                        <label  htmlFor="confirm_password" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            Confirm Password
                        </label>
                        <input type="password" id="confirm_password" name="confirm_password" 
                        placeholder="Confirm Password" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300" />
                    </div>
                    <div> 
                        <label  htmlFor="about" className="block text-blue-400 text-sm font-medium mb-2 px-2" >
                            About
                        </label>
                        <textarea rows={2}  id="about" name="about" 
                        placeholder="About" className="focus:ring-blue-500  focus:border-blue-500 px-4 py-2 w-full 
                        rounded-full bg-blue-300 mb-2" 
                        onChange={(event)=> {
                            setUserProfile({...userProfile,about:event.target.value})}}
                            value={userProfile.about}
                            />
                    </div>
                    <div className="text-center"> 
                        <button type="submit" className="px-2 py-2 mr-1 ml-1 mb-2
                            rounded-lg bg-blue-600 hover:bg-blue-950">Submit</button>
                        <button type="reset" className="px-2 py-2 mr-1 ml-1 mb-2
                            rounded-md bg-gray-500 hover:bg-gray-400" >Reset</button>
                    </div>
                    {/*JSON.stringify(userProfile )*/}
                </form>
            </div>

           </div>
        </div>
    );
}