import ExclusiveRewards from "@/components/community/ExclusiveReward";
import TrendingTopics from "@/components/community/TrendingTopics";
import NFTSlider from "@/components/NFTSlider";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="bg-[#222227] pt-20 sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/communityHeroBg.svg')] bg-cover min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-no-repeat">
        <div className="text-white w-full md:w-10/12 lg:w-8/12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Showcase Your Talent, Connect with Fans And Find Opportunities
          </h2>
          <p className="text-lg sm:text-xl font-normal my-4 sm:my-5 md:my-6">
            Join a vibrant community where local artists and musicians can
            showcase their work, connect with fans, and discover new performance
            opportunities
          </p>
        </div>
      </section>

      <TrendingTopics />

      <div className="bg-[#222227]">
        <section className="pt-10  md:pt-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/communityMic.svg')] bg-contain min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]  bg-no-repeat">
          <div className="text-white w-full md:w-10/12 lg:w-8/12 mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Own a Piece of the Music Revolution
            </h2>
            <p className="text-lg sm:text-xl font-normal my-4 sm:my-5 md:my-6">
              Discover limited-edition music NFTs from your favorite artist.
              collect, trade, and support creators while unlocking exclusive
              perks like backstage access, unreased tracks, and VIP event
              invitations.
            </p>
          </div>
        </section>

        <ExclusiveRewards />

        <NFTSlider />
      </div>
    </main>
  );
};

export default page;
