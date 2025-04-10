import Faq from "@/components/Faq";
import Prices from "@/components/pricing/Prices";
import Testimonial from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <main className="bg-black text-white">
      <div>
        <section className="pt-20 h-[500px] sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/pricingHeroBg.svg')] bg-cover min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-no-repeat">
          <div className="text-white w-full md:w-10/12 lg:w-8/12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Unlock Your Full Potential
            </h2>
            <p className="text-lg sm:text-xl font-normal my-4 sm:my-5 md:my-6">
              Choose a plan that fits your music journey. Whether you are just
              starting or ready to take over the stage, VibeConnect has the
              tools to help you grow, engage, and monetize like never before.
            </p>
          </div>
        </section>

        <div className="min-h-[1700px] pt-5 md:min-h-[1100px]">
          <Prices />
        </div>

        <Testimonial />

        <Faq />

        <section className="text-center p-8 sm:p-12 md:p-16 lg:p-24">
          <div className="w-full md:w-10/12 lg:w-9/12 mx-auto px-4 sm:px-6 md:px-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Start Your Journey Today
            </h3>
            <p className="text-lg sm:text-xl font-normal my-6 sm:my-8 md:my-10">
              Pick a plan that fits your music career and unlock powerful tools
              to grow, engage, and monetize. Whether you are an artist, event
              planner, or fan, VibeConnect has the perfect option for you.
            </p>
            <button
              type="button"
              className="btn w-full sm:w-8/12 md:w-6/12 mx-auto"
            >
              Get Started Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
