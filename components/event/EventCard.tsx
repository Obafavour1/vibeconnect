// components/UpcomingEvents.tsx
import Image from "next/image";
import Link from "next/link";
import { upcomingEvents, Event } from "@/utils/utils";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col">
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden mb-3">
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

      {/* Divider */}
      <div className="border-t border-gray-700 my-3"></div>

      {/* Time/Venue Information */}
      <div className="text-white">
        <h4 className="text-sm font-medium mb-2">Time</h4>
        <p className="text-xs text-gray-400">
          {event.date.month} {event.date.day}th {event.date.year}
        </p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.name}</p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.address}</p>
        <p className="text-xs text-gray-400 mb-1">{event.venue.city}</p>
        <p className="text-xs text-gray-400 mb-3">{event.venue.country}</p>

        <Link
          href={event.ticketUrl}
          className="inline-block text-xs text-pink-500 hover:text-pink-400 transition-colors"
        >
          Buy Ticket
        </Link>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  return (
    <div className="bg-gray-900 py-8 px-4 md:px-6 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h3 className=" text-white w-7/12 text-center mx-auto mt-10 mb-20 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Exciting Events Ahead Book Your Spot
        </h3>
        {/* Header with "See all" link */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
          <Link
            href="/events"
            className="text-sm text-pink-500 hover:text-pink-400 transition-colors"
          >
            See all
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
