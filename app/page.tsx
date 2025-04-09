"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const router = useRouter();
    const login = () => {
        router.push('/user/signin');
    }
    const signup = () =>{
        router.push('/user/signup');
    }
    return (
        <div className="min-h-screen overflow-y-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <div className="flex justify-between items-center p-6">
            <div className="text-2xl font-bold text-white">
                BookMyShow
            </div>
            <div className="space-x-4">
            <button onClick = {login} className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-500 transition duration-200">
                Login
            </button>
            <button onClick = {signup} className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition duration-200">
                Sign Up
            </button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
            <div className="text-4xl font-extrabold text-white mb-4">
            Welcome to BookMyShow
            </div>
            <div className="text-lg text-white max-w-xl">
            Your Ultimate Destination for Entertainment
            </div>
        </div>
        <section className="max-w-2xl mx-auto py-20 px-4">
            <h2 className="text-2xl font-bold text-white mb-4">Learn More About Us</h2>
            <p className="text-white mb-4">
            Our platform offers a seamless and modern approach to managing and booking your favorite shows. With an easy-to-navigate interface and a robust API, everything is designed with you in mind.
            </p>
            <p className="text-white mb-4">
            Whether you’re a long-time movie enthusiast or new to the world of live performances, our mission is to make discovering events as enjoyable as attending them.
            </p>
            <p className="text-white">
            Explore the features, check out our latest offers, and join a community of passionate entertainment lovers. Scroll down to find out more!
            </p>
        </section>
        </div>
    );
}

export default LandingPage;
