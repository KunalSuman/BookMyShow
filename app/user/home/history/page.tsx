"use client";
import React from "react";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Your History</h1>
        <p className="text-gray-600">Here’s what you’ve enjoyed recently</p>
      </header>

      {/* Past Races */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Past F1 Races</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/monaco-history.jpg"
              alt="Monaco GP History"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Monaco GP - Attended on May 25, 2024
            </p>
          </div>
          <div>
            <img
              src="/australia-history.jpg"
              alt="Australia GP History"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Australian GP - Watched on April 7, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Watched Movies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Watched Movies</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/watched-movie1.jpg"
              alt="Watched Movie 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Inception - Watched on March 21, 2024
            </p>
          </div>
          <div>
            <img
              src="/watched-movie2.jpg"
              alt="Watched Movie 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Interstellar - Watched on April 2, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Attended Concerts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Attended Concerts</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img
              src="/concert-history1.jpg"
              alt="Concert History 1"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              EDM Blast - Attended on Feb 12, 2024
            </p>
          </div>
          <div>
            <img
              src="/concert-history2.jpg"
              alt="Concert History 2"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 text-center font-semibold">
              Acoustic Night - March 8, 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
