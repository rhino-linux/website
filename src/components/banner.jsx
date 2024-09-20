import React from 'react';

function Banner({ title, imageSrc, description, onBackClick }) {
  return (
    <div className="md:w-[85%] py-12 text-off-white m-auto text-center animate-slide-in">
      <h1 className="text-6xl font-bold text-rhino-purple">{title}</h1>
      <div className="md:grid md:grid-cols-2 m-auto text-center md:p-8">
        <div>
          <img src={imageSrc} alt={title} className="w-full md:w-[60%] m-auto my-8 md:my-0" />
        </div>
        <div>
          <p className="text-left text-2xl text-white">{description}</p>
          {onBackClick && (
            <p className="underline hover:cursor-pointer text-left" onClick={onBackClick}>
              ⟵ Go back
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
