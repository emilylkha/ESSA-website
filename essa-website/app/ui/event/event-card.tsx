'use client'
import React from 'react';
import { EventType } from './event-type';

interface EventCardProps {
  event: EventType;
  onClick: () => void; // Callback function to open modal
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div className="border bg-white rounded-lg p-4 transition duration-400 hover:scale-105 cursor-pointer" onClick={onClick}>
      <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-800 mb-4">{event.description}</p>
      <p className="text-gray-600">{event.campus}</p>
    </div>
  );
};

export default EventCard;
