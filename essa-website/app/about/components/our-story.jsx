import React from 'react'

const OurStory = () => {
    return (
        <div className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-black">About Us</h2>
            <p className="mt-4 text-lg text-black" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique.
            </p>
          </div>
          <div className="mt-16 flex flex-col lg:flex-row items-center justify-center mx-auto">
            <div className="lg:w-1/2 p-6 bg-white shadow-lg rounded-lg mx-auto">
              <h3 className="text-2xl font-bold text-black">
                The <span className="text-emerald-800">ESSA</span> Story.
              </h3>
              <p className="mt-4 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio numquam iure, explicabo architecto a aliquam enim blanditiis laborum delectus reprehenderit, debitis cum, doloremque adipisci ducimus porro dicta eos officia!
              </p>
              <p className="mt-4 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor magnam necessitatibus obcaecati dolores alias est sapiente rerum, ut quam!
              </p>
            </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
                    <img className="rounded-lg shadow-lg" src="/about-us-photo.png" alt="about-us-photo" />
                </div>
            </div>
        </div>
    )
}

export default OurStory