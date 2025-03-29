import React from 'react';
import Image from 'next/image';

function Banner({ title, imageSrc, description, onBackClick }) {
  return (
    <div className="md:w-[85%] py-12 text-off-white m-auto text-center">
      <h1 className="text-2xl font-bold text-rhino-purple">{title}</h1>
      <div className="md:grid md:grid-cols-2 text-center md:p-8 ecosystem-text">
        <div>
          <Image src={imageSrc} alt={title} width="900" height="900" unoptimized quality={100} className="w-[90%] md:w-[80%] m-auto my-8 md:my-0" />
        </div>
        <div>
          <p className="text-left text-lg text-black dark:text-white">{description}</p>
          {onBackClick && (
            <p className="text-xl mt-4 hover:cursor-pointer hover:text-rhino-purple transition-all text-left text-black dark:text-white" onClick={onBackClick}>
              ⟵ Go back
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
