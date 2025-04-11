"use client";
import { useRouter } from "next/navigation";
export default function SignInPage() {
    const router = useRouter();
    const login = () => {
        router.push('/user/home');
    }
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
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200" onClick={login}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
