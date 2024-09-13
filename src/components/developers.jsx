import React from "react";

function Developers() {
    return(
        <div className="w-full p-8 md:p-16 lg:p-24" id="learn">
            <div className="md:w-[85%] m-auto md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h1 className="text-7xl py-4 font-bold text-center text-rhino-purple">
                        Perfect for developers
                    </h1>
                    <p className="text-white text-2xl py-4">
                        Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly. 
                    </p>
                    <a href="download" className="inline-flex justify-center items-center py-3 px-5 text-base text-center rounded-lg bg-rhino-purple hover:scale-105 text-white transition-all text-lg">
                            Read the wiki
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="py-8 md:py-0">
                    <img src="img/home/developers.webp" className="w-full rounded-lg" alt="Unicorn Desktop with open windows." />
                </div>
            </div>
        </div>
    );
}

export default Developers;