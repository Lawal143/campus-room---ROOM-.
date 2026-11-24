
"use client";

import { useState } from "react";
import Link from "next/link";
import { rooms } from "@/data/data";

export default function Home() {
  const [search, setSearch] = useState("");
  const [building, setBuilding] = useState("All Buildings");
  const [capacity, setCapacity] = useState("All");

  const buildings = [
    "All Buildings",
    ...new Set(rooms.map((room) => room.building)),
  ];

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = room.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBuilding =
      building === "All Buildings" || room.building === building;

    const matchesCapacity =
      capacity === "All" || room.capacity >= Number(capacity);

    return matchesSearch && matchesBuilding && matchesCapacity;
  });

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#292A27]">
      
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8A7865] mb-6">
              Your campus, your space
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight">
              Find your
              <br />
              space to
              <br />
              <span className="italic text-[#8A7865]">think.</span>
            </h1>

            <p className="mt-6 text-[#746D62] max-w-md leading-7">
              Discover thoughtfully designed spaces for studying,
              collaboration and bringing great ideas to life.
            </p>

            <a
              href="#spaces"
              className="inline-block mt-8 bg-[#292A27] text-white px-8 py-4 text-sm hover:bg-[#66715D] transition"
            >
              Explore spaces →
            </a>
          </div>

          <div className="h-[350px] md:h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Modern study workspace"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ROOM DIRECTORY */}
      <section id="spaces" className="bg-[#FAF9F6] px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#8A7865] mb-3">
                The collection
              </p>

              <h2 className="font-serif text-4xl">
                Explore our spaces
              </h2>

              <p className="text-sm text-[#746D62] mt-3">
                Find the right environment for your next session.
              </p>
            </div>

            <p className="text-sm text-[#8A7865]">
              {filteredRooms.length} spaces available
            </p>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <input
              type="text"
              placeholder="Search by room name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#D9CEBD] bg-transparent px-5 py-4 outline-none focus:border-[#66715D] text-sm"
            />

            <select
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="border border-[#D9CEBD] bg-transparent px-5 py-4 outline-none text-sm"
            >
              {buildings.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="border border-[#D9CEBD] bg-transparent px-5 py-4 outline-none text-sm"
            >
              <option value="All">Any capacity</option>
              <option value="4">4+ people</option>
              <option value="8">8+ people</option>
              <option value="12">12+ people</option>
              <option value="20">20+ people</option>
            </select>
          </div>

          {/* ROOM CARDS */}
          {filteredRooms.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <Link
                  href={`/rooms/${room.id}`}
                  key={room.id}
                  className="group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-[#F4F0E8] text-[#66715D] text-xs px-4 py-2">
                      Available
                    </span>
                  </div>

                  <div className="pt-5">
                    <p className="text-xs uppercase tracking-widest text-[#8A7865]">
                      {room.building}
                    </p>

                    <div className="flex justify-between items-center mt-2">
                      <h3 className="font-serif text-2xl">
                        {room.name}
                      </h3>

                      <span className="text-sm text-[#8A7865]">↗</span>
                    </div>

                    <p className="text-sm text-[#746D62] mt-3">
                      Capacity: {room.capacity} people
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs border border-[#D9CEBD] px-3 py-2 text-[#746D62]"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-[#D9CEBD] mt-5 pt-4 text-sm flex justify-between">
                      <span>{room.availableSlots.length} time slots</span>
                      <span>View space →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h3 className="font-serif text-3xl">
                No spaces found
              </h3>

              <p className="text-sm text-[#746D62] mt-3">
                Try changing your search or filters.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setBuilding("All Buildings");
                  setCapacity("All");
                }}
                className="mt-6 underline text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
