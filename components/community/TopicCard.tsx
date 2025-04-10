"use client";

import Image from "next/image";

interface TopicCardProps {
  title: string;
  comments: string;
  people: string[];
}

export default function TopicCard({ title, comments, people }: TopicCardProps) {
  return (
    <div className="bg-[#2c2c33] rounded-xl p-5 space-y-4 text-white shadow-md hover:shadow-xl transition">
      <h4 className="text-lg md:text-3xl font-bold leading-snug">{title}</h4>
      <div>
        <p className="text-lg md:text-3xl text-gray-300">
          <span className="font-medium text-lg md:text-3xl text-white">
            {comments}
          </span>{" "}
          comments
        </p>
      </div>
      <div className="flex items-center gap-2">
        {people.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Person ${idx + 1}`}
            width={70}
            height={70}
            className="rounded-full border-2 border-white object-cover"
          />
        ))}
        <span className="text-sm text-gray-400">People</span>
      </div>
    </div>
  );
}
