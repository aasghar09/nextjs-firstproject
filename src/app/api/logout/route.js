import { NextResponse } from "next/server";

export async function POST(request){

    try{
        console.log("going to delete the token");
       
    request.cookies.delete("authtoken");

    const response = NextResponse.json({message:"Logged out succesfully!!",success:true});
    response.cookies.set("authtoken","",
    { maxAge: 0 },
    );
    //response.cookies.delete("authtoken");

    return response;
}
catch(error){
    console.log(error);
    return NextResponse.json({message:"Error while logging out!!",success:false});
}


}