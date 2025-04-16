"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function FetchEventsPage() {
  const searchParams = useSearchParams();
  const company_id = searchParams.get("company_id");
  const [events, setEvents] = useState(null);

  const handleDeactivate = async (type, id) => {
    try {
      await axios.post(`/api/company/events/deactivate`, { type, id });
      // Refresh events after deactivation
      const response = await axios.post(
        `/api/company/fetcheventdata?company_id=${company_id}`,
        { company_id }
      );
      setEvents(response.data);
    } catch (error) {
      console.error("Error deactivating event:", error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post(
          `/api/company/fetcheventdata?company_id=${company_id}`,
          { company_id }
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [company_id]);

  if (!events) return <div>Loading events...</div>;

  const renderEventSection = (title, items, type) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="mb-4 border-b pb-2">
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500">
              {item.location} | {item.date}
            </p>
            {item.isActive ? (
              <button
                onClick={() => handleDeactivate(type, item.id)}
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-grey-600"
              >
                Make Inactive
              </button>
            ) : (
              <p className="text-grey-600 font-semibold mt-2">Inactive</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No {title.toLowerCase()} found.</p>
      )}
    </div>
  );

  return (
    <div className="p-6 min-h-[calc(100vh-65px)] space-y-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>
      {renderEventSection("Movie Events", events.movies, "movie")}
      {renderEventSection("Concert Events", events.concerts, "concert")}
      {renderEventSection("F1 Events", events.f1Events, "f1")}
    </div>
  );
}
