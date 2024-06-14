'use client'

import React, { useState } from 'react';
import RotatingImages from "../ui/rotating-images";
import EventCard from '../ui/event/event-card';
import { eventsList } from '../ui/event/events-list';
import FilterDropdown from '../ui/filters/filterdropdown';
import { EventType } from '../ui/event/event-type';
import EventModal from '../ui/event/event-modal';

export default function Events() {
    // fetch eventsList from backend later

    const images = ["/event-ballons-photo.jpeg", "/event-night-photo.jpeg"]
    const interval = 5000;
    const upcomingEventsList = eventsList.slice(0, 2);
    
//   const [eventsList, setEventsList] = useState<EventType[]>([]);
    const [typeFilter, setTypeFilter] = useState('All');
    const [campusFilter, setCampusFilter] = useState('All');
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [showModal, setShowModal] = useState(false);

    //   useEffect(() => {
//     // Example: Fetch events list from backend API
//     fetch('/api/events')
//       .then(response => response.json())
//       .then(data => setEventsList(data.events))
//       .catch(error => console.error('Error fetching events:', error));
//   }, []); // Runs once on component mount
  
    const filteredEvents = eventsList.filter(event => 
      (typeFilter === 'All' || event.type === typeFilter) && 
      (campusFilter === 'All' || event.campus === campusFilter)
    );
    
    const filterOptions = {
        type: ['All', 'Career', 'Social', 'Education'],
        campus: ['All', 'Uni Melb', 'Clayton', 'Caulfield'],
    };
    
    const openModal = (event: EventType) => {
        setSelectedEvent(event);
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex h-[40vh] w-full relative overflow-hidden">
                <RotatingImages images={images} interval={interval} />
            </div>
            <div className="flex flex-col w-full bg-emerald-950 p-10 justify-evenly">
                <h1 className="text-white text-6xl">Events</h1>
            </div>
            <section className="container mx-auto p-8">
                <div className="pb-32">
                    <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {upcomingEventsList.map((event) => (
                            <EventCard key={event.id} event={event} onClick={() => openModal(event)}/>
                        ))}
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-center">Past Events</h2>
                <div className="flex flex-wrap justify-spaced mb-8 gap-5">
                    <FilterDropdown
                    label={`Type: ${typeFilter}`}
                    options={filterOptions.type}
                    selectedOption={typeFilter}
                    onSelectOption={setTypeFilter}
                    />
                    <FilterDropdown
                    label={`Campus: ${campusFilter}`}
                    options={filterOptions.campus}
                    selectedOption={campusFilter}
                    onSelectOption={setCampusFilter}
                    />
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} onClick={() => openModal(event)}/>
                    ))}
                </div>
            </section>
            {/* Modal */}
            {showModal && selectedEvent && (
                <EventModal key={selectedEvent.id} event={selectedEvent} onClose={closeModal} />
            )}
        </main>
    )
}