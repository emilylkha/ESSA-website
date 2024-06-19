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
    <div className="border shadow-md shadow-gray-200 bg-white rounded-lg p-4 transition duration-400 hover:scale-105 cursor-pointer" onClick={onClick}>
      <div className="relative h-48 mb-4">
        <Image src={event.image} alt={event.name} fill={true} className="rounded-md object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-800 mb-4">{event.description}</p>
        <p className="text-gray-600">{event.campus}</p>
        <button className="bg-emerald-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-emerald-700"><Link href={event.registrationLink}>Register Now!</Link></button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
