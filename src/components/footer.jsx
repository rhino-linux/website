import React from "react";

const footerItems = [
    { name: 'Source Code', href: 'https://github.com/rhino-linux' },
    { name: 'Community', href: 'https://discord.com/invite/reSvc8Ztk3' },
    { name: 'Donate', href: 'https://ko-fi.com/rhinolinux' },
    { name: 'Branding', href: 'https://wiki.rhinolinux.org/dev/brand' },
    { name: 'Unicorn', href: 'https://wiki.rhinolinux.org/user/unicorn' },
];

const organisationalItems = [
    { name: 'Mission Statement', href: '/statement/' },
    { name: 'Code of Conduct', href: '/code/'}
]

function Footer() {
    return(
        <footer className="p-8">
            <hr className="md:w-[85%] h-1 mx-auto my-4 bg-site-300 border-0 rounded" />
            <p className="mb-4 text-center text-off-white text-2xl">
                {footerItems.map((item, index) => (
                <span key={index}>
                    <a href={item.href} className="text-rhino-purple">
                        {item.name}
                    </a>
                    {index < footerItems.length - 1 && ' | '}
                </span>
                ))}
            </p>
            <p className="mb-4 text-center text-off-white text-2xl">
                {organisationalItems.map((item, index) => (
                    <span key={index}>
                        <a href={item.href} className="text-rhino-purple">
                            {item.name}
                        </a>
                        {index < organisationalItems.length - 1 && ' | '}
                    </span>
                ))}
            </p>
        </footer>
    );
}

export default Footer;