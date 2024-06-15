import React from 'react';
import { EventType } from './event-type'; // Assuming EventType definition

interface EventModalProps {
  event: EventType;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-4 md:mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{event.name}</h3>
          <button onClick={onClose}>
            <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Location: {event.campus}</p>
        <p className="mt-4">{event.description}</p>
        <p className="mt-4">{event.details}</p>
        <a href={event.registrationLink} className="mt-4 block bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg text-center" target="_blank" rel="noopener noreferrer">Register</a>
      </div>
    </div>
  );
};

export default EventModal;
