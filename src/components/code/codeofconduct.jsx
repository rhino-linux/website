import React from "react";
import CoC from "./code";

function CodeOfConduct() {
    return(
        <div className="md:w-[85%] w-full mx-auto md:p-0 p-4 mt-4">
            <h1 className="text-3xl font-bold py-4 text-rhino-purple text-center">Contributor Code of Conduct</h1>
            {CoC.map((item, index) => (
                <div key={index} className="text-black dark:text-white text-xl py-4">
                    <h2 className="text-3xl text-black dark:text-white py-4">{item.heading}</h2>
                    {item.content.map((paragraph, i) => (
                        <p className="text-black dark:text-white text-lg py-2" key={i}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default CodeOfConduct;
