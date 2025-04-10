import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="pt-24 md:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/artistHeroBg.svg')] bg-cover min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-no-repeat">
        <div className="text-center text-white mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Stage, Your Sound, Your Spotlight
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-6 max-w-2xl mx-auto">
            Step into a platform built for artists like you. Upload your music,
            book gigs, and engage with a thriving community
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 sm:px-12 md:px-16 rounded-full transition duration-300 w-full sm:w-fit"
            >
              Join as an Artist
            </button>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 md:mt-24">
          <div className="flex justify-center">
            <Image
              src="/images/artistpic1.svg"
              alt="Artist 1"
              width={295}
              height={220}
              className="object-contain w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/artistpic2.svg"
              alt="Artist 2"
              width={243}
              height={220}
              className="object-contain w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/artistpic3.svg"
              alt="Artist 3"
              width={295}
              height={220}
              className="object-contain w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/artistpic4.svg"
              alt="Artist 4"
              width={145}
              height={220}
              className="object-contain  max-w-xs"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 ">
        <div className="px-6 md:px-12 lg:px-24">
          {/* Main Section */}
          <div className="grid md:grid-cols-2 md:flex-row gap-10 md:gap-24 items-center justify-between">
            <div className="flex-1 max-md:order-2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Turn Your Passion <br /> Into Profit
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Got true creativity? With VibeConnect, you can sell your music,
                offer exclusive content, and earn from fan support, gigs, and
                unlock new revenue streams.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-[20px] transition duration-300">
                STARTING NOW
              </button>
            </div>
            <div className="relative w-[250px] max-md:order-1 mx-auto  md:w-[520px] h-[200px] md:h-[520px] mb-6">
              <Image
                src="/images/artistpassion.svg" // Replace with your image path
                alt="Person with headphones"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Secondary Section */}
          <div className="relative grid md:grid-cols-2 mt-16 md:flex-row gap-10 md:gap-24 items-center justify-between">
            <div className="absolute w-full h-full -top-32">
              <Image
                src="/images/artistoverlayBg.svg" // Replace with your image path
                alt="overlay"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="relative  w-[250px] mx-auto  md:w-[520px] h-[200px] md:h-[520px] md:mb-6">
              <Image
                src="/images/artistexclusive.svg" // Replace with your image path
                alt="Person with headphones"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                EXCLUSIVE ACCESS
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-pink-500 mb-4">
                Unmatched Connection
              </h3>
              <p className="text-base md:text-lg text-gray-300 text-center md:text-left">
                Your true fans deserve more—they crave an unmatched connection.
                With VibeConnect, you can offer VIP content, private
                mentorships, early access to feedback, and turn listeners into
                dedicated supporters. Build your inner circle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1a1a1a] text-white ">
        {/* First Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Own the Stage.{" "}
            <span className="text-white/80">Expand Your Reach</span>
          </h2>

          {/* Image Collage */}
          <div className="flex justify-center gap-4 mb-8 relative">
            <div className="w-24 h-36 md:w-32 md:h-48 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/artiststage1.svg"
                alt="Performance 1"
                width={180}
                height={209}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-28 h-40 md:w-36 md:h-52 overflow-hidden rounded-xl shadow-lg z-10">
              <Image
                src="/images/artiststage2.svg"
                alt="Performance 2"
                width={235}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-24 h-36 md:w-32 md:h-48 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/artiststage3.svg"
                alt="Performance 3"
                width={180}
                height={209}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/80 mb-6">
            Every performance is a chance to grow your fanbase and elevate your
            career. With VibeConnect, you can discover exclusive gigs, book
            performances, and showcase your talent to the right audience.
            Whether it is live concerts, virtual events, or private shows, this
            is your gateway to the spotlight.
          </p>

          {/* Button */}
          <button className="bg-[#ff1fb3] text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition">
            Get Booked. Get Seen
          </button>
        </section>

        {/* Second Section */}
        <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-[#111111]">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Own the Mic.{" "}
              <span className="text-white/80">Command the Stage</span>
            </h2>
            <p className="text-sm md:text-base text-white/80 mb-6">
              Spoken words and poetry are more than just art, they are a
              performance. With VibeConnect, you can secure exclusive gigs,
              perform on premium stages, and captivate audiences with your
              voice.
            </p>
            <button className="bg-[#ff1fb3] text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition">
              Step into the Spotlight
            </button>
          </div>

          {/* Microphone Image */}
          <div className=" h-[200px] w-[200px] md:h-[400px] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/artistmic.svg"
              alt="Microphone close-up"
              width={416}
              height={505}
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="bg-[#222227] py-20 sm:py-24 md:py-32 text-center text-white">
          <div className="w-full max-w-3xl px-4 sm:px-6 mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Experience VibeConnect. Free for 30 Days!
            </h3>
            <p className="mt-6 mb-8 text-base sm:text-lg md:text-xl font-normal">
              Take your career to the next level with a 30-day free trial of
              VibeConnect. Explore exclusive monetization tools, fan engagement
              features, gig opportunities, and more.
            </p>
            <button className="bg-[#ff1fb3] hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition w-full sm:w-auto">
              Start Your Free Trial Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
