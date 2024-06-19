'use client'
import React from 'react';
import { EventType } from './event-type';
import Image from 'next/image';

interface EventCardProps {
  event: EventType;
  onClick: () => void; // Callback function to open modal
}

const PastEventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div className="border bg-white rounded-lg p-4 transition duration-400 hover:scale-105 cursor-pointer" onClick={onClick}>
      <div className="relative h-48 mb-4">
        <Image src={event.image} alt={event.name} fill={true} className="rounded-md object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-2">{event.date}</p>
        <div className="flex gap-2">
        <p className="bg-emerald-100 rounded-lg p-1">{event.campus}</p>
        <p className="bg-emerald-200 rounded-lg p-1">{event.type}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
