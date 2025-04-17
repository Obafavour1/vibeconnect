// components/RecentEvents.tsx
import Image from "next/image";
import Link from "next/link";
import { recentEvents, IEvent } from "@/utils/utils";

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col">
      {/* Event Image */}
      <div className="relative h-36 w-full overflow-hidden mb-3">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Event Details */}
      <div className="text-white">
        <h3 className="text-sm font-medium mb-1">{event.title}</h3>
        <p className="text-xs text-gray-400 mb-3">{event.description}</p>
      </div>

      {/* Time/Venue Information */}
      <div className="text-white mt-2">
        <h4 className="text-sm font-medium mb-2">Time</h4>
        <p className="text-xs text-gray-400">
          {event.date.month} {event.date.day}th {event.date.year}
        </p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.name}</p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.address}</p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.city}</p>
        <p className="text-xs text-gray-400 mb-3">{event.venue.country}</p>

        <Link
          href={event.registerUrl}
          className="inline-block text-xs text-gray-300 hover:text-white transition-colors"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};

const RecentEvents: React.FC = () => {
  return (
    <div className="bg-black py-8 px-4 md:px-6 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header with "See all" link */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Recent Events</h2>
          <Link
            href="/events"
            className="text-sm text-pink-500 hover:text-pink-400 transition-colors"
          >
            See all
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
