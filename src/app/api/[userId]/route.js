import { NextResponse } from "next/server";

export function GET(request,{ params }){
    const {userId} = params;
    console.log("user Id is",userId);
    return NextResponse.json(params);
}