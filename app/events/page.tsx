import UpcomingEvents from "@/components/event/EventCard";
import RecentEvents from "@/components/event/RecentCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="pt-24 md:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/events/eventBg.svg')] bg-cover min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-no-repeat">
        <div className="text-center text-white mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Join the Experience Celebrate the Vibe
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-6 max-w-2xl mx-auto">
            Do not just hear it, be part of the moment.
          </p>
          <div className="mt-16 w-7/12 mx-auto opacity-60 backdrop-blur-2xl rounded-2xl bg-pink-900 px-10 py-3 flex justify-between items-center">
            <div className="border-r border-white pr-10">Enter location</div>
            <div className="border-r border-white pr-10">17 Mar 2025</div>
            <div>Event</div>
          </div>
        </div>
      </section>

      <UpcomingEvents />

      <RecentEvents />

      <section className="px-24 py-24 bg-[#222227]">
        <div className="grid grid-cols-2 text-white gap-20">
          <div>
            <h3 className="text-3xl font-bold">
              Host Your Event. Reach the Right Audience
            </h3>
            <p className="text-xl my-[25px]">
              Bring your event to life with VibeConnect. Whether a live concert,
              open mic, album lauch, or private showcase, we connect you with
              the right aundience and help you manage everything seamlessly.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 sm:px-12 md:px-16 rounded-full transition duration-300 w-full sm:w-fit"
              >
                Host Your Event Today
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/events/eventaudience.svg"
              alt=""
              width={385}
              height={379}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
