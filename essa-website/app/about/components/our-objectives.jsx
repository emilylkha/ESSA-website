import React from 'react'

const objectives = [
    'To enable students to be better informed, connected and involved with current economic, financial and political issues.',
    'To foster an environment of respectful debate and discussion among students.',
    'To illustrate economics’ unique multidisciplinary appeal.',
    'To showcase the opportunities that economics offers, both in a professional and recreational setting.',
]

const OurObjectives = () => {
    return (
        <div className="bg-emerald-800 py-16 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">Our Objectives</h2>
            <p className="mt-4 text-lg text-white" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.
            </p>
          </div>
          <div className="mt-16 flex flex-col lg:flex-row items-center justify-center mx-auto">
            <div className="lg:w-3/4 p-6 bg-white shadow-lg rounded-lg mx-auto">
                <div>
                    {objectives.map((objective, index) => (
                        <p key={index} className={`mt-${index > 0 ? '2' : '0'}`}>
                            <span className='text-emerald-800 text-2xl'>{index+1}.     </span>{objective}
                        </p>
                    ))}
                </div>
            </div>
                <div className="bg-white p-6 shadow-lg rounded-lg mx-auto lg:w-1/4 mt-8 lg:mt-0 lg:ml-8">
                    <h2 className='text-black font-extrabold text-2xl'>Want to help us achieve these goals?</h2>
                    <button className='mt-4 px-6 py-3 bg-emerald-800 text-white rounded-lg shadow-md hover:bg-emerald-900 focus:outline-none'>Join Now!</button>
                </div>
            </div>
        </div>
    )
}

export default OurObjectives