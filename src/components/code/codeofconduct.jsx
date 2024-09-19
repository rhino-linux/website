import React from "react";
import CoC from "./code";

function CodeOfConduct() {
    return(
        <div className="md:w-[85%] w-full mx-auto md:p-0 p-4 mt-4">
            <h1 className="text-6xl font-bold py-4 text-rhino-purple text-center">Contributor Code of Conduct</h1>
            {CoC.map((item, index) => (
                <div key={index} className="text-white text-2xl py-4">
                    <h2 className="text-4xl text-white py-4">{item.heading}</h2>
                    {item.content.map((paragraph, i) => (
                        <p className="text-white text-2xl py-2" key={i}>{paragraph}</p>
                    ))}
                </div>
            ))}
            <p className="text-white text-2xl py-4">Sincerely, <br /> The Rhino Linux team.</p>
        </div>
    )
}

export default CodeOfConduct;
