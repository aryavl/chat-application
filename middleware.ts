import { NextRequest, NextResponse } from "next/server";

export const middleware = async(req:NextRequest)=>{
    localStorage.getItem('user')
    console.log(req.nextUrl.pathname);
    
    return NextResponse.next()
}
export const config = {
    matcher:'/'
}