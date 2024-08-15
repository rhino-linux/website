import React from "react";
import Link from "next/link";

function Hero() {
    return (
        <div className="lg:w-[90%] w-full m-auto">
            <div className="text-center">
                <h1 className="lg:text-6xl text-4xl text-rhino-purple font-bold pt-4 p-2">
                   Rhino Linux
                </h1>
                <h2 className="text-white font-lighter lg:text-3xl text-2xl p-2">
                    The rolling release, Ubuntu-based distribution made <span className="text-rhino-purple"><i>by developers, for developers.</i></span>
                </h2>
            </div>
            <img src="/img/home/image.png" className=" lg:w-[65%] hover:scale-[102%] transition-all w-[95%] h-full pt-0 mx-auto rounded-lg" />
            <div className="flex flex-wrap justify-center mt-4 w-[70%] mx-auto pb-8">
        <Link href="#learn" className="m-2 hover:scale-110 transition-all">
            <span className="rounded-lg p-2 bg-rhino-purple text-white text-2xl text-center block">
                Learn More
            </span>
        </Link>
        <Link href="/download/" className="m-2 hover:scale-110 transition-all">
            <span className="rounded-lg p-2 bg-rhino-purple text-white text-2xl text-center block">
                Download
            </span>
        </Link>
    </div>
</div>
    );
}

export default Hero;
