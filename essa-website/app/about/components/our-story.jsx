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
              <p className="mt-4 text-black leading-8">
                The Economics Student Society of Australia was founded in 2012 at the University of Melbourne. Starting as a group of friends with a mutual love for economics, ESSA has now become the largest economics society of its kind in Australia, spanning across both the University of Melbourne and Monash University. We strive to connect students, professionals and academics to create a passionate and informed economics community.
              </p>
              <p className="mt-4 text-black leading-8">
                We aim to provide economic students guidance in selecting their study paths and career pathways. Assisting them in creating personal relationships with the broader economics community and developing their skill set. We hope to foster an environment stimulating discussion amongst students on economic issues of importance and illustrate economics' unique multidisciplinary appeal. Ultimately, we strive to connect students, professionals and academics to create a passionate and informed economics community
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