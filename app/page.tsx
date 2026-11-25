
"use client";

import { useState } from "react";
import Link from "next/link";
import { rooms } from "../data/data";

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
    <main className="min-h-screen bg-[#17191D] text-[#F4F0E8]">

      {/* HERO SECTION */}
      <section className="px-6 pt-14 pb-20 md:px-12 lg:px-20 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#B8F36B]"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
                Your campus. Your space.
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-[1.08] md:text-7xl lg:text-8xl">
              Make room
              <br />
              for <span className="italic text-[#B8F36B]">great</span>
              <br />
              ideas.
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-[#A5A7A3]">
              Whether you're studying solo, working on a group project
              or bringing an idea to life, there's a space waiting for you.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#spaces"
                className="rounded-full bg-[#B8F36B] px-8 py-4 text-sm font-bold text-[#17191D] transition hover:bg-[#D0FF9A]"
              >
                Find your space ↗
              </a>

              <span className="text-sm text-[#A5A7A3]">
                Spaces made for what matters.
              </span>
            </div>

            <div className="mt-14 flex gap-10 border-t border-[#383B40] pt-7">
              <div>
                <p className="text-3xl font-bold text-[#B8F36B]">
                  06<span className="text-lg">+</span>
                </p>
                <p className="mt-1 text-xs text-[#A5A7A3]">
                  Unique spaces
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">01</p>
                <p className="mt-1 text-xs text-[#A5A7A3]">
                  Easy booking platform
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">∞</p>
                <p className="mt-1 text-xs text-[#A5A7A3]">
                  Ideas to explore
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#B8F36B]/40"></div>

            <div className="relative h-[380px] overflow-hidden md:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Modern collaborative workspace"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17191D]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-7 left-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8F36B]">
                  The ROOMÉ experience
                </p>
                <p className="mt-2 text-2xl font-[family-name:var(--font-playfair)]">
                  A space for every idea.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden bg-[#B8F36B] px-6 py-5 text-[#17191D] sm:block">
              <p className="text-xs font-bold uppercase tracking-widest">
                Find it.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest">
                Book it.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest">
                Make it count.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ROOM DIRECTORY */}
      <section
        id="spaces"
        className="border-t border-[#383B40] bg-[#1D2025] px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
                01 / Find your fit
              </p>

              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
                Explore our spaces<span className="text-[#B8F36B]">.</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#A5A7A3]">
                Different spaces. Different possibilities. Find the right
                environment for whatever you have planned.
              </p>
            </div>

            <p className="text-sm text-[#B8F36B]">
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <span className="absolute left-4 top-4 rounded-full bg-[#B8F36B] px-4 py-2 text-xs font-bold text-[#17191D]">
                      Available
                    </span>

                    <span className="absolute bottom-4 right-4 text-sm font-semibold text-white">
                      0{index + 1} / 06
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#B8F36B]">
                      {room.building}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl">
                        {room.name}
                      </h3>

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
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl">
                No spaces found.
              </h3>

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
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-[#B8F36B] p-8 text-[#17191D] md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Your next session starts here
            </p>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              Stop searching. Start creating.
            </h2>
          </div>

          <a
            href="#spaces"
            className="shrink-0 rounded-full bg-[#17191D] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#292D30]"
          >
            Explore spaces ↗
          </a>
        </div>
      </section>

    </main>
  );
}
