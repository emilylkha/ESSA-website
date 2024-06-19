'use client'
import React from 'react';
import { EventType } from './event-type';
import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  event: EventType;
  onClick: () => void; // Callback function to open modal
}

const UpcomingEventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
<div className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition duration-400 hover:scale-105 cursor-pointer" onClick={onClick}>
  <div>
      {/* Event Image */}
      <div className="relative h-48 mb-4">
        <Image src={event.image} alt={event.name} fill={true} className="object-cover" />
      </div>
      {/* Event Details */}
      <div className="p-4">
        {/* Event Name */}
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>

        {/* Event Date and Time */}
        <p className="text-gray-600 mb mb-1">{event.date} | {event.time}</p>

        {/* Event Location */}
        <p className="text-gray-600 mb-3 italic">{event.address}</p>

        {/* Event Description */}
        <p className="text-gray-800">{event.description}</p>
        
        {/* Event Tags */}
        <div className="flex gap-2 mt-4">
          <p className="bg-emerald-100 rounded-lg p-1">{event.campus}</p>
          <p className="bg-emerald-200 rounded-lg p-1">{event.type}</p>
        </div>
      </div>
      </div>
      {/* Registration Link (if it's an upcoming event) */}
      {event.isUpcoming && ( 
        <div className="flex gap-4 m-4">
          <button className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900">
            <Link href={event.registrationLink} >Register Now!</Link>
          </button>
        </div>
        )}
        
    </div>
  );
};

export default UpcomingEventCard;
