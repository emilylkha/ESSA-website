"use client";
import React, { useState } from 'react';
import { memberList } from './committee/member-list';
import FilterButtons from '@/app/ui/filters/filterbuttons';

const OurCommittee = () => {

    // Example of how to use FilterButtons component
    const [campusFilter, setCampusFilter] = useState('All');
    const filteredMemberList = memberList.filter(member => 
        (campusFilter === 'All' || member.campus === campusFilter)
    );
    const campuses = ['All', ... Array.from(new Set(memberList.map(member=>member.campus)))];

    return (
        <div className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-black">Our Committee</h2>
                <p className="mt-4 text-lg text-black" >
                    Meet the people responsible for blahblahblah.
                </p>  
            </div>
            <div className="flex justify-center align-center">
                <FilterButtons selectedOption={campusFilter} onSelectOption={setCampusFilter} options={campuses}/>
            </div>
            <ul>
                {filteredMemberList.map((member => {
                    const { id, name, role, campus } = member;
                    return <li key={id}>
                        <div>
                            <h3>{name}</h3>
                            <p>{role}</p>
                            <p className='text-emerald-500'>{campus}</p>
                        </div>
                    </li>
                }))}
            </ul>
        </div>
    )
}

export default OurCommittee