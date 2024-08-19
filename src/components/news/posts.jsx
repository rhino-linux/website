import React from 'react';
import posts from '../../items/posts';

function Posts() {
    return (
        <div className="w-full p-4 m-auto">
            <div className="p-4 md:w-[65%] m-auto bg-site-300 rounded-lg">
            {posts.map((post, index) => {
                return (
                    <div key={index} className="p-4" id={post.date}>
                        <h1 className="text-5xl my-2 text-center text-white">
                            {post.title}
                        </h1>
                        {post.banner && <img src={post.banner} alt="Post Banner" className="w-full" />}
                        <p className="text-white my-2 text-sm">
                            Posted: {post.date}
                        </p>
                        {post.content.map((paragraph, index) => {
                            return (
                                <p key={index} className="text-white my-2 text-lg">
                                    {paragraph}
                                </p>
                            );
                        })}
                        <button
                            onClick={() => {
                                const postLink = window.location.href + `#${post.date}`;
                                navigator.clipboard.writeText(postLink);
                                alert('Post link copied to clipboard!');
                            }}
                            className="bg-rhino-purple hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                        >
                            Copy post link
                        </button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Posts;