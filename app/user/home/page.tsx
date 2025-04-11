"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
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
              src="/silverstone-f1.jpg"
              alt="Silverstone GP"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Silverstone GP - July 12, 2025
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
              src="/movie1.jpg"
              alt="Movie 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Blockbuster Hit - 7:00 PM
            </p>
          </div>
          <div>
            <img
              src="/movie2.jpg"
              alt="Movie 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Indie Gem - 8:30 PM
            </p>
          </div>
          <div>
            <img
              src="/movie3.jpg"
              alt="Movie 3"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Family Adventure - 5:45 PM
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
              src="/concert1.jpg"
              alt="Concert 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Rock Night - June 10, 2025
            </p>
          </div>
          <div>
            <img
              src="/concert2.jpg"
              alt="Concert 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Jazz Evening - June 15, 2025
            </p>
          </div>
          <div>
            <img
              src="/concert3.jpg"
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
