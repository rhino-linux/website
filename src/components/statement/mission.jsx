import React from "react";

const MissionData = [
    "The Rhino Linux organisation is a collection of individuals with the same goal, creating a Linux distribution that intends to parallel Arch Linux.",

    "Just as Pacstall aims to be the AUR for Ubuntu, Rhino Linux aims to be the go-to, Debian-derived counterpart for Arch. A rolling release distribution with community-based package management central to our philosophy. Creation of a single package can take as little as a single file. These packages are often built in real time, right on the system before installation, giving the user immense levels of control of their own system; similarly, user choice will always be at the forefront of decision making. ",
    
    "Rhino Linux is usable and mutable, and while we have defaults, we provide efficient ways to shape the distribution to tailor your needs. In addition to ease of management for the systems using our distribution, Rhino Linux and Pacstall aim to make it incredibly simple to package for multiple targets, and even test on them in containers."
]

function Mission() {
    return(
        <div className="md:w-[85%] w-full mx-auto md:p-0 p-4 mt-4">
            <h1 className="text-3xl font-bold py-4 text-rhino-purple text-center">Our Mission</h1>
            <h2 className="text-2xl py-4 text-white text-center">Creating the go-to, Debian-derived counterpart for Arch</h2>
            {MissionData.map((item, index) => (
                <p className="text-white text-xl py-4" key={index}>{item}</p>
            ))}
        </div>
    )
}

export default Mission;