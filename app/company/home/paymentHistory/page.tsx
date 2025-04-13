"use client";

import React, { useEffect, useState } from "react";

interface Payment {
  id: string;
  sender_id: string;
  receiver_id: string;
  amount: number;
  created_at: string;
  location: string;
  details: string;
}

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  // Replace this mock with actual axios call
  useEffect(() => {
    setPayments([
      {
        id: "1",
        sender_id: "user123",
        receiver_id: "company12",
        amount: 1500.75,
        created_at: "2025-04-13T14:30:00Z",
        location: "Delhi",
        details: "concert karan Aujhla",
      },
      {
        id: "2",
        sender_id: "user789",
        receiver_id: "company12",
        amount: 950.5,
        created_at: "2025-04-10T10:00:00Z",
        location: "Mumbai",
        details: "f1 racing Cota Gp",
      },
    ]);
  }, []);

  return (
    <div className="p-6 min-h-[calc(100vh-65px)]">
      <h1 className="text-2xl text-blue-700 font-semibold mb-4">Payment History</h1>

      {payments.length === 0 ? (
        <div className="text-gray-500"></div>
      ) : (
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="border rounded p-4 shadow-sm bg-white">
              <div className="text-sm text-gray-500 mb-2">
                Date: {new Date(payment.created_at).toLocaleDateString()} | Location: {payment.location}
              </div>
              <div className="text-lg font-semibold text-black-700 mb-1">
                ${payment.amount.toFixed(2)}
              </div>
              <div className="text-sm text-gray-700 mb-1">
                From: <span className="font-medium">{payment.sender_id}</span>
              </div>
              <div className="text-sm text-gray-700 mb-1">
                To: <span className="font-medium">{payment.receiver_id}</span>
              </div>
              <div className="text-sm text-gray-600 italic">"{payment.details}"</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistoryPage;
