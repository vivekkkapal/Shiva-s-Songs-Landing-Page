import React from "react";

const ArtistLandingPage = () => {
  const services = [
    { name: "Apple Music", link: "#", type: "Play" },
    { name: "Spotify", link: "#", type: "Play" },
    { name: "YouTube", link: "#", type: "Play" },
    { name: "iTunes Store", link: "#", type: "Download" },
    { name: "YouTube Music", link: "#", type: "Play" },
    { name: "Amazon Music", link: "#", type: "Play" },
    { name: "SoundCloud", link: "#", type: "Play" },
    { name: "Deezer", link: "#", type: "Play" },
    { name: "Tidal", link: "#", type: "Play" },
  ];

  return (

    <>
        <div id="background" className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center p-4 sm:p-6">
        {/* Video Section */}
        <div className="w-full sm:w-4/5 lg:w-3/5 mb-8">
            <div className="aspect-w-16 aspect-h-9">
            <iframe
                src="https://www.youtube.com/embed/d9aN6s-LiJE?si=MVx9CTVRlZql_4k2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[200px] sm:h-[300px] md:h-[400px]"
            ></iframe>
            <h2 className="text-2xl text-center mt-3"> Shiva - Launde Pareshaan</h2>
            </div>
        </div>

        {/* Music Services Section */}
        <div className="w-full max-w-md">
            {services.map((service, index) => (
            <div
                key={index}
                className="flex items-center justify-between bg-gray-800 p-3 sm:p-4 rounded-lg mb-3 shadow hover:bg-gray-700"
            >
                <span className="text-sm sm:text-lg">{service.name}</span>
                <a
                href={service.link}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 text-sm sm:text-base"
                >
                {service.type}
                </a>
            </div>
            ))}
        </div>

        {/* Footer Section */}
        <footer className="text-gray-500 text-xs sm:text-sm mt-10 text-center">
            <h1 className="text-white">Shiva</h1>
            <p className="mt-1 text-white">This is my all streming links.</p>
        </footer>
        </div>
    </>
  );
};

export default ArtistLandingPage;
