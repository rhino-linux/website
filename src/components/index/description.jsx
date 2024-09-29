import React from "react";

function Description() {
  return (
    <div className="w-full px-8 pt-4 mt-4 md:px-16 lg:px-24" id="learn">
        <h1 className="md:text-center text-3xl font-bold pb-4 px-2 text-rhino-purple">
          Why Rhino Linux?
        </h1>
        <div className="md:w-[85%] m-auto lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-white text-xl p-2">Rhino Linux re-invents the Ubuntu experience as a rolling-release distribution built on a stable desktop environment. Diverging from Ubuntu-based tradition, Rhino Linux is not derived from any LTS or interim releases, but instead uses Ubuntu&apos;s <code>devel</code> branch to provide a rolling experience.</p>
          </div>
          <div>
            <p className="text-white text-xl p-2">Pacstall is the AUR for Ubuntu, and assists in providing the most up-to-date software, even those unavailable in the standard repositories. It is at the very heart of the distribution, providing essential packages such as the Linux kernel, web browsers, our customized Unicorn Desktop, and other Rhino Linux utilities. </p>
          </div>
        </div>
    </div>
  );
}

export default Description;

<div class="container w-[95vw] lg:w-[60vw] mt-4 rounded-[0.65em] p-4 m-auto shadow-2xl bg-site-300" id="why">
        <h1 class="text-center text-3xl text-off-white">Why Rhino Linux?</h1>
        <div class=" container m-auto lg:grid lg:grid-cols-2">
            <div class="bg-site-200 mt-4 rounded-[0.65em] text-off-white p-4 shadow-2xl lg:ml-2">
                <p>
                    Rhino Linux re-invents the Ubuntu experience as a rolling-release distribution built on a stable desktop environment. Pacstall is at the very heart of the distribution, providing essential packages such as the Linux kernel, Firefox, and distinctive Rhino Linux applications and theming.
                </p>
            </div>
        </div>
    </div>
