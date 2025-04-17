// components/NFTSlider.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { nftItems, NFTItem } from "@/utils/utils";
// import { nftItem } from "@/utils/utils";

const NFTSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the album cover centered
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? nftItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === nftItems.length - 1 ? 0 : prev + 1));
  };

  // This function returns the appropriate size and z-index based on position relative to current
  const getCardStyle = (index: number) => {
    // Distance from current (accounting for wrap-around)
    const distance = Math.abs(index - currentIndex);

    if (index === currentIndex) {
      return "scale-110 z-30"; // Highlighted card
    } else if (
      distance === 1 ||
      (currentIndex === 0 && index === nftItems.length - 1) ||
      (currentIndex === nftItems.length - 1 && index === 0)
    ) {
      return "scale-90 z-20"; // Adjacent cards
    } else {
      return "scale-80 z-10"; // Further cards
    }
  };

  // We need this for SSR compatibility
  if (!isClient) {
    return <div className="h-96 bg-gray-900"></div>;
  }

  return (
    <div className="w-full  py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Limited-Edition
          <br />
          NFTs
        </h2>

        {/* Slider container */}
        <div className="relative h-80">
          {/* NFT Cards */}
          <div className="flex w-full gap-5 justify-center items-center h-full">
            {nftItems.map((item, index) => {
              // Calculate position
              let position = index - currentIndex;
              if (position < -2) position += nftItems.length;
              if (position > 2) position -= nftItems.length;

              // Determine if card should be visible
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <NFTCard
                  key={item.id}
                  item={item}
                  className={`absolute transition-all duration-300 ${getCardStyle(
                    index
                  )}`}
                  style={{
                    transform: `translateX(${position * 120}px)`,
                    opacity: Math.abs(position) === 2 ? 0.7 : 1,
                  }}
                />
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity z-40"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity z-40"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {nftItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface NFTCardProps {
  item: NFTItem;
  className?: string;
  style?: React.CSSProperties;
}

const NFTCard: React.FC<NFTCardProps> = ({ item, className, style }) => {
  return (
    <div
      className={`w-72 h-64 rounded-xl overflow-hidden ${item.backgroundColor} ${className}`}
      style={style}
    >
      <div className="h-3/4 relative">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`font-medium text-sm ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`text-xs opacity-70 ${item.textColor}`}>
              {item.quantity}
            </p>
          </div>
          <div className="text-right">
            <p className={`font-semibold text-sm ${item.textColor}`}>
              {item.price} {item.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSlider;
