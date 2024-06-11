import React from 'react';
import RotatingImages from "../ui/rotating-images";

export default function events() {
    const images = ["/event-ballons-photo.jpeg", "/event-night-photo.jpeg"]
    const interval = 5000;
    const eventsList = [
        {
          id: 1,
          title: 'Economic Growth and Policies',
          date: '2024-06-15',
          location: 'Melbourne, Australia',
          description: 'A detailed discussion on economic growth and the policies influencing it.',
        },
        {
          id: 2,
          title: 'Financial Markets and Investment',
          date: '2024-07-10',
          location: 'Sydney, Australia',
          description: 'An in-depth analysis of financial markets and investment strategies.',
        },
        {
          id: 3,
          title: 'Global Trade and Commerce',
          date: '2024-08-05',
          location: 'Brisbane, Australia',
          description: 'Exploring the intricacies of global trade and commerce.',
        },
      ];
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex h-[40vh] w-full relative overflow-hidden">
                <RotatingImages images={images} interval={interval} />
            </div>
            <div className="flex flex-col w-full bg-emerald-950 p-10 justify-evenly">
                <h1 className="text-white text-6xl">Events</h1>
            </div>
            <div className="container mx-auto p-10">
                <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {eventsList.map(event => (
                    <div key={event.id} className="border border-gray-300 rounded-lg p-4 shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                        <p className="text-gray-600 mb-1">{new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-gray-600 mb-4">{event.location}</p>
                        <p className="text-gray-700">{event.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </main>
    )
}