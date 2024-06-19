// components/EventModal.tsx
import React from 'react';
import Modal from '../../ui/modal';
import Link from 'next/link';
import { EventType } from './event-type';
import Image from 'next/image';

interface EventModalProps {
  event: EventType; // Assuming EventType is defined
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const renderDetails = () => {
    return (
      <>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Location: {event.campus}</p>
        <p className="mt-4">{event.description}</p>
        {event.details.map((detail, index) => (
          <p key={index} className="mt-4">{detail}</p>
        ))}
      </>
    );
  };

  const renderRegistrationButton = () => {
    if (event.isUpcoming && event.registrationLink) {
      return (
        <button className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900">
          <Link href={event.registrationLink}>Register Now!</Link>
        </button>
      );
    }
    return null;
  };

  return (
    <Modal title={event.name} onClose={onClose}>
      <div className="flex justify-center mb-8">
        {event.image && (
          <Image src={event.image} alt={event.name} width={400} height={250} className="rounded-lg" />
        )}
      </div>
      {renderDetails()}
      {renderRegistrationButton()}
    </Modal>
  );
};

export default EventModal;
