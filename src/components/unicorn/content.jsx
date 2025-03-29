import React from "react";
import Image from 'next/image';
import Link from 'next/link';

// Array holding the data for each section
const contentData = [
  {
    title: "Adaptive, to any workflow",
    description:
      " Whether you prefer the traditional floating windows, or are a fanatic of tiling window managers, Unicorn is perfect for you. With optional auto-tiling you can easily toggle between floating and tiling at the press of a button.",
    imgSrc: "/img/unicorn/tiling.png",
    buttonText: "Learn the keybinds",
    buttonLink: "https://wiki.rhinolinux.org/user/unicorn",
  },
  {
    title: "A beautiful app grid",
    description:
      "Our application grid, Lightpad, is a simple and powerful application launcher that is Wayland compatible. We have made modifications to the theming of Lightpad to integrate perfectly into Unicorn and Rhino Linux.",
    imgSrc: "/img/unicorn/appgrid.png",
    buttonText: null,
    buttonLink: null,
  },
  {
    title: "Modern desktop management",
    description:
      "You can switch between virtual desktops with ease. We have loaded in Xfdashboard, with many minor tweaks and improvements. Xfdashboard brings a gnome-shell like virtual desktop and exposé built right into XFCE.",
    imgSrc: "/img/unicorn/xfdashboard.png",
    buttonText: null,
    buttonLink: null,
  },
];

function Content() {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24" id="learn">
      {contentData.map((item, index) => (
        <div
          key={index}
          className="md:w-[85%] m-auto lg:grid pt-8 lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <h1 className="text-3xl unicorn font-bold py-2 text-rhino-purple">
              {item.title}
            </h1>
            <p className="text-black dark:text-white text-xl py-4">{item.description}</p>

            {/* Only display the button for the first two items */}
            {item.buttonText && item.buttonLink && index < 2 && (
              <Link
                href={item.buttonLink}
                className="inline-flex justify-center items-center py-2 px-4 mt-2 text-base text-center rounded-[0.65em] bg-rhino-purple hover:scale-105 hover:bg-opacity-50 hover:bg-blur-xl text-white transition-all text-xl"
              >
                {item.buttonText}
                <svg
                  className="ml-2 mr-1 w-5 h-5"
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
          <div className="py-8 lg:py-4">
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
