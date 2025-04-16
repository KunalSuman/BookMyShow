"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function EventPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const event_id = searchParams.get("event_id") || "";
  const customer_id = searchParams.get("user_id") || "";
  const reciver_id = searchParams.get("reciver_id") || "";
  const amountStr = searchParams.get("amount") || "0";
  const amount = parseFloat(amountStr);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleConfirmPayment = async () => {
    setLoading(true);
    setError("");
    try {
      const payload = {
        event_id,
        customer_id,
        reciver_id,
        amount,
      };
      console.log("Sending payload:", payload);
      await axios.post("/api/user/eventPayment", payload, {
        headers: { "Content-Type": "application/json" },
      });
      setPaymentSuccess(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold mb-6">Confirm Payment</h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <p className="mb-4">
          <strong>Event ID:</strong> {event_id}
        </p>
        <p className="mb-4">
          <strong>Customer ID:</strong> {customer_id}
        </p>
        <p className="mb-4">
          <strong>Receiver ID:</strong> {reciver_id}
        </p>
        <p className="mb-4">
          <strong>Amount:</strong> {amount}
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {paymentSuccess ? (
          <p className="text-green-500 mb-4">Payment Successful!</p>
        ) : (
          <button
            onClick={handleConfirmPayment}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
          >
            {loading ? "Processing..." : "Confirm Payment"}
          </button>
        )}
      </div>
    </div>
  );
}
