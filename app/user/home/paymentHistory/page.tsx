"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface Payment {
  id: string;
  customer_id: string;
  reciver_id: string;
  amount: number;
  created_at: string;
  location: string;
  details: string;
}

export default function UserPaymentHistoryPage() {
  const searchParams = useSearchParams();
  // Extract customer_id from the URL query parameters (for user payment history)
  const customer_id = searchParams.get("customer_id") || "";

  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.post(
          "/api/paymentHistory",
          { customer_id },
          { headers: { "Content-Type": "application/json" } }
        );
        setPayments(response.data.payments);
      } catch (err: any) {
        console.error("Error fetching user payment history:", err);
        setError(err.response?.data?.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    if (customer_id) {
      fetchPayments();
    } else {
      setError("Missing customer_id parameter.");
      setLoading(false);
    }
  }, [customer_id]);

  if (loading) {
    return <div className="p-6 text-center">Loading payment history...</div>;
  }
  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Payment History</h1>
      {payments.length === 0 ? (
        <p className="text-center text-gray-500">No payment history found.</p>
      ) : (
        <ul className="space-y-4">
          {payments.map((payment) => (
            <li key={payment.id} className="border rounded p-4 shadow-sm bg-white">
              <div className="text-sm text-gray-500 mb-2">
                Date: {new Date(payment.created_at).toLocaleString()} | Location: {payment.location}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                ${payment.amount.toFixed(2)}
              </div>
              <div className="text-sm text-gray-700">
                From: <span className="font-medium">{payment.customer_id}</span> to <span className="font-medium">{payment.reciver_id}</span>
              </div>
              <div className="text-sm text-gray-600 italic">"{payment.details}"</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
