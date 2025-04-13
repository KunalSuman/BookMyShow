"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Explore Events</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">F1 Races</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/cotagp.jpg"
              alt="Miami GP"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Miami GP - May 5, 2025
            </p>
          </div>
          <div>
            <img
              src="/saopaulo.webp"
              alt="Monaco GP"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Monaco GP - May 25, 2025
            </p>
          </div>
          <div>
            <img
              src="/sanghaigp1.jpg"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Shanghai GP - July 12, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Movies</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/lux.jpeg"
              alt="Movie 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Marvel Thor - 7:00 PM
            </p>
          </div>
          <div>
            <img
              src="/lux.jpeg"
              alt="Movie 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Street Wolf - 8:30 PM
            </p>
          </div>
          <div>
            <img
              src="/regular.jpg"
              alt="Movie 3"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              3 Idiots - 5:45 PM
            </p>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Concerts</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/opera.webp"
              alt="Concert 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Robert Albert Hall - June 10, 2025
            </p>
          </div>
          <div>
            <img
              src="/opera.webp"
              alt="Concert 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Sedney Opera house - June 15, 2025
            </p>
          </div>
          <div>
            <img
              src="/concert.jpeg"
              alt="Concert 3"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Pop Extravaganza - July 3, 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
