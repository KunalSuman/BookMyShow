// import {PrismaClient} from '@prisma/client';
// import { NextRequest , NextResponse } from 'next/server';
// const prisma = new PrismaClient();
// export async
// function
// POST
// (req: NextRequest){
//     const data= await req.json();
//     console.log(data);
// try {
// const admi =await prisma.company.create({
// data: {

// }
// })
// } catch (error) {

// }

// }
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from 'axios';
export default function() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useRouter();
    return(
        <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen w-full flex justify-center items-center p-8 py-8">
            <div className=" rounded-md flex flex-col bg-white h-[50vh] items-center justify-between text-bolded text-black w-1/3 p-4" >
                <div className="text-2xl font-bold">
                    SignUp
                </div>
                <input type = "text" placeholder="email" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type = "password" placeholder="password" className="border-2 rounded-md w-1/2 h-1/6 p-4" onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>
                <button className="bg-blue-500 w-1/3 rounded-md h-1/6" onClick={async ()=>{
                    await axios.post('http://localhost:3000/api/user', {email, password})
                }}>Sign Up</button>
            </div>
            </div>

        </div>
    )
}
