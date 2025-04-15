"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function ProfilePage() {
  // Local states to manage the company data, loading, and error
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useSearchParams();
  const email1 = params.get("email");
  const company_id = params.get("company_id");
  useEffect(() => {
    const fetchCompanyProfile = async () => {
      // Retrieve email and password from localStorage



      try {
        // POST request to your API route for fetching company data.
        // Make sure your API endpoint path is correct.
        const response = await axios.post("/api/company/viewProfile", {
            email: email1,
            company_id: company_id,
            }, {
            headers: { "Content-Type": "application/json" },
        });

        // Expecting the API to return an object like { company: user }
        if (response.data.company) {
          setCompany(response.data.company);
        } else {
          setError("Failed to fetch company data.");
        }
      } catch (err: any) {
        console.error("Error fetching company profile:", err);
        setError(err.message || "Error fetching company data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyProfile();
  }, []);

  if (loading)
    return <div className="p-6 text-center">Loading profile...</div>;

  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Company Profile</h1>
      {company && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <p><strong>Name:</strong> {company.name}</p>
          <p><strong>Email:</strong> {company.email}</p>
          <p><strong>Phone:</strong> {company.phone}</p>
          <p><strong>Balance:</strong> {company.balance}</p>
          {/* You can display additional details as needed */}
        </div>
      )}
    </div>
  );
}
