"use client";
import React, { useState } from 'react';
import { memberList } from './committee/member-list';
import FilterButtons from '@/app/ui/filters/filterbuttons';

const OurCommittee = () => {
    const [campusFilter, setCampusFilter] = useState('All');
    const filteredMemberList = memberList.filter(member => 
        (campusFilter === 'All' || member.campus === campusFilter)
    );
    const campuses = ['All', ... Array.from(new Set(memberList.map(member=>member.campus)))];

    return (
        <div className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-black">Our Committee</h2>
                <p className="mt-4 text-lg text-black pb-5">
                    Meet the people responsible for blahblahblah.
                </p> 
            </div>
            <div className="flex justify-center align-center">
                <FilterButtons selectedOption={campusFilter} onSelectOption={setCampusFilter} options={campuses}/>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredMemberList.map((member => {
                    const { id, name, role, campus, picture } = member;
                    return <li key={id}>
                        <div className="border bg-white rounded-lg p-4 transition duration-400">
                            <img src={picture || '/default-image.jpeg'} alt="member_photo" className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-bold mb-2">{name}</h3>
                            <p className="text-gray-600">{role}</p>
                            <p className="text-emerald-500 mb-4">{campus}</p>
                        </div>
                    </li>
                }))}
            </ul>
        </div>
    )
}

export default OurCommittee