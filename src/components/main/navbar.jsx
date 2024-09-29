import React from "react";
import Link from "next/link";
import Image from 'next/image';

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
        link: "/",
        goto: "Home"
    },
    {
        link: "/download",
        goto: "Download"
    },
    {
        link: "/unicorn",
        goto: "Unicorn"
    },
    {
        link: "https://blog.rhinolinux.org",
        goto: "Blog"
    },
    {
        link: "https://wiki.rhinolinux.org",
        goto: "Wiki"
    },
    {
        link: "https://pacstall.dev/packages",
        goto: "Packages"
    }
]

function NavBar() {
    return (
        <div>
            <nav className="w-full m-auto flex items-center md:justify-center justify-between">
                <Link href="/" className="md:hidden m-4">
                    <Image src="/img/logo.png" alt="" width="50" height="50" className="m-2 mt-4 hover:brightness-50 hover:opacity-80 transition-all" />
                </Link>
                <div className="p-2 px-4 text-center m-4 bg-site-300/30 backdrop-blur shadow-black/40 shadow-lg text-xl bg-opacity-35 rounded-[0.65em] md:flex lg:gap-8 md:gap-8 hidden md:block">
                    <Link href="/" className="my-auto hover:scale-110 hover:brightness-50 hover:opacity-80 transition-all">
                        <Image src="/img/logo.png" alt="" width="50" height="50" />
                    </Link>
                    {baritems.map((item) => (
                        <p key={item.link} className="my-auto hover:scale-105 transition-all"><Link href={item.link} className="text-xl text-white hover:text-rhino-purple transition-all">{item.goto}</Link></p>
                    ))}
                </div>
                <div
                    className="p-4 mb-1 mr-1 text-burger cursor-pointer md:hidden"
                    onClick={() => toggleMegaMenu('mega-menu')}
                >
                    <h1 className="hover:text-rhino-purple transition-all text-white">☰</h1>
                </div>
            </nav>
            <div className="hidden transition-all w-full p-2" id="mega-menu">
                <div className="w-full m-auto">
                    <div className="md:hidden bg-site-300/30 backdrop-blur shadow-black/40 shadow-lg text-2xl bg-opacity-35 rounded-[0.65em] p-2 m-4">
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
