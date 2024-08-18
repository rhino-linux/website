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

import baritems from "../items/items"

function NavBar() {
    return (
        <div>
            <nav className="bg-indigo-950 w-[100%] flex items-center justify-between p-1">
                <div className="px-2">
                    <a href="../">
                        <img src="/img/logo.png" alt="" className="lg:w-[4%] md:w-[10%] w-[20%] rounded-full" />
                    </a>
                </div>
                <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleMegaMenu('mega-menu')}
                >
                    <h1 className="text-3xl px-2 text-white">≡</h1>
                </div>
            </nav>
            <div className="bg-indigo-950 hidden transition-all w-[100%] p-8" id="mega-menu">
                <hr className="bg-off-white mb-4" />
                <div className="w-[100%] m-auto">
                    <div className="text-2xl">
                        {baritems.map((item) => (
                            <li className="list-none p-2 p-4" key={item.link}>
                                <Link href={item.link}>
                                    <span className="text-white" onClick={(e) => e.stopPropagation()}>{item.goto}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
                <hr className="bg-off-white mb-4" />
            </div>
        </div>
    );
}

export default NavBar;
