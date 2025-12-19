import React from "react";
import { GraduationCap } from "lucide-react";
import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg animate-pulse">
              <img
                src={logo}
                alt="Don Bosco Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full bg-blue-100 flex items-center justify-center"
                style={{ display: "none" }}
              >
                <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-blue-800" />
              </div>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-800 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* School Name */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Don Bosco
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-light">
            School
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Salem Veng | Churachandpur
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce"></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm md:text-base text-gray-600 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
