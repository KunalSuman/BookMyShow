"use client"
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

export default function() {
    const router = useRouter();
    const nv = () =>{
        router.push("/company/home/eventss")
    }
    return (
        <div className="bg-blue-800 h-screen w-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold mb-6">COMPANY</h1>
            <button onClick = {nv} className="bg-green-500 text-white px-20 py-6 rounded-lg shadow-md hover:bg-green-600 transition-all mb-4">
                Events
            </button>
            <button className="bg-purple-500 text-white px-20 py-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
                History
            </button>
            <button className="bg-gray-500 text-white px-20 py-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
                Events
            </button>
        </div>
    );
}
