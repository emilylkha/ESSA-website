'use client'

import React, { useState } from 'react';
import RotatingImages from "../ui/rotating-images";
import EventCard from '../ui/event/event-card';
import { eventsList } from '../ui/event/events-list';
import FilterDropdown from '../ui/filters/filterdropdown';

export default function eventsPage() {
    // fetch eventsList from backend later

    const images = ["/event-ballons-photo.jpeg", "/event-night-photo.jpeg"]
    const interval = 5000;
    
    const [typeFilter, setTypeFilter] = useState('All');
    const [campusFilter, setCampusFilter] = useState('All');
  
    const filteredEvents = eventsList.filter(event => 
      (typeFilter === 'All' || event.type === typeFilter) && 
      (campusFilter === 'All' || event.campus === campusFilter)
    );
    
    const filterOptions = {
        type: ['All', 'Career', 'Social', 'Education'],
        campus: ['All', 'Uni Melb', 'Clayton', 'Caulfield'],
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
                    <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </main>
    )
}