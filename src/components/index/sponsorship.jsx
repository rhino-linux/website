import React from "react";
import Image from "next/image";

const sponsorships = [
    {
        name: "The UBports Foundation",
        logo: "/img/sponsors/ubports.png",
        link: "https://ubports.com/",
    },
];

function Sponsorship() {
    return (
        <div className="md:w-[85%] m-auto grid grid-cols-1 gap-4 pb-4 md:pt-4">
            <h2 className="text-center text-3xl font-bold px-2 text-rhino-purple">Our Sponsors</h2>
            <div className="flex items-center justify-center flex-wrap gap-4">
                {sponsorships.map((sponsor, index) => (
                    <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="p-4">
                        <Image src={sponsor.logo} alt={sponsor.name} width={250} height={250} className="max-w-full h-auto" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sponsorship;