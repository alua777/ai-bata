import React from "react";

// Header Component
const Header = () => {
  return (
    <header className="w-full bg-[#F3F8FF] px-6 py-4 flex items-center justify-between shadow-sm rounded-b-xl">
      <button className="text-2xl">⬅️</button>
      <div className="text-lg font-semibold">Writing. Section 1</div>
      <button className="text-2xl">➡️</button>
    </header>
  );
};

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#3C8AFF] p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <Header />

        <div className="mt-6 bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Section */}
          <div>
            {/* INSTRUCTION BOX WITH BORDER */}
            <div className="border border-gray-400 rounded-lg p-3 text-sm text-gray-700">
              You should spend about 20 minutes on this task. Write at least 150 words.
            </div>

            <p className="mt-4 text-gray-800 text-sm">
              The first table below shows changes in the total population of New York City
              from 1800 to 2000. The second and third tables show changes in the population
              of the five districts of the city (Manhattan, Brooklyn, Bronx, Queens,
              Staten Island) over the same period.
            </p>

            <p className="mt-2 text-gray-800 text-sm">
              Summarise the information by selecting and reporting the main features, and
              make comparisons where relevant.
            </p>

            {/* IMAGE INSTEAD OF TABLES */}
            <img
              src="/your-image-path-here.png"
              alt="Population tables"
              className="mt-4 rounded-xl border border-gray-300"
            />
          </div>

          {/* Right Section */}
          <div>
            <textarea
              className="w-full h-full min-h-[500px] p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your essay here..."
            />
          </div>

        </div>
      </div>
    </div>
  );
}
