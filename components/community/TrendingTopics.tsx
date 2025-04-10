"use client";

import { trendingTopic } from "@/utils/utils";
import TopicCard from "./TopicCard";

export default function TrendingTopics() {
  return (
    <section className="bg-[#222227] py-16 px-4 sm:px-6 md:px-12 lg:px-24 text-white">
      <div className="text-center w-full lg:w-5/12 mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Hot Topics and Trending Conversations
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Stay in the loop with the latest discussions. Connect with fellow
          artists, share insights, and explore trending topics in the community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trendingTopic.map((topic, index) => (
          <TopicCard
            key={index}
            title={topic.title}
            comments={topic.comments}
            people={topic.people}
          />
        ))}
      </div>
    </section>
  );
}
