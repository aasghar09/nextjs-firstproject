import { NextResponse } from 'next/server'
//import { connectDb } from './helper/db';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    console.log("middle poking with pathname="+pathname);
    //if(pathname.startsWith("/api")){
       //connectDb();
    //}

    let authcookie = request.cookies.get("authtoken")?.value;
    console.log("middleware authcookie is = "+authcookie);
    console.log("middleware pathname is = "+pathname);
    if(authcookie != undefined)
    {
       if(pathname === '/login' || pathname ==='signup')
        {
           return  NextResponse.rewrite(new URL("/",request.nextUrl));
        }
        else
        {
            return NextResponse.rewrite(new URL(pathname,request.nextUrl));
        }
    }
    else
    {
        console.log("going for login page");
        if(pathname.startsWith("/api")){
            return NextResponse.json({message:"Access Denied",success:false},{status:401});
        }
        return NextResponse.rewrite(new URL("/login",request.nextUrl));
    }


  //return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*'
            ,'/api'
            ,'/login'
            ,'/add-task'
            ,'/'
            
        ],
}