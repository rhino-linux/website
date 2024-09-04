import React from "react";
import Link from "next/link";

let state = 0;

function toggleMegaMenu(menuid) {
    const menu = document.getElementById(menuid);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        state = 1;
    } else {
        menu.classList.remove('block');
        menu.classList.add('hidden');
        state = 0;
    }
}

const baritems = [
    {
        link: "../",
        goto: "Home"
    },
    {
        link: "/download/",
        goto: "Download"
    },
    {
        link: "/news/",
        goto: "News"
    },
    {
        link: "https://wiki.rhinolinux.org",
        goto: "Wiki"
    },
    {
        link: "/community/",
        goto: "Community"
    }
]

function NavBar() {
    return (
        <div>
            <nav className=" w-[100%] m-auto flex items-center justify-between">
                <div className="px-2">
                    <a href="../">
                        <img src="/img/logo.png" alt="" className="lg:w-[4%] md:w-[10%] w-[20%]" />
                    </a>
                </div>
                <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleMegaMenu('mega-menu')}
                >
                    <h1 className="text-3xl text-white">≡</h1>
                </div>
            </nav>
            <div className=" hidden transition-all w-[100%] p-2" id="mega-menu">
                <div className="w-[100%] m-auto">
                    <div className="text-2xl bg-site-300 rounded-lg p-8">
                        {baritems.map((item) => (
                            <li className="list-none p-4" key={item.link}>
                                <Link href={item.link}>
                                    <span className="text-white" onClick={(e) => e.stopPropagation()}>{item.goto}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
