"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from 'axios';
export default function() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setimage] = useState("");
    const [compayid, setCompanyid] = useState("");
    const navigate = useRouter();
    return(
        <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen w-full flex justify-center items-center p-8 py-8">
            <div className=" rounded-md flex flex-col bg-white h-[50vh] items-center justify-between text-bolded text-black w-1/3 p-4" >
                <div className="text-2xl font-bold">
                    SignUp
                </div>
                <input type = "name" placeholder="name" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setName(e.target.value)}}></input>
                <input type = "phone" placeholder="description" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setDescription(e.target.value)}}></input>
                <input type = "password" placeholder="compayid" className="border-2 rounded-md w-1/2 h-1/6 p-4" onChange={(e)=>{
                    setCompanyid(e.target.value)
                }}></input>
                <input type = "image" placeholder="image" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setimage(e.target.value)}}></input>
                <button className="bg-blue-500 w-1/3 rounded-md h-1/6" onClick={async ()=>{
                    await axios.post('http://localhost:3000/api/company/advertisment', {name, description , image, compayid})
                }}>Sign in</button>
            </div>
            </div>

        </div>
    )
}
