import React from "react";
import Link from "next/link";

const footerItemsA = [
    { name: 'Mission Statement', href: '/statement/' },
    { name: 'Code of Conduct', href: '/code/'},
];

const footerItemsB = [
    { name: 'Branding', href: 'https://wiki.rhinolinux.org/dev/brand' },
    { name: 'Donate', href: 'https://opencollective.com/rhino-linux-and-pacstall' },
];

function Footer() {
    return(
        <footer className="p-6">
            <hr className="md:w-[85%] h-1 mx-auto my-4 bg-site-300 border-0 rounded" />
            <div className="sm:w-[85%] m-auto sm:flex items-center justify-center">
                <div className="flex items-center justify-center pt-2 footer-fix">
                    <Link href="https://github.com/rhino-linux" target="_blank" rel="noreferrer" className="my-auto fill-off-white/80 hover:fill-rhino-purple transition-all mx-4">
                        <svg width="30" height="30" viewBox="3 3 18 18">
                        <title>GitHub</title>
                            <path
                                d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z">
                            </path>
                        </svg>
                    </Link>
                    <Link href="https://discord.gg/reSvc8Ztk3" target="_blank" rel="noreferrer" className="my-auto fill-off-white/80 hover:fill-rhino-purple transition-all mx-4">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 30.67 23.25">
                        <title>Discord</title>
                            <path
                                d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z">
                            </path>
                        </svg>
                    </Link>
                </div>
                <p className="mt-2 sm:my-2 text-center sm:text-left text-off-white/80 text-md sm:text-lg">
                    {footerItemsA.map((item, index) => (
                    <span key={index}>
                        <Link href={item.href} className="inline-flex hover:text-rhino-purple transition-all mx-4 my-1">
                            {item.name}
                        </Link>
                        <br className="hidden footer-fix-br" />
                    </span>
                    ))}
                </p>
                <p className="mb-2 sm:my-2 text-center sm:text-right text-off-white/80 text-md sm:text-lg">
                    {footerItemsB.map((item, index) => (
                    <span key={index}>
                        <Link href={item.href} className="inline-flex hover:text-rhino-purple transition-all mx-4 my-1">
                            {item.name}
                        </Link>
                        <br className="hidden footer-fix-br" />
                    </span>
                    ))}
                </p> 
            </div>
        </footer>
    );
}

export default Footer;
