import { NextResponse } from "next/server";

export function GET(request,{ params }){
    const {userId,postId} = params;
    console.log("user Id is",userId);
    console.log("post Id is",postId);
    return NextResponse.json(params);
}