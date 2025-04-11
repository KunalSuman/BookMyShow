"use client";
import React from "react";

function PaymentPage(email:string,price:number,company:string,location:string ,details:string) {
    const senddata = async (email:string,price:number,company:string,location:string,details : string) =>{
        try{
            const data = {
            sender_id: email,
            receiver_id: company,
            amount: price,
            location: location,
            details : details,
        };
        await axios.post('http://localhost:3000/api/user/payment', data);
        }catch(e)
        {
            console.log(e);
        }
    }
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center p-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left side: Payment form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-black">Pay with Mobile</h2>
          <div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 mb-2 px-2">
                Amount
              </label>
              <input
                id="amount"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 px-2">
                Phone Number
              </label>
              <input
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200" onClick={() => {
                senddata(email,price,company,location,details);
            }}>
              Pay Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-0 md:mx-8 my-8 md:my-0">
          <div className="w-px h-10 bg-gray-300 mb-2"></div>
          <span className="text-gray-500 font-semibold">or</span>
          <div className="w-px h-10 bg-gray-300 mt-2"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold mb-6 text-black">Scan QR Code</div>
          <img src="/download.png" alt="QR Code" className="mb-4" />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
