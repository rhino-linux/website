import React from "react";
import posts from "../items/posts";

function Latest() {
    const latestPost = posts && posts.length > 0 ? posts[0] : null;
    const latestPostTitle = latestPost ? latestPost.title : "No posts available";
    const latestPostContent = latestPost && latestPost.content.length > 0 ? latestPost.content[0] : "No content available";

    return (
        <div className="w-full bg-indigo-950 text-center lg:p-8">
            <div className="lg:w-[80%] w-[95%] mx-auto">
                <h1 className="text-5xl text-white py-4">
                    Latest news
                </h1>
                <h2 className="text-3xl text-white py-2 font-bold">{latestPostTitle}</h2>
                <p className="text-xl text-white">{latestPostContent}</p>
                <p className="text-xl py-4">
                    <a href="/news/" className="text-rhino-purple underline">
                        Read the announcement →
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Latest;
