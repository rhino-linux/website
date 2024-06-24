import React from "react";

const data = [
    {
        title: "Perfect for developers",
        paragraphs: [
            "Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly.",

            "Developers will fall in love with our vast software repositories which are always up-to-date. User-repositories such as Pacstall can help provide development libraries that are critical for your project. With codium preinstalled on your system you can begin doing what you do best, instantly."
        ],
        image: "/img/home/developers.webp",
        link: {
            text: "Learn more about how Rhino Linux can help you develop →",
            url: "/developers/"
        }
    }
]

function Developers() {
    return (
        <div className="lg:w-[75%] w-[95%] pt-4 m-auto">
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

export default Developers;