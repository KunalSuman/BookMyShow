"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
export default function CreateConcertdiv() {

  const params = useSearchParams();
  const email = params.get("email");
  const company_id = params.get("company_id");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async () => {
    const concertData = {
      name,
      description,
      date,
      location,
      company_id,
      isOpera: true,
    };
    try {
      const res = await axios.post("/api/company/createmusic", concertData);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex items-center justify-center w-full max-w-6xl">
        <img
          src="/opera.webp"
          className="hidden md:block w-1/4 h-auto object-cover rounded-lg mr-4"
        />
        <div
          className="flex flex-col gap-4 w-full max-w-md p-6 bg-white border rounded-xl shadow"
        >
          <h2 className="text-2xl font-bold text-center">Create Concert</h2>

          <input
            type="text"
            placeholder="Concert Name"
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <img
          src="/opera.png"
          className="hidden md:block w-1/4 h-auto object-cover rounded-lg ml-4"
        />
      </div>
    </div>
  );
}
