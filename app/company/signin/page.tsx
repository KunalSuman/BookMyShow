"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CompanySignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      // Call the company sign-in endpoint
      const response = await axios.post(
        "/api/company/signin",
        { email, password },
      );
      if (response.data.company) {
        router.push(
          `/company/home?email=${encodeURIComponent(response.data.company.email)}&company_id=${encodeURIComponent(response.data.company.id)}`
        );
      } else {
        alert("Invalid credentials");
        console.error("Sign in failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
      <div className="min-h-screen w-full flex justify-center items-center p-8 py-8">
        <div className="rounded-md flex flex-col bg-white h-[50vh] items-center justify-between font-bold text-black w-1/3 p-4">
          <div className="text-2xl font-bold">Company SignIn</div>
          <input
            type="text"
            placeholder="company-email"
            className="border-2 rounded-md h-1/6 w-1/2 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border-2 rounded-md w-1/2 h-1/6 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 w-1/3 rounded-md h-1/6"
            onClick={login}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
