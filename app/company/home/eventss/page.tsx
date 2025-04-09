"use client";
import React, { useState } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddEvent = () => {
    const { name, description, date, location } = formData;
    if (name && description && date && location) {
      const newEvent = {
        ...formData,
        date: new Date(date).toLocaleDateString(),
      };
      setEvents([...events, newEvent]);
      setFormData({ name: '', description: '', date: '', location: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Company Events</h1>
        <div className="mb-10 space-y-4 bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded resize-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddEvent}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Add Event
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Event History</h2>
          {events.length === 0 ? (
            <p className="text-gray-400">No events added yet.</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="bg-gray-800 border border-gray-700 p-4 rounded shadow-md"
                >
                  <h3 className="text-xl font-bold text-blue-400">{event.name}</h3>
                  <p className="text-gray-300">{event.description}</p>
                  <div className="text-sm text-gray-400 mt-2 flex justify-between">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
