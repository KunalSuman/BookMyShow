"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateConcertForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !date || !location) {
      alert("Please fill in all fields.");
      return;
    }

    const concertData = {
      name,
      description,
      date: new Date(date),
      location,
    };

    try {
      const res = await fetch("/api/concerts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(concertData),
      });

      if (res.ok) {
        router.push("/concerts");
      } else {
        const error = await res.json();
        alert("Error: " + error.message);
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold">Create Concert</h2>

      <input
        type="text"
        placeholder="Concert Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="p-2 border rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="p-2 border rounded"
      />

      <input
        type="datetime-local"
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
      >
        Submit
      </button>
    </form>
  );
}
