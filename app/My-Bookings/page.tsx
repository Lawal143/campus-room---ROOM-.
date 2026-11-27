
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { rooms } from "../../data/data";

interface Booking {
  id: string;
  roomId: string;
  name: string;
  purpose: string;
  date: string;
  time: string;
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedBookings = localStorage.getItem("roome-bookings");

    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    setLoaded(true);
  }, []);

  const cancelBooking = (id: string) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);
    localStorage.setItem(
      "roome-bookings",
      JSON.stringify(updatedBookings)
    );
  };

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#17191D] p-10 text-[#F4F0E8]">
        Loading your bookings...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#17191D] px-6 py-16 text-[#F4F0E8] md:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
            YOUR ROOMÉ / RESERVATIONS
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">
            My bookings<span className="text-[#B8F36B]">.</span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#A5A7A3]">
            Keep track of your reserved spaces and upcoming sessions.
          </p>
        </div>

        {/* BOOKING COUNT */}
        <div className="mb-10 border-y border-[#383B40] py-6">
          <p className="text-sm text-[#A5A7A3]">
            Total reservations
          </p>

          <p className="mt-2 text-4xl font-bold text-[#B8F36B]">
            {bookings.length.toString().padStart(2, "0")}
          </p>
        </div>

        {/* BOOKINGS */}
        {bookings.length > 0 ? (
          <div className="space-y-5">

            {bookings.map((booking) => {
              const room = rooms.find(
                (item) => item.id === booking.roomId
              );

              return (
                <div
                  key={booking.id}
                  className="grid gap-6 border border-[#383B40] bg-[#22252A] p-6 md:grid-cols-[1fr_auto] md:items-center"
                >

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#B8F36B]">
                      {room?.building || "Campus space"}
                    </p>

                    <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl">
                      {room?.name || "Reserved room"}
                    </h2>

                    <div className="mt-5 grid gap-4 text-sm text-[#A5A7A3] sm:grid-cols-2">
                      <p>
                        <span className="text-[#F4F0E8]">Date:</span>{" "}
                        {booking.date}
                      </p>

                      <p>
                        <span className="text-[#F4F0E8]">Time:</span>{" "}
                        {booking.time}
                      </p>

                      <p>
                        <span className="text-[#F4F0E8]">Booked by:</span>{" "}
                        {booking.name}
                      </p>

                      <p>
                        <span className="text-[#F4F0E8]">Purpose:</span>{" "}
                        {booking.purpose}
                      </p>
                    </div>

                    <span className="mt-5 inline-block rounded-full bg-[#B8F36B]/10 px-4 py-2 text-xs font-semibold text-[#B8F36B]">
                      Booking confirmed
                    </span>
                  </div>

                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="border border-red-500/40 px-6 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Cancel booking
                  </button>

                </div>
              );
            })}

          </div>
        ) : (

          /* EMPTY STATE */
          <div className="border border-[#383B40] bg-[#22252A] px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#B8F36B]/10 text-3xl text-[#B8F36B]">
              +
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-playfair)] text-3xl">
              No bookings yet.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#A5A7A3]">
              You haven't reserved any spaces yet. Find a space that works
              for you and make your first booking.
            </p>

            <Link
              href="/spaces"
              className="mt-8 inline-block rounded-full bg-[#B8F36B] px-8 py-4 text-sm font-bold text-[#17191D] transition hover:bg-[#D0FF9A]"
            >
              Explore spaces ↗
            </Link>

          </div>
        )}

      </div>
    </main>
  );
}
