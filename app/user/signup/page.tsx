"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/user/signup",
        { email, name, phone, password, balance },
        { headers: { "Content-Type": "application/json" } }
      );
      router.push("/user/home");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</div>
        <div className="space-y-4">
            <div>
                <div className="text-black px-2">Enter Email </div>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className="text-black px-2">Enter Name </div>
                <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                onChange={(e) => setName(e.target.value)}
                />
          </div>
          <div>
                <div className="text-black px-2">Enter PhoneNumber </div>
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setPhone(e.target.value)}
                />
          </div>
          <div>
            <div className="text-black px-2">Enter Password </div>
            <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>
        <button
          onClick={handleSignup}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
