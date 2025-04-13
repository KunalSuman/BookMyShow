"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from 'axios';
export default function(){
    const [email, setEmail] = useState("");
    const [company_name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [comnpany_wallet, setBalance] = useState(0);
    const [comapny_number, setPhone] = useState("");
    const navigate = useRouter();
    const handleSignup = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/company/signup",
            { email ,
              name:  company_name,
              password,
              phone: comapny_number,
              balance: comnpany_wallet},
          );
          console.log(response.data);
          navigate.push("/company/home");
        } catch (error) {
          console.error("Signup failed", error);
        }
      };
    return(
        <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen w-full flex justify-center items-center p-8 py-8">
            <div className=" rounded-md flex flex-col bg-white h-[50vh] items-center justify-between text-bolded text-black w-1/3 p-4" >
                <div className="text-2xl font-bold">
                    Company SignUp
                </div>
                <input type = "text" placeholder="email" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type = "name" placeholder="company name" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setName(e.target.value)}}></input>
                <input type = "password" placeholder="password" className="border-2 rounded-md w-1/2 h-1/6 p-4" onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>
                <input type = "phone" placeholder="phone" className="border-2 rounded-md h-1/6 w-1/2 p-4" onChange={(e)=>{setPhone(e.target.value)}}></input>
                <button className="bg-blue-500 w-1/3 rounded-md h-1/6" onClick={handleSignup
                }>Sign Up</button>
            </div>
            </div>
        </div>
    )
}
