import RotatingImagesHeader from "./ui/rotating-images-header";
import Sponsors from "./components/sponsors";
export default function Home() {
  const images = ['/uni-melb-photo.png','/about-us-photo.png']
  const interval = 5000;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <RotatingImagesHeader images={images} height={60} title={"Economics Student Society of Australia"}/>
      <section className="w-full max-w-5xl text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Economics Student Society of Australia</h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering the next generation of economists through education, networking, and professional development.
        </p>
        <h2 className="section-heading">Join our events</h2>
        <p>Check out the exciting events we have planned over the next month, across our University of Melbourne, Monash Caulfield and Clayton campuses!</p>
        <a href="/events" className="link">See all our events</a>
        <h2 className="section-heading">Sponsors and Partners</h2>
        <div>
            <Sponsors/>
        </div>
        <h2 className="section-heading">Recent Publications</h2>
        <a href="#" className="link">See all our publications</a>
        <h2 className="section-heading">Read our articles</h2>
        <a href="/articles" className="link">Check out our most recent articles</a>
        <h2 className="section-heading">Updates Guides</h2>

        <div className="my-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            The Economics Student Society of Australia (ESSA) is dedicated to fostering a vibrant community for students
            passionate about economics. Our mission is to provide valuable opportunities for learning, networking, and
            professional growth. We organize a range of events, including guest lectures, workshops, and networking sessions
            to help students connect with industry professionals and enhance their understanding of the field.
          </p>
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
          <ul className="text-lg text-gray-600 list-disc list-inside">
            <li>Economic Trends and Analysis Seminar - July 15, 2024</li>
            <li>Networking Night with Industry Leaders - August 22, 2024</li>
            <li>Annual Economics Conference - September 30, 2024</li>
          </ul>
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Become a member of ESSA and gain access to exclusive events, resources, and a community of like-minded individuals.
            Whether you are looking to expand your knowledge, build your professional network, or contribute to the field of
            economics, ESSA has something to offer.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
