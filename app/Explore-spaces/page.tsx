
"use client";

import { useState } from "react";
import Link from "next/link";
import { rooms } from "../../data/data";

export default function SpacesPage() {
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
    <div className="min-h-screen bg-[#17191D] px-6 py-16 text-[#F4F0E8] md:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">

        {/* PAGE INTRODUCTION */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
            01 / Find your fit
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">
            Explore our spaces<span className="text-[#B8F36B]">.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#A5A7A3]">
            Different spaces. Different possibilities. Find the right
            environment for whatever you have planned.
          </p>

          <p className="mt-5 text-sm text-[#B8F36B]">
            {filteredRooms.length} spaces found
          </p>
        </div>

        {/* SEARCH AND FILTERS */}
        <div className="mb-12 grid gap-3 md:grid-cols-3">

          <input
            type="text"
            placeholder="Search by room name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-[#383B40] bg-[#292D30] px-5 py-4 text-sm text-white outline-none placeholder:text-[#858985] focus:border-[#B8F36B]"
          />

          <select
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            className="w-full rounded-lg border border-[#383B40] bg-[#292D30] px-5 py-4 text-sm text-white outline-none focus:border-[#B8F36B]"
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
            className="w-full rounded-lg border border-[#383B40] bg-[#292D30] px-5 py-4 text-sm text-white outline-none focus:border-[#B8F36B]"
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
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredRooms.map((room, index) => (
              <Link
                href={`/rooms/${room.id}`}
                key={room.id}
                className="group overflow-hidden rounded-xl border border-[#383B40] bg-[#22252A] transition duration-300 hover:-translate-y-2 hover:border-[#B8F36B]/60"
              >

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-[#B8F36B] px-4 py-2 text-xs font-bold text-[#17191D]">
                    Available
                  </span>

                  <span className="absolute bottom-4 right-4 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")} / 06
                  </span>
                </div>

                <div className="p-6">

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#B8F36B]">
                    {room.building}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl">
                      {room.name}
                    </h2>

                    <span className="text-xl text-[#B8F36B] transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#A5A7A3]">
                    Capacity: {room.capacity} people
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full border border-[#383B40] px-3 py-2 text-xs text-[#C3C5C0]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between border-t border-[#383B40] pt-5 text-sm">
                    <span className="text-[#A5A7A3]">
                      {room.availableSlots.length} time slots
                    </span>

                    <span className="font-semibold text-[#B8F36B]">
                      View space →
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        ) : (
          <div className="rounded-xl border border-[#383B40] bg-[#22252A] py-24 text-center">

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl">
              No spaces found.
            </h2>

            <p className="mt-3 text-sm text-[#A5A7A3]">
              Try changing your search or filters.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setBuilding("All Buildings");
                setCapacity("All");
              }}
              className="mt-6 rounded-full bg-[#B8F36B] px-6 py-3 text-sm font-bold text-[#17191D] hover:bg-[#D0FF9A]"
            >
              Clear filters
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
