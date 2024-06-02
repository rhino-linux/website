import React from "react";
import posts from "../items/posts";

function Latest() {
    const latestPost = posts && posts.length > 0 ? posts[0] : null;
    const latestPostTitle = latestPost ? latestPost.title : "No posts available";
    const latestPostContent = latestPost && latestPost.content.length > 0 ? latestPost.content[0] : "No content available";

    return (
        <div className="w-full bg-indigo-950 text-center p-8">
            <div className="lg:w-[80%] mx-auto">
                <h1 className="text-7xl text-white py-4">
                    Latest news
                </h1>
                <h2 className="text-5xl text-white py-4">{latestPostTitle}</h2>
                <p className="text-2xl text-white py-4">{latestPostContent}</p>
                <p className="text-2xl py-4">
                    <a href="/news/" className="text-rhino-purple underline">
                        Read the announcement →
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Latest;
