import React from "react";
import footeritems from "../items/items"

const data = [
    {
        link: "Mission statement",
        goto: "/mission/"
    },
    {
        link: "Team",
        goto: "/team/"
    },
    {
        link: "Open Source",
        goto: "https://github.com/rhino-linux"
    },
    {
        link: "Branding",
        goto: "/brand/"
    }
]


function GetYear() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <div className="w-full bg-indigo-950 lg:p-8 p-4">
            <div className="text-center flex flex-wrap justify-center">
                <p className="text-white text-xl">&copy; {GetYear()} Rhino Linux</p>
            </div>
            <span className="">
                <div className="flex flex-wrap justify-center">
                    {data.map((item) => (
                        <p className="text-white text-xl p-4 pb-0 hover:text-rhino-purple transition-all underline" key={item.link}>
                            <a href={item.goto}>{item.link}</a>
                        </p>
                    ))}
                </div>
            </span>
        </div>
    )
}

export default Footer;