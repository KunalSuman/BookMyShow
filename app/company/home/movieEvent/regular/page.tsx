"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
export default function createmovie() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");
  const company_id = params.get("company_id");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    try{const data = {
        name,
        description,
        date,
        location,
        company_id,
        isLux : false,
    }
    const res = await axios.post("/api/company/createMovie", data);}
    catch (err) {
      console.error("Error creating event:", err);
    }
};

  return (
    <div
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold mb-4">Add a New Movie</h1>

      <input
        type="text"
        placeholder="Movie Name"
        value={name}
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
        onChange={(e) => setDate(e.target.value)}
        required
        className="p-2 border rounded"
      />

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
