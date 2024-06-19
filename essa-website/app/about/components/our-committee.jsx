"use client";
import React, { useState } from 'react';
import { memberList } from './committee/member-list';

const OurCommittee = () => {
    const [filteredMemberList, setFilteredMemberList] = useState(memberList);

    const filterByCampus = (campus) => {
        setFilteredMemberList(
            memberList.filter(member=>{
                return member.campus === campus;
            })
        )
    }

    const campuses = Array.from(new Set(memberList.map(member=>member.campus)));
    
    const clearAllFilters = () => {
        setFilteredMemberList(memberList);
    }

    return (
        <div className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-black">Our Committee</h2>
                <p className="mt-4 text-lg text-black" >
                    Meet the people responsible for blahblahblah.
                </p>  
            </div>
            <div>
                <button onClick={() => filterByCampus('Monash Clayton')}>Monash Clayton</button>
                <button onClick={() => filterByCampus('Monash Caulfield')}>Monash Caulfield</button>
                <button onClick={() => filterByCampus('Melbourne')}>Universtiy of Melbourne</button>
                <button onClick={() => clearAllFilters()}>Clear Filters</button>
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