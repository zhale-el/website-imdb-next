"use client";
import { useEffect } from "react";

const Error = (error, reset) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-32">
      <h1 className="text-red-500 text-3xl">
        Somthing went wrong. Please try again later.
      </h1>
      <button
        className="bg-red-600  rounded-md px-6 py-3 mt-12 text-xl transition-all duration-300 hover:bg-red-400"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
