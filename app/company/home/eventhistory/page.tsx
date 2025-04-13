"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function FetchEventsPage() {
  const searchParams = useSearchParams();
  const company_id = searchParams.get("company_id");
  const [events, setEvents] = useState(null);

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

  return (
    <div className="p-6 min-h-[calc(100vh-65px)] space-y-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Movie Events</h2>
        {events.movies && events.movies.length > 0 ? (
          events.movies.map((movie) => (
            <div key={movie.id} className="mb-4 border-b pb-2">
              <p className="text-xl font-semibold">{movie.name}</p>
              <p className="text-gray-600">{movie.description}</p>
              <p className="text-sm text-gray-500">
                {movie.location} |  {movie.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No movie events found.</p>
        )}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Concert Events</h2>
        {events.concerts && events.concerts.length > 0 ? (
          events.concerts.map((concert) => (
            <div key={concert.id} className="mb-4 border-b pb-2">
              <p className="text-xl font-semibold">{concert.name}</p>
              <p className="text-gray-600">{concert.description}</p>
              <p className="text-sm text-gray-500">
                 {concert.location} |  {concert.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No concert events found.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-198">
        <h2 className="text-2xl font-semibold mb-4">F1 Events</h2>
        {events.f1Events && events.f1Events.length > 0 ? (
          events.f1Events.map((f1) => (
            <div key={f1.id} className="mb-4 border-b pb-2">
              <p className="text-xl font-semibold">{f1.name}</p>
              <p className="text-gray-600">{f1.description}</p>
              <p className="text-sm text-gray-500">
                 {f1.location} |  {f1.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No F1 events found.</p>
        )}
      </div>
    </div>
  );
}
