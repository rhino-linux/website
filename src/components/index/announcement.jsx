import React from "react";
import Link from "next/link";

export default function Announcement() {
  return (
    <div className="flex bg-site-400 text-center justify-center text-md mt-8">
      <div
        className="w-[80vw] md:w-max bg-site-300 items-center justify-center text-indigo-100 leading-none rounded-[1.5em] pt-2 px-4"
        role="alert"
      >
        <p className="inline-flex flex rounded-full bg-rhino-purple uppercase px-2 py-1 text-xs font-bold mx-2 mt-2">
          New
        </p>
        <p className="inline-flex font-semibold mr-2 mt-2 text-center p-2">
          Rhino Linux 2025.4 out now!
        </p>
        <div className="inline-flex my-2 md:mt-0">
          <p className="text-off-white">
            <Link
              href="https://rhinolinux.org/download"
              className="inline-flex justify-center items-center mr-2 py-2 px-4 text-center rounded-[0.6em] bg-rhino-purple hover:bg-opacity-50 hover:bg-blur-xl hover:scale-105 text-white transition-all text-md"
            >
              Download
            </Link>
            <Link
              href="https://blog.rhinolinux.org/news-24"
              className="inline-flex leading-8 py-2 mx-2 text-center text-white hover:scale-105 hover:text-rhino-purple transition-all text-md"
            >
              Announcement →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
