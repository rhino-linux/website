import React from "react";
import NavBar from '../navbar';

function Hero() {
    return(
        <section className="bg-orb-pattern bg-no-repeat bg-center-x bg-center-y bg-cover">
            <div className="bg-overlay w-full h-auto">
            <NavBar />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h3 className="mb-4 text-2xl tracking-tight leading-none text-white font-bold">Beautiful, Elegant, Adaptive.</h3>
                <h1 className="mb-4 text-4xl tracking-tight leading-none text-white font-bold md:text-5xl lg:text-6xl">The Unicorn Desktop.</h1>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white">A desktop experienced designed to be both modern and fast.
                </p>
            </div>
            </div>
        </section>
    );
}

export default Hero;