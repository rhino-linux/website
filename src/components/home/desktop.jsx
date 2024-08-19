import React from "react";

const data = [
    {
        title: "Adaptive, to any workflow.",
        description: "Whether you prefer the traditional floating windows, or are a fanatic of tiling window managers, Unicorn is perfect for you. With optional auto-tiling you can easily toggle between floating and tiling at the press of a button.",
        image: "../img/home/unicorn/tiling.webp"
    },
    {
        title: "A brand new dashboard.",
        description: "You can switch between virtual desktops with ease. We have loaded in Xfdashboard, with many minor tweaks and improvements. Xfdashboard brings a gnome-shell like virtual desktop and èxpose built right into XFCE.",
        image: "../img/home/unicorn/xfdashboard.webp"
    },

]

function Desktop() {
    return (
      <div className="w-full bg-site-300 lg:p-8 p-4">
        <h1 className="text-white text-5xl text-center">Enjoy an adaptive desktop.</h1>
        <p className="lg:w-[70%] m-auto text-white text-xl pb-4 text-center pt-4">Rhino Linux comes preinstalled with its own in-house desktop experience, Unicorn, a custom built XFCE desktop experience combining the best of the traditional and modern takes on the Desktop.</p>
        <div className="lg:w-[75%] m-auto w-[95%] lg:grid lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div key={index} className="">
              <img src={item.image ? item.image : "https://via.placeholder.com/150.png"} alt={item.title} className="w-full h-auto object-cover rounded-lg" />
              <h1 className="text-white text-2xl mt-4">{item.title}</h1>
              <p className="text-white mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-xl text-rhino-purple underline py-4 pt-8"><a href="/unicorn/">Learn more about the Unicorn Desktop →</a></h1>
      </div>
    );
}

export default Desktop;