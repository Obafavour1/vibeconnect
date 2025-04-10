import { NewMusicData, TrendingData } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <section className="text-white bg-gradient-to-b from-[#180E0F] to-[#121212] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div>
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Discover New Sounds and Rising Starts
          </h3>
          <p className="text-lg sm:text-xl mt-4 sm:mt-5">
            Explore music artists, fresh tracks and upcoming events tailored for
            you
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="flex justify-between items-center">
            <h4 className="text-lg sm:text-xl font-bold">Trending Artists</h4>
            <Link
              className="text-[#FF007F] text-base sm:text-lg lg:text-xl font-normal"
              href="#"
            >
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-11">
            {TrendingData.map((trending) => {
              return (
                <div key={trending.name} className="text-center">
                  <div className="relative w-full aspect-square max-w-[220px] mx-auto">
                    <Image
                      src={trending.img}
                      alt={trending.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg sm:text-xl my-3">{trending.name}</p>
                  <p className="text-base sm:text-lg">{trending.role}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="flex justify-between items-center">
              <h4 className="text-lg sm:text-xl font-bold">
                New Music Release
              </h4>
              <Link
                className="text-[#FF007F] text-base sm:text-lg lg:text-xl font-normal"
                href="#"
              >
                See more
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-11">
              {NewMusicData.map((music) => {
                return (
                  <div key={music.name} className="text-center">
                    <div className="relative w-full aspect-square max-w-[210px] mx-auto">
                      <Image
                        src={music.img}
                        alt={music.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-lg sm:text-xl my-3">{music.name}</p>
                    <p className="text-base sm:text-lg">{music.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
