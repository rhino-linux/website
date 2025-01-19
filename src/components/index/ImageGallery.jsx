import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageGallery = ({ images, scalingFactor = 3.5, title = "Image Gallery", thumbnails = true, autoslide = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fadeDuration = 500; // milliseconds
  const intervalDuration = 7500; // milliseconds
  
  let touchStartX = 0;
  const touchDiffValue = 85;
  const swipeCoolDown = 150; // milliseconds
  let lastSwipeTime = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentTime = Date.now();
    if (currentTime - lastSwipeTime < swipeCoolDown) return;

    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > touchDiffValue) {
      nextImage();
      lastSwipeTime = currentTime;
    } else if (touchDiff < -touchDiffValue) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      );
      lastSwipeTime = currentTime;
    }
  };

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, fadeDuration);
  };

  const setImage = (index) => {
    setCurrentIndex(index);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, fadeDuration);
  };

  const scaledWidth = 256 * scalingFactor;
  const scaledHeight = 144 * scalingFactor;
  const thumbnailWidth = 155 * (scalingFactor / 3.5);
  const thumbnailHeight = 125 * (scalingFactor / 3.5);
  const ringWidth = scalingFactor.toString().split('.')[0] + 'px';

  useEffect(() => {
    let interval;
    if (!isHovered && autoslide) {
      interval = setInterval(() => {
        nextImage();
      }, intervalDuration);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, autoslide]);

  return (
    <div
      className="w-full px-8 md:px-16 lg:px-24 py-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <h1 className={`text-center text-3xl font-bold pb-8 text-rhino-purple ${isHovered ? 'text-white' : ''}`}>
        {title}
      </h1>
      <div className="relative">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center">
            <div className={`relative rounded-xl overflow-hidden shadow-md bg-site-300 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <div 
                className="relative" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  quality={100}
                  width={scaledWidth}
                  height={scaledHeight}
                  className="object-cover rounded-xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}

                />
                
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white">{images[currentIndex].caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-4">
          {thumbnails && images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                width={thumbnailWidth}
                height={thumbnailHeight}
                className={`object-cover rounded-lg ${currentIndex === index ? `ring-[${ringWidth}] ring-unicorn-purple scale-105` : ''}`}
                onClick={() => setImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
