"use client";
// components/ExclusiveRewards.jsx
import { useState } from "react";
import Image from "next/image";

import { rewardData } from "@/utils/utils";

// Using interface
interface Reward {
  id: number;
  title: string;
  price: string;
  interests: string;
  image: string;
  alt: string;
}

interface IReward {
  reward: Reward;
}

const ExclusiveRewards = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Exclusive Rewards</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rewardData.map((reward) => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
};

const RewardCard = ({ reward }: IReward) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden h-64 cursor-pointer transition-transform duration-300 transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* For development purposes, use placeholder images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={reward.image || `/api/placeholder/400/320`}
          alt={reward.alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Card content */}
      <div className="absolute bottom-0 left-0 w-full  z-10">
        <div className="bg-pink-800/20 backdrop-blur-3xl rounded-lg p-3">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-white font-medium text-lg">{reward.title}</h3>
            <span className="text-white text-sm font-medium">
              {reward.price}
            </span>
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-pink-500 text-sm ml-1">
              {reward.interests}
            </span>
          </div>
        </div>
      </div>

      {/* Hover effect - optional glow */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent animate-pulse"></div>
      )}
    </div>
  );
};

export default ExclusiveRewards;
