"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function() {
    const router = useRouter();

    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [date , setDate] = useState("");
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div
            // onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Create F1 Event</h2>

            {/* Name */}
            <div className="mb-4">
            <label className="block mb-1 font-semibold">Event Name</label>
            <input
                type="text"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="Silverstone GP"
                onChange={(e)=>{

                }}
            />
            </div>

            {/* Description */}
            <div className="mb-4">
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
                name="description"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="A legendary F1 race held at Silverstone..."
            />
            </div>

            {/* Date */}
            <div className="mb-4">
            <label className="block mb-1 font-semibold">Date</label>
            <input
                type="datetime-local"
                name="date"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            </div>

            {/* Location */}
            <div className="mb-6">
            <label className="block mb-1 font-semibold">Location</label>
            <input
                type="text"
                name="location"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="Silverstone Circuit, UK"
            />
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            Submit Event
            </button>
        </div>
        </div>
  );
}
