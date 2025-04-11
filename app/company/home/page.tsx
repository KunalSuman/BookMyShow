"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CreateEventsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* F1 Events Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Create F1 Events</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center cursor-pointer">
            <img
              src="/saopaulo.webp"
              className="w-64 h-auto object-cover rounded"
              onClick={() => router.push('/company/home/f1events/saopualof1')}
            />
            <p className="mt-2 font-semibold">SaoPaulo</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/cotagp.jpg"
              className="w-64 h-auto object-cover rounded"
              onClick={() => router.push('/company/home/f1events/cotaf1')}
            />
            <p className="mt-2 font-semibold">Cota GP</p>
          </div>
          <div
            className="text-center cursor-pointer"

          >
            <img
              src="/sanghaigp1.jpg"
              className="w-64 h-500 object-cover rounded"
              onClick={() => router.push('/company/home/f1events/shangaif1')}
            />
            <p className="mt-2 font-semibold">Shangai</p>
          </div>
        </div>
      </div>

      {/* Concert Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Host Concert</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/opera.webp"
              alt="Opera"
              className="w-64 h-auto object-cover rounded"
            />
            <p className="mt-2 font-semibold">Opera Concert</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/concert.jpeg"
              className="w-64 h-auto object-cover rounded"
              onClick ={() => router.push('company/home/concertEvent/opera')}
            />
            <p className="mt-2 font-semibold">Open Air Concert</p>
          </div>
        </div>
      </div>

      {/* Movies Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Host Movies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/lux.jpg"
              alt="Lux"
              className="w-64 h-40 object-cover rounded"
            />
            <p className="mt-2 font-semibold">Lux Screening</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/standard.jpg"
              alt="Standard"
              className="w-64 h-40 object-cover rounded"
            />
            <p className="mt-2 font-semibold">Standard Screening</p>
          </div>
        </div>
      </div>
    </div>
  );
}
