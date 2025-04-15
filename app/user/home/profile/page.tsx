"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function UserProfilePage() {
  // Extract user_id from the URL query parameters
  const searchParams = useSearchParams();
  const user_id = searchParams.get("user_id") || "";

  const [customer, setCustomer] = useState(null);
  const [newBalance, setNewBalance] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch customer profile when component mounts or when user_id changes
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user_id) {
        setError("User ID not provided.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.post("/api/user/viewProfile", {
          user_id,
        }, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.data.customer) {
          setCustomer(response.data.customer);
        } else {
          setError("Customer not found.");
        }
      } catch (err: any) {
        console.error("Error fetching profile:", err);
        setError(err.message || "Error fetching profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user_id]);

  // Handler to update balance
  const handleUpdateBalance = async () => {
    if (!user_id) return;
    try {
      const updatedBalance = parseFloat(newBalance);
      const response = await axios.post("/api/user/updateBalance", {
        user_id,
        newBalance: updatedBalance,
      }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.customer) {
        setCustomer(response.data.customer);
        setNewBalance("");
      }
    } catch (err: any) {
      console.error("Error updating balance:", err);
      setError(err.message || "Error updating balance.");
    }
  };

  if (loading) return <div className="p-6 text-center">Loading profile...</div>;
  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
      {customer && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Balance:</strong> {customer.balance}</p>
          <div className="mt-4 flex">
            <input
              type="number"
              placeholder="Enter new balance"
              value={newBalance}
              onChange={(e) => setNewBalance(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mr-2 flex-1"
            />
            <button
              onClick={handleUpdateBalance}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Balance
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
