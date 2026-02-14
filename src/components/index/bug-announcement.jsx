import React from "react";
import Link from "next/link";

export default function BugAnnouncement() {
  return (
    <div className="flex bg-site-400 text-center justify-center text-md mt-8">
      <div
        className="w-[80vw] md:w-max bg-site-300 items-center justify-center text-indigo-100 leading-none rounded-[1.5em] pt-2 px-4"
        role="alert"
      >
        <p className="inline-flex flex rounded-full bg-rose-500 uppercase px-2 py-1 text-xs font-bold mx-2 mt-2">
          Bug
        </p>
        <p className="inline-flex font-semibold mr-2 mt-2 text-center p-2">
          Important Pacstall update
        </p>
        <div className="inline-flex my-2 md:mt-0">
          <p className="text-off-white">
            <Link
              href="https://blog.rhinolinux.org/news-25"
              className="inline-flex leading-8 py-2 mx-2 text-center text-white hover:scale-105 hover:text-rhino-purple transition-all text-md"
            >
              Information →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
