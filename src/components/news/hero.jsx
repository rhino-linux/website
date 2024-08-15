import React from "react";

function Hero() {
    return(
        <div className="lg:w-[90%] w-full m-auto">
            <div className="text-center">
                <h1 className="lg:text-6xl text-4xl text-rhino-purple font-bold pt-4 p-2">
                   News Feed
                </h1>
                <h2 className="text-white font-lighter lg:text-3xl text-2xl p-2">
                    Find news relating to Rhino Linux & its development
                </h2>
            </div>
        </div>
    )
}

export default Hero;