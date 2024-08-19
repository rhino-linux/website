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
        link: "https://docs.rhinolinux.org",
        goto: "Documentation"
    },
    {
        link: "/community/",
        goto: "Community"
    }
]

function NavBar() {
    return (
        <div>
            <nav className="bg-site-300 w-[100%] flex items-center justify-between">
                <div className="px-2">
                    <a href="../">
                        <img src="/img/logo.png" alt="" className="lg:w-[4%] md:w-[10%] w-[20%] rounded-full" />
                    </a>
                </div>
                <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleMegaMenu('mega-menu')}
                >
                    <h1 className="text-3xl text-white">≡</h1>
                </div>
            </nav>
            <div className="bg-site-300 hidden transition-all w-[100%] p-2" id="mega-menu">
                <hr className="bg-off-white mb-4" />
                <div className="w-[100%] m-auto">
                    <div className="text-2xl">
                        {baritems.map((item) => (
                            <li className="list-none p-4" key={item.link}>
                                <Link href={item.link}>
                                    <span className="text-white" onClick={(e) => e.stopPropagation()}>{item.goto}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
                <hr className="bg-off-white mb-2" />
            </div>
        </div>
    );
}

export default NavBar;
