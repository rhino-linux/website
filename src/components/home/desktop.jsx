import React from "react";

const data = [
    {
        title: "Title 1",
        description: "Description 1",
        image: "https://via.placeholder.com/150.png"
    },
    {
        title: "Title 2",
        description: "Description 2",
        image: "https://via.placeholder.com/150.png"
    },
    {
        title: "Title 3",
        description: "Description 3",
        image: "https://via.placeholder.com/150.png"
    }

]

function Desktop() {
    return (
      <div className="w-full bg-indigo-950 lg:p-8 p-4">
        <h1 className="text-white text-5xl text-center">Enjoy an adaptive desktop.</h1>
        <p className="lg:w-[70%] m-auto text-white text-xl pb-4 text-center pt-4">Rhino Linux comes preinstalled with its own in-house desktop experience, Unicorn, a custom built XFCE desktop experience combining the best of the traditional and modern takes on the Desktop.</p>
        <div className="lg:w-[75%] m-auto w-[95%] lg:grid lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="">
              <img src={item.image ? item.image : "https://via.placeholder.com/150.png"} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <h1 className="text-white text-xl font-bold mt-4">{item.title}</h1>
              <p className="text-white mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-xl text-rhino-purple underline py-4 pt-8"><a href="/unicorn/">Learn more about the Unicorn Desktop →</a></h1>
      </div>
    );
}

export default Desktop;