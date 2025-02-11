import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
