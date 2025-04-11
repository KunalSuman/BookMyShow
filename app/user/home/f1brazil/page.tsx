"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function() {
    const router = useRouter();
    const [email, setemail] = useState("");
    const [price , setprice] = useState(0);
    const [comapany, setcompany] = useState("");
    const senddata = async (email:string,price:number,company:string) =>{
        router.push('/user/home/payment',);
    }
    return (
        <div className="flex min-h-[calc(100vh-65px)] bg-gray-100 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="container mx-auto max-w-10xl">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Event Tickets</h1>
            </div>

          <div className="flex flex-row mb-8">
            <div className="flex-1 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/brazil.jpg"
                  alt="Event Track or Venue Layout"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="grid grid-cols-1 gap-4">
                {/* Ticket Option 1 */}
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700">Hospatility</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-md text-gray-700 font-bold">€1,613.00</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700">Grandstand</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-md text-gray-700 font-bold">USD 500</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200" onClick={()=>{
                        senddata("email", 500, "comapany");
                    }}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
