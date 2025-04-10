import { FaqData } from "@/utils/utils";
import React from "react";

const Faq = () => {
  return (
    <section className="bg-[#222227] py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <h3 className="mb-6 sm:mb-8 md:mb-10 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
        FAQ
      </h3>
      <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FaqData.map((data) => {
          return (
            <div
              key={data.question}
              className="border border-white py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 rounded-[20px]"
            >
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {data.question}
              </h4>
              <p className="text-base sm:text-lg lg:text-xl font-normal mt-4 sm:mt-5 md:mt-6">
                {data.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
