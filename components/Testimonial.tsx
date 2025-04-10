"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-[#1a1a1a] text-white p-6 sm:p-10 md:p-16 mt-32">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        Testimonial
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="max-w-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            The VibeConnect Experience
          </h3>
          <p className="text-sm sm:text-base text-white/80 mb-6">
            Discover how artists, event planners, and fans are transforming
            their music experiences with VibeConnect. See what they have to say!
          </p>
          <button className="bg-[#ff1fb3] hover:bg-pink-600 transition px-5 py-3 text-white rounded-full font-semibold">
            View More
          </button>
        </div>

        {/* Right Testimonials */}
        <div className="flex flex-col space-y-6 w-full lg:max-w-xl">
          {/* Testimonial 1 - Angel */}
          <div className="bg-white rounded-[20px] pl-4 pr-1 py-1">
            <div className="bg-[#222227] rounded-[20px] flex items-start gap-4 p-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/angel.svg"
                  alt="Angel"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-lg font-bold">Angel</h4>
                  <span className="text-2xl font-bold text-white">”</span>
                </div>
                <p className="text-sm text-white/80">
                  A game changer for independent artists!
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Darlene (highlighted) */}
          <div className="bg-[#ff1fb3] flex  rounded-[20px] pl-4 pr-1 py-1">
            {/* <div className="w-5 rounded-l-[20px] h-[120px] bg-white"></div> */}
            <div className="bg-[#222227] rounded-r-[20px] flex items-start gap-4 p-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/darlene.svg"
                  alt="Darlene"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-lg font-bold">Darlene</h4>
                  <span className="text-2xl font-bold text-white">”</span>
                </div>
                <p className="text-sm text-white/80">
                  I have grown my fanbase and made real connections with other
                  artists. VibeConnect is the future of the music industry
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Philip */}
          <div className="bg-white rounded-[20px] pl-4 pr-1 py-1">
            <div className="bg-[#222227] rounded-[20px] flex items-start gap-4 p-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/philip.svg"
                  alt="Philip"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-lg font-bold">Philip</h4>
                  <span className="text-2xl font-bold text-white">”</span>
                </div>
                <p className="text-sm text-white/80">
                  I love how VibeConnect brings artists, fans, and event
                  planners together in one seamless experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
