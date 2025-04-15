"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function CreateMovie() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");
  const company_id = params.get("company_id");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    const movieData = {
      name,
      description,
      date,
      location,
      company_id,
      isLux: false,
    };

    try {
      const res = await axios.post("/api/company/createMovie", movieData);
      if (res.status === 200 || res.status === 201) {
        router.push("/company/home");
      }
    } catch (err) {
      console.error("Error creating movie:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex items-center justify-center w-full max-w-6xl">
        <img
          src="/regular.jpg"
          className="hidden md:block w-1/3 h-auto object-cover rounded-lg mr-4"
        />
        <div className="flex flex-col gap-4 w-full max-w-md p-6 bg-white border rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center">Create Movie</h2>

          <input
            type="text"
            placeholder="Movie Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
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
          src="/regular.png"
          className="hidden md:block w-1/3 h-auto object-cover rounded-lg ml-4"
        />
      </div>
    </div>
  );
}
