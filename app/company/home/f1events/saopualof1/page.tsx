"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function CreateEventForm() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email"); 
  const company_id = params.get("company_id");
  console.log("Company ID:", company_id);
  console.log("Email:", email);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    const data = {
      email,
      company_id,
      name,
      description,
      date,
      location,
    };

    console.log(data);

    try {
        const response = await axios.post("/api/company/createf1", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Event created:", response.data);
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex items-center justify-center w-full max-w-6xl">
        <img
          src="/saopaulo.webp"
          className="hidden md:block w-1/4 h-auto object-cover rounded-lg mr-4"
          alt="F1 Track in Sao Paulo"
        />
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Create F1 Event</h2>
          <div onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Event Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="Cota GP"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Description</label>
              <input
                name="description"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="A legendary F1 race held at Cota"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Date</label>
              <input
                name="date"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-semibold">Location</label>
              <input
                type="text"
                name="location"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="Cota, USA"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}>
              Submit Event
            </button>
          </div>
        </div>
        <img
          src="/brazil.jpg"
          className="hidden md:block w-1/3 h-auto object-cover rounded-lg ml-4"
          alt="F1 Track in Brazil"
        />
      </div>
    </div>
  );
}
