"use client";
import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  // Get the user (customer) ID from the URL query parameter
  const searchParams = useSearchParams();
  const user_id = searchParams.get("user_id") || "";

  // Minimal local state for form fields
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  // The function that sends data to the backend
  const handlePayNow = async () => {
    try {
      const payload = {
        sender_id: user_id,
        receiver_phone: phone.trim(),
        amount: parseFloat(amount),
        location: location.trim(),
        details: details.trim(),
      };
      await axios.post("/api/user/payment", payload, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl flex flex-col md:flex-row">
        {/* Left side: Payment form */}
        <div className="flex-1 md:mr-8 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-6 text-black">Peer to Peer Payment</h2>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 px-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 px-2">Receiver Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 px-2">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Details */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 px-2">Details</label>
            <input
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter details"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Pay Now Button */}
          <button
            onClick={handlePayNow}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Pay Now
          </button>
        </div>

        {/* Vertical Divider */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-px h-10 bg-gray-300 mb-2"></div>
          <span className="text-gray-500 font-semibold">or</span>
          <div className="w-px h-10 bg-gray-300 mt-2"></div>
        </div>

        {/* Right side: QR code */}
        <div className="flex-1 flex flex-col items-center justify-center mt-6 md:mt-0 md:ml-8">
          <div className="text-2xl font-bold mb-6 text-black">Scan QR Code</div>
          <img
            src="/download.png"
            alt="QR Code"
            className="mb-4 w-48 h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
