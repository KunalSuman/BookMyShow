"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";


export default function HomePage() {
  const route = useRouter();
  const params = useSearchParams();
  const userId = params.get("user_id");
  console.log("userid",userId);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventsData, setEventsData] = useState({
    f1Events: [],
    movie: [],
    concert: [],
  });


  useEffect(() => {
    // Fetch all events from the backend API endpoint
    const fetchEvents = async () => {
      try {
        const response = await axios.post("/api/user/fetchEventData",{});
        setEventsData(response.data);
      } catch (err: any) {
        console.error("Error fetching events:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
    function location(location: string) {
        if(location === "Sao Paulo") return "/saopaulo.webp";
        if(location === "Cota") return "/cotagp.jpg";
        if(location === "Shanghai") return "/sanghaigp1.jpg";

    }
    function sendlink({object}) {
        console.log(object);
        if(object.location === "Sao Paulo") route.push(`/user/home/f1brazil?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
        if(object.location === "Cota") route.push(`/user/home/f1cota?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
        if(object.location === "Shanghai") route.push(`/user/home/f1shanghai?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
    }
    function operasend({object}){
        if(object.isOpera) route.push(`/user/home/opera?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
        else route.push(`/user/home/openAir?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
    }
    function moviesend({object}){
        if(object.isLux) route.push(`/user/home/lux?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
        else route.push(`/user/home/regular?user_id=${encodeURIComponent(userId)}&event_id=${encodeURIComponent(object.id)}&reciver_id=${encodeURIComponent(object.company_id)}`);
    }
  if (loading) {
    return <div className="p-6 text-center">Loading events...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Explore Events</h1>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">F1 Races</h2>
        {eventsData.f1Events.filter(f1 => f1.isActive).length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {eventsData.f1Events.filter(f1 => f1.isActive).map((f1) => (
                <div key={f1.id} className="w-64" onClick={() => sendlink({ object: f1 })}>
                  <img
                    src={location(f1.location)}
                    alt={f1.name}
                    className="w-full h-auto object-cover rounded"
                  />
                  <p className="mt-2 text-center font-semibold">
                    {f1.name} - {new Date(f1.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-center">No F1 events found.</p>
        )}

      </div>

      {/* Movies div */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Movies</h2>
        {eventsData.movies && eventsData.movies.filter(movie => movie.isActive).length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {eventsData.movies.filter(movie => movie.isActive).map((movie) => (
              <div key={movie.id} className="w-64" onClick={()=>moviesend({object : movie})}>
                <img
                  src={movie.isLux ? "/lux.jpeg":"/regular.jpg"}
                  alt={movie.name}
                  className="w-full h-auto object-cover rounded"
                />
                <p className="mt-2 text-center font-semibold">
                  {movie.name} - {new Date(movie.date).toLocaleTimeString()}
                </p>
                {movie.isLux}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No movie events found.</p>
        )}
      </div>

      {/* Concerts div */}
     {/* Concerts div */}
<div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Concerts</h2>
  {eventsData.concerts && eventsData.concerts.filter(concert => concert.isActive).length > 0 ? (
    <div className="flex flex-wrap gap-4 justify-center">
      {eventsData.concerts.filter(concert => concert.isActive).map((concert) => (
        <div
          key={concert.id}
          className="w-64 cursor-pointer"
          onClick={() => operasend({ object: concert })}
        >
          <img
            src={concert.isOpera ? "/opera.webp" : "/concert.jpeg"}
            className="w-full h-auto object-cover rounded"
          />
          <p className="mt-2 text-center font-semibold">
            {concert.name} - {new Date(concert.date).toLocaleDateString()}
          </p>
          <p className="text-center text-xs text-gray-500">{concert.id}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No concert events found.</p>
  )}
</div>

    </div>
  );
}
