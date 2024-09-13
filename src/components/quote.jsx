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
        <div className="md:w-[85%] m-auto md:grid md:grid-cols-1 md:gap-4">
            {quoteText.map((item, index) => (
                <blockquote key={index} className="text-2xl text-white text-center w-full p-8 md:p-16 lg:p-24">
                    <p className="italic">"{item.quote}"</p>
                    <p className="text-white">- {item.author}, <a href={item.link} className="text-rhino-purple">{item.source}</a></p>
                </blockquote>
            ))}
        </div>
    );
}

export default Quote;