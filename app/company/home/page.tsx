"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CreateEventsPage() {
    const router = useRouter();
    const params = useSearchParams()
    const email1 = params.get("email");
    const company_id = params.get("company_id");
    console.log(company_id)
    console.log(email1);
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
              onClick={() => router.push(`/company/home/f1events/saopualof1?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`)}
            />
            <p className="mt-2 font-semibold">SaoPaulo</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/cotagp.jpg"
              className="w-64 h-auto object-cover rounded"
              onClick={() =>
                router.push(
                    `/company/home/f1events/cotaf1?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`
                  )
              }
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
              className="w-64 h-auto object-cover rounded"
              onClick={() => router.push('/company/home/concertEvent/opera')}
            />
            <p className="mt-2 font-semibold">Opera Concert</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/concert.jpeg"
              className="w-64 h-auto object-cover rounded"
              onClick ={() => router.push('/company/home/concertEvent/openAir')}
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
              src="/lux.jpeg"
              className="w-64 h-40 object-cover rounded"
              onClick={() => router.push('/company/home/movieEvent/lux')}
            />
            <p className="mt-2 font-semibold">Lux Screening</p>
          </div>
          <div
            className="text-center cursor-pointer"
          >
            <img
              src="/regular.jpg"
              className="w-64 h-40 object-cover rounded"
              onClick={() => router.push('/company/home/movieEvent/regular')}
            />
            <p className="mt-2 font-semibold">Standard Screening</p>
          </div>
        </div>
      </div>
    </div>
  );
}
