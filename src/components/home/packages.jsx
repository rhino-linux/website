import React from "react";

const data = [
    {
        title: "Control your packages",
        paragraphs: [
            "Our flagship package management wrapper, rhino-pkg, makes life easy by allowing for you to install, remove and update applications across all package managers and repositories. With easy to understand syntax, and our handy guide, you will have all of your favourite apps in seconds.",

            "Our flagship package management wrapper, rhino-pkg, makes life easy by allows for you to install, remove and update applications across all package managers and repositories. With easy to understand syntax, and our handy guide, you will have all of your favourite apps in seconds.", // Add paragraph about Pacstall here
        ],
        image: "/img/home/rhino-pkg.webp",
        link: {
            text: "Learn more about Pacstall →",
            url: "https://pacstall.dev"
        },
    }
]

function Packages() {
    return (
        <div className="lg:w-[75%] w-[95%] pt-4 m-auto pb-4">
            {data.map((post, index) => (
                <div key={index} className="lg:grid lg:grid-cols-2 m-auto gap-8">
                    <div>
                        <h1 className="text-5xl text-white pt-4 text-center">{post.title}</h1>
                        {post.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-white text-xl py-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div>
                        <img src={post.image} alt="Image" className="w-full" />
                    </div>
                </div>
            ))}
            <h1 className="text-center text-xl text-rhino-purple underline py-4">
                <a href={data[0].link.url}>{data[0].link.text}</a>
            </h1>
        </div>
    );
}

export default Packages;