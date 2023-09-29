"use client";

import React, { useEffect, useState } from 'react'
import UserContext from './userContext';
import { currentUser } from '@/services/userService';
import { toast } from 'react-toastify';

const UserProvider = ({children}) => {
    const[user,setUser] = useState(undefined);

    useEffect(()=>{
        async function loadUser(){
        try{
            const loggedInUser= await currentUser();
            if(loggedInUser != undefined)
                setUser({...loggedInUser});
        }catch(error){
            console.log(error);
            setUser(undefined);
            //toast.error("error in loading current user");
        }
    }
    
    console.log("firing loaduser");
    loadUser();
    
    }
    ,[] //only execute single time
    );


  return (
  <div>
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
 </div>  
  );
};

export default UserProvider;