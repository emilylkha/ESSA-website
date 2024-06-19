'use client'

import React, { useState } from 'react';
import RotatingImagesHeader from "../ui/rotating-images-header";
import PastEventCard from '../ui/event/past-event-card';
import { eventsList } from '../ui/event/events-list';
import FilterDropdown from '../ui/filters/filterdropdown';
import { EventType } from '../ui/event/event-type';
import EventModal from '../ui/event/event-modal';
import UpcomingEventCard from '../ui/event/upcoming-event-card';

export default function Events() {
    // fetch eventsList from backend later

    const images = ["/event-ballons-photo.jpeg", "/event-night-photo.jpeg"]
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
        <main className="flex min-h-screen w-full flex-col items-center">
            <RotatingImagesHeader images={images} height={40} title={"Events"}/>
            <div className="w-full p-10 pb-32 pt-10">
                <h2 className="text-4xl font-bold my-10">Upcoming Events</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEventsList.map((event) => (
                        <UpcomingEventCard key={event.id} event={event} onClick={() => openModal(event)}/>
                    ))}
                </div>
            </div>
            <div className="w-full p-10 pb-32 pt-14 bg-zinc-100">
                <h2 className="text-4xl font-bold my-8">Past Events</h2>
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
                        <PastEventCard key={event.id} event={event} onClick={() => openModal(event)}/>
                    ))}
                </div>
            </div>
            {/* Modal */}
            {showModal && selectedEvent && (
                <EventModal key={selectedEvent.id} event={selectedEvent} onClose={closeModal} />
            )}
        </main>
    )
}