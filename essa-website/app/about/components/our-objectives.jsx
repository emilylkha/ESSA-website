import React from 'react'

const objectives = [
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.',
]

const OurObjectives = () => {
    return (
        <div className="bg-emerald-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className='max-w-4xl mx-auto px-4 text-center'>
                <h2 className='text-3xl font-extrabold text-white mb-8'>Our Objectives</h2>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row items-center justify-center px-4 md:space-y-0 md:space-x-8'>
                <div className='lg:w-2/3 p-6 bg-white shadow-lg rounded-lg'>    
                    {objectives.map((objective, index) => (
                        <p key={index}><span className='text-emerald-800 text-2xl'>{index+1}.     </span>{objective}</p>
                    ))}
                </div>
                <div className='lg:w-1/3 p-6 bg-white shadow-lg rounded-lg'>    
                    <h2 className='text-2xl font-bold text-black'>Want to help us achieve these goals?</h2>
                    <button className='mt-4 px-6 py-3 bg-emerald-800 text-white rounded-lg shadow-md hover:bg-emerald-900 focus:outline-none'>Join Now!</button>
                </div>
            </div>
        </div>
    )
}

export default OurObjectives
