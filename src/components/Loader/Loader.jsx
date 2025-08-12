// Loader.jsx
import React from "react";
import Lottie from "lottie-react"; // uncomment if using lottie-react
import animationData from "../../assets/Lottifiles/loading.json"; // your Lottie file

export default function Loader() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
      <Lottie animationData={animationData} loop={true} />
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4">
        Sowmitra Guha
      </div>
    </div>
  );
}
