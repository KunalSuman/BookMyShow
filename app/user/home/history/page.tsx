"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function HistoryPage() {
  // Extract customer (user) id from query parameters; adjust the key if needed.
  const searchParams = useSearchParams();
  const customer_id = searchParams.get("user_id") || "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [historyData, setHistoryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchHistoryWithDetails = async () => {
      if (!customer_id) {
        setError("Customer ID not provided.");
        setLoading(false);
        return;
      }
      try {
        // First, get the event payment history for this customer
        const historyRes = await axios.post(
          "/api/user/eventHistory",
          { customer_id },
          { headers: { "Content-Type": "application/json" } }
        );
        const history = historyRes.data.history;

        // For each history record, fetch event details using event_id
        const detailedHistory = await Promise.all(
          history.map(async (record: any) => {
            try {
              const detailRes = await axios.post(
                "/api/user/getEventDetails",
                { event_id: record.event_id },
                { headers: { "Content-Type": "application/json" } }
              );
              // Merge the event details (returned as { event, type }) into the record.
              return { ...record, eventDetails: detailRes.data.event, eventType: detailRes.data.type };
            } catch (detailError) {
              console.error(`Error fetching details for record ${record.id}:`, detailError);
              return { ...record, eventDetails: null, eventType: null };
            }
          })
        );

        setHistoryData(detailedHistory);
      } catch (err: any) {
        console.error("Error fetching event history:", err);
        setError(err.response?.data?.message || err.message || "Error fetching event history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryWithDetails();
  }, [customer_id]);

  if (loading) return <div className="p-6 text-center">Loading history...</div>;
  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        Error loading history: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Your Event History</h1>
        <p className="text-gray-600">Here are the events you have attended.</p>
      </header>

      {historyData.length > 0 ? (
        <div className="space-y-4">
          {historyData.map((record) => (
            <div
              key={record.id}
              className="bg-white p-4 rounded shadow-md max-w-md mx-auto"
            >
              <p>
                <strong>Event ID:</strong> {record.event_id}
              </p>
              {record.eventDetails ? (
                <>
                  <p>
                    <strong>Event Name:</strong>{" "}
                    {record.eventDetails.name || "Unknown Event"}
                  </p>
                  <p>
                    <strong>Description:</strong>{" "}
                    {record.eventDetails.description || "No description available"}
                  </p>
                </>
              ) : (
                <p>No details available for this event.</p>
              )}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(record.created_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Amount Paid:</strong> {record.amount}
              </p>
              {record.eventType && (
                <p>
                  <strong>Event Type:</strong> {record.eventType}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No event history found.</p>
      )}
    </div>
  );
}
