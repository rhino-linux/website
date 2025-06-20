import React from "react";
import NavBar from '../main/navbar';

function Hero() {
    return(
        <section className="bg-hero-pattern bg-no-repeat bg-center-x bg-center-y bg-cover">
            <div className="bg-overlay w-full h-auto">
            <NavBar />
            <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-medium tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Ubuntu Based, Rolling Release.</h1>
                <p className="mb-8 text-2xl font-normal sm:px-16 xl:px-48 text-white">Rhino Linux is an Ubuntu-based, rolling release distribution, with Pacstall & XFCE at its core.
                </p>
                <div className="mb-8 space-y-4 flex-row justify-center space-x-4">
                    <a href="download" className="inline-flex justify-center items-center py-2 px-4 text-center shadow-lg shadow-black/30 rounded-[0.6em] bg-rhino-purple hover:scale-105 hover:bg-opacity-50 hover:bg-blur-xl text-white transition-all text-2xl">
                        Download
                    </a>  

                    <a href="#learn" className="inline-flex justify-center items-center py-2 px-4 text-center text-white hover:scale-105 hover:text-rhino-purple transition-all text-2xl">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Hero;