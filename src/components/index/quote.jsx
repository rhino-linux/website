import React from 'react';

const quoteText = [
    {
        quote: "Rhino Linux's latest release makes it the Swiss Army knife of Linux distributions.",
        author: "Jack Wallen",
        link: "https://www.zdnet.com/article/rhino-linux-latest-release-makes-it-the-swiss-army-knife-of-linux-distributions/",
        source: "ZDNET"
    },
];

function Quote() {
    return (
        <div className="md:w-[85%] m-auto grid grid-cols-1 gap-4">
            {quoteText.map((item, index) => (
                <blockquote key={index} className="text-xl text-white text-center m-auto px-8 py-4">
                    <p className="italic">&quot;{item.quote}&quot;</p>
                    <p className="text-white">- {item.author}, <a href={item.link} target="_blank" className="text-rhino-purple hover:brightness-50 transition-all">{item.source}</a></p>
                </blockquote>
            ))}
        </div>
    );
}

export default Quote;