"use client";
import React from "react";
import {useRouter, useSearchParams } from "next/navigation"
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const params = useSearchParams();
    const email1 = params.get("email");
    const company_id = params.get("company_id");
    return (
    <div className="min-h-screen bg-gray-100">
        <div className="flex justify-between items-center bg-white text-black p-4 shadow-md">
            <div className="text-2xl font-bold">BookMyShow</div>
            <div onClick={() => router.push(`/company/home/profile?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`)} className="cursor-pointer">
            profile
            </div>
            {email1 && company_id}
        </div>
        <hr className="border-t border-gray-300" />
      <div className="flex text-black bg-white">
        <div className=" p-6">
          <div className="space-y-4">
            <div className="p-2 cursor-pointer rounded" onClick={()=>{
                router.push(`/company/home?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`);
            }}>
              Home
            </div>
            <div className="p-2 cursor-pointer rounded" onClick={() => router.push(`/company/home/paymentHistory?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`)}>
              Payment History
            </div>
            <div className="p-2 cursor-pointer rounded" onClick={() => router.push(`/company/home/eventhistory?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`)}>
              Event History
            </div>
            {/* <div className="p-2 cursor-pointer rounded" onClick={()=>router.push(`/company/home/payment?email=${encodeURIComponent(email1)}&company_id=${encodeURIComponent(company_id)}`)}>
              Payment
            </div> */}
          </div>
        </div>
        <div className="w-px bg-gray-300 "></div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
