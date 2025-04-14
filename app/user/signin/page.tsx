"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "/api/user/signin",
        { email, password },
      );
      if (response.data.user) {
        router.push(`/user/home?email=${encodeURIComponent(response.data.user.email)}&user_id=${encodeURIComponent(response.data.user.id)}`);
      } else {
        alert("Invalid credentials");
        console.error("Sign in failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign In
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            onClick={login}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
