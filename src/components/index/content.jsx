import React from "react";
import Image from 'next/image';
import Link from 'next/link';

// Array holding the data for each section
const contentData = [
  {
    title: "Discover Unicorn",
    description:
      "Rhino Linux comes preinstalled with its own in-house desktop experience, Unicorn, a custom-built XFCE desktop combining the best of traditional and modern takes on the desktop. Unicorn is fast and elegant, perfectly adapted for your needs.",
    imgSrc: "/img/home/ulauncher-b.png",
    buttonText: "Learn more",
    buttonLink: "/unicorn/",
  },
  {
    title: "Perfect for developers",
    description:
      "Developers will fall in love with our vast software repositories which are always up-to-date. User repositories such as Pacstall can help provide development libraries that are critical for your project. With Codium preinstalled on your system you can begin doing what you do best, instantly. ",
    imgSrc: "/img/home/developers.png",
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
          className="md:w-[85%] m-auto lg:grid sm:py-8 lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <h1 className="text-3xl font-bold py-2 text-rhino-purple">
              {item.title}
            </h1>
            <p className="text-white text-xl py-2">{item.description}</p>

            {/* Only display the button for the first two items */}
            {item.buttonText && item.buttonLink && index < 2 && (
              <Link
                href={item.buttonLink}
                className="inline-flex justify-center items-center py-2 px-4 mt-2 text-base text-center rounded-[0.65em] bg-rhino-purple hover:scale-105 hover:bg-opacity-50 hover:bg-blur-xl text-white transition-all text-xl"
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
              </Link>
            )}
          </div>
          <div className="py-8 lg:py-0">
            <Image
              src={item.imgSrc}
              className="w-full rounded-lg"
              width="1920"
              height="1080"
              alt={item.title}
              unoptimized
              quality={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
