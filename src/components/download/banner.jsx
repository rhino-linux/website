import React from "react";

function Banner() {
    return (
        <div className="rounded-lg m-auto w-full p-2 bg-rhino-purple text-white text-center mt-0 mb-4">
            <p className="md:mb-0 mb-4">For an archive of previous releases, please visit our <a href="https://sourceforge.net/projects/rhino-linux-builder/files/" className="underline">SourceForge</a>.</p>
            <p>Looking for our docker images? <a href="https://rhinolinux.org/wiki-docker.html" className="underline">Click here</a>.</p>
        </div>
    )
}

export default Banner;