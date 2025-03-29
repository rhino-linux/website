import React from "react";

function Banner() {
    return (
        <div className="rounded-lg p-2 bg-site-300 text-white text-center mt-0 mx-2">
            <p className="mb-2 text-lg text-black dark:text-white">For an archive of previous releases, please visit our <a href="https://sourceforge.net/projects/rhino-linux-builder/files/" className="text-rhino-purple underline">SourceForge</a></p>
            <p className="text-black dark:text-white"><i>Looking for our docker images? <a href="https://wiki.rhinolinux.org/dev/docker/rhino-docker" className="text-rhino-purple underline">Click here</a></i></p>
        </div>
    )
}

export default Banner;