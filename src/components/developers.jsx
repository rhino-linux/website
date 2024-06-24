import React from "react";

// Text needs to be updated for the second paragraph.

function Developers() {
    return (
        <div className="lg:w-[75%] w-[95%] pt-4 m-auto">
            <div className="lg:grid lg:grid-cols-2 m-auto gap-8">
            <div>
                    <h1 className="text-5xl text-white pt-4 text-center">Perfect for developers</h1>
                    <p className="text-white text-xl py-4">
                        Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly.
                    </p>
                    <p className="text-white text-xl py-4">
                        Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly.
                    </p>
            </div>
            <div>
                <img
                    src="/img/home/developers.webp"
                    alt="Image"
                    className="w-full"
                />
            </div>
        </div>
        <h1 className="text-center text-xl text-rhino-purple underline py-4"><a href="/developers/">Learn more about how Rhino Linux can help you develop →</a></h1>
        </div>
    );
}

export default Developers;