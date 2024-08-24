import React from "react";

function Hero() {
    return(
        <div className="w-full p-4 lg:p-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="flex items-center justify-center">
                    <h1 className="text-6xl text-center">A desktop perfect for the power user.</h1>
                </div>
                <div className="relative overflow-hidden">
                    <img src="/img/home/image.png" className="w-[150%] lg:w-[200%] object-cover lg:object-left rounded-[0.65em] shadow-lg" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
