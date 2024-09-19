import React from "react";

// Array holding the data for each section
const contentData = [
  {
    title: "Unicorn built-in",
    description:
      "Rhino Linux comes preinstalled with its own in-house desktop experience, Unicorn, a custom-built XFCE desktop combining the best of traditional and modern takes on the desktop. Unicorn is fast and elegant, perfectly adapted for your needs.",
    imgSrc: "img/home/image.png",
    buttonText: "Learn more",
    buttonLink: "/unicorn/",
  },
  {
    title: "Perfect for developers",
    description:
      "Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly. ",
    imgSrc: "img/home/developers.webp",
    buttonText: "Read our wiki",
    buttonLink: "https://wiki.rhinolinux.org",
  },
];

function Content() {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24" id="learn">
      {contentData.map((item, index) => (
        <div
          key={index}
          className="md:w-[85%] m-auto lg:grid py-12 lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <h1 className="text-6xl font-bold py-4 text-rhino-purple">
              {item.title}
            </h1>
            <p className="text-white text-2xl py-4">{item.description}</p>

            {/* Only display the button for the first two items */}
            {item.buttonText && item.buttonLink && index < 2 && (
              <a
                href={item.buttonLink}
                className="inline-flex justify-center items-center py-3 px-5 text-base text-center rounded-lg bg-rhino-purple hover:scale-105 text-white transition-all text-lg"
              >
                {item.buttonText}
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            )}
          </div>
          <div className="py-8 lg:py-0">
            <img
              src={item.imgSrc}
              className="w-full rounded-lg"
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
