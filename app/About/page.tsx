
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#17191D] text-[#F4F0E8]">

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
            ABOUT ROOMÉ / OUR STORY
          </p>

          <h1 className="max-w-4xl font-[family-name:var(--font-playfair)] text-5xl leading-tight md:text-7xl">
            More than a room.
            <br />
            A place to <span className="italic text-[#B8F36B]">make things happen.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A5A7A3]">
            ROOMÉ is a campus room booking platform designed to help students
            discover and reserve spaces for studying, collaboration,
            discussions and creativity.
          </p>

          <Link
            href="/spaces"
            className="mt-9 inline-block rounded-full bg-[#B8F36B] px-8 py-4 text-sm font-bold text-[#17191D] transition hover:bg-[#D0FF9A]"
          >
            Explore available spaces ↗
          </Link>

        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="border-y border-[#383B40] bg-[#1D2025] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
              01 / Why ROOMÉ?
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-tight md:text-5xl">
              Finding the right space should be simple.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#A5A7A3]">
              Students need different environments for different activities.
              Sometimes you need a quiet place to concentrate. Other times,
              you need a room where your team can meet, share ideas and work
              together.
            </p>

            <p className="mt-5 text-base leading-8 text-[#A5A7A3]">
              ROOMÉ brings these spaces into one place, making it easier to
              find a suitable room, check available time slots and make a
              booking.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8F36B]">
              02 / The process
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              How ROOMÉ works<span className="text-[#B8F36B]">.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="border-t border-[#B8F36B] pt-6">
              <p className="text-sm font-bold text-[#B8F36B]">01</p>
              <h3 className="mt-5 text-2xl font-semibold">Discover</h3>
              <p className="mt-4 text-sm leading-7 text-[#A5A7A3]">
                Browse available campus spaces and explore their facilities,
                locations and capacities.
              </p>
            </div>

            <div className="border-t border-[#B8F36B] pt-6">
              <p className="text-sm font-bold text-[#B8F36B]">02</p>
              <h3 className="mt-5 text-2xl font-semibold">Book</h3>
              <p className="mt-4 text-sm leading-7 text-[#A5A7A3]">
                Choose a suitable date and available time slot, then submit
                your booking details.
              </p>
            </div>

            <div className="border-t border-[#B8F36B] pt-6">
              <p className="text-sm font-bold text-[#B8F36B]">03</p>
              <h3 className="mt-5 text-2xl font-semibold">Get to work</h3>
              <p className="mt-4 text-sm leading-7 text-[#A5A7A3]">
                Keep track of your reservations and make the most of your
                chosen space.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl bg-[#B8F36B] px-8 py-14 text-[#17191D] md:px-14 md:py-16">

          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            FIND YOUR SPACE. MAKE IT COUNT.
          </p>

          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
            Your next great idea needs the right space.
          </h2>

          <Link
            href="/spaces"
            className="mt-8 inline-block rounded-full bg-[#17191D] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#292D30]"
          >
            Find your space ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
