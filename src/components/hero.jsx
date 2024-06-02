import React from "react";
import Link from "next/link";

function Hero() {
    return (
        <div className="lg:w-[90%] w-full m-auto">
            <div className="text-center">
                <h1 className="lg:text-8xl text-6xl text-rhino-purple font-bold pt-4 p-2">
                   Rhino.
                </h1>
                <h2 className="text-white font-lighter lg:text-4xl text-3xl p-2">
                    The rolling release, Ubuntu-based distribution made <span className="text-rhino-purple"><i>by developers, for developers.</i></span>
                </h2>
            </div>
            <img src="/img/home/image.png" className=" lg:w-[85%] w-[95%] pt-4 mx-auto rounded-[0.65em]" />
            <div className="flex flex-wrap justify-center mt-4 w-[70%] mx-auto pb-8">
    <Link href="#learn" className="m-2 hover:scale-110 transition-all">
        <span className="rounded-[0.65em] p-4 bg-rhino-purple text-white text-2xl sm:text-3xl text-center block">
            Learn More
        </span>
    </Link>
    <Link href="/download/" className="m-2 hover:scale-110 transition-all">
        <span className="rounded-[0.65em] p-4 bg-rhino-purple text-white text-2xl sm:text-3xl text-center block">
            Download
        </span>
    </Link>
</div>


        </div>
    );
}

export default Hero;
