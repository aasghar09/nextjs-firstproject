"use client";

import Link from "next/link";
import React from "react";

export default function Footer(){
    return(
        <footer className="bg-slate-500" id="footer">
            <div className="flex p-5 justify-between">      
                <div className="text-center flex flex-col justify-center"> 
                    <h1>Welcome to Ali's World</h1>
                    <p>
                        All work is copyright under
                    </p>
                </div>
                <div className="text-center">
                    <ul>
                        <li><Link href={"www.facebook.com"}>Facebook</Link></li>
                        <li><Link href={"www.facebook.com"}>Linkedin</Link></li>
                        <li><Link href={"www.facebook.com"}>Github</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};