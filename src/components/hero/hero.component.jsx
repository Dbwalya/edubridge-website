import React from 'react';
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Hero() {
    return (
        <div className="flex flex-col items-center py-24 px-5 md:justify-center h-screen bg-gray-100 relative overflow-hidden">
            {/* Dynamic Wave Gradient */}
            <div className="absolute top-0 left-0 w-full h-full">
                <svg
                    className="wave-animation h-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff7e5f" />
                            <stop offset="50%" stopColor="#feb47b" />
                            <stop offset="100%" stopColor="#ff7e5f" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#gradient)"
                        fillOpacity="1"
                        d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,58.7C672,53,768,75,864,96C960,117,1056,139,1152,122.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Content */}
            <div className="text-center md:w-4/5 relative z-10">
                <h1
                    className="text-5xl md:text-7xl text font-bold text-gray-800 fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    We ensure you that we are the Best Study center
                </h1>
                <p
                    className="mt-4 text-lg fade-in-up text-gray-800"
                    style={{ animationDelay: "0.4s" }}
                >
                    At our online study center, we pride ourselves on delivering personalized,
                    high-quality education tailored to each student's unique needs, ensuring
                    they receive the most effective support possible. Our cutting-edge
                    technology and expert instructors provide an engaging and interactive
                    learning experience, making complex subjects accessible and enjoyable.
                </p>
                <button
                    className="mt-8 mx-auto flex gap-3 items-center px-6 py-2 bg-black rounded-full text-white fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    Learn More
                    <ArrowRightOutlined />
                </button>
            </div>
        </div>
    );
}
