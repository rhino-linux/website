import React from "react";
import Link from "next/link";
import Hero from "../components/index/hero";
import Description from "../components/index/description";
import Content from "../components/index/content";
import Ecosystem from "../components/index/ecosystem";
import Quote from "../components/index/quote";
import Announcement from "../components/index/announcement";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ImageGallery from "../components/index/ImageGallery"; // it has title, thumbnails, scalingfactor (size), images, and autoslide props

const images = [
  { src: "/img/home/developers.png", alt: "Image 1", caption: "Developers" },
  { src: "/img/home/ulauncher-a.png", alt: "Image 2", caption: "ULauncher A" },
  { src: "/img/home/ulauncher-b.png", alt: "Image 3", caption: "ULauncher B" },
  { src: "/img/unicorn/tiling.png", alt: "Image 4", caption: "Tiling" },
  { src: "/img/unicorn/appgrid.png", alt: "Image 5", caption: "App Grid" },
];

export default function Home() {
  return (
    <main>
      <SiteData
        title="Homepage"
        description="An Ubuntu-based, rolling release distribution, with Pacstall & XFCE at its core."
      />
      <Hero />
      <Announcement />
      <Description />
      <ImageGallery images={images} scalingFactor={3.75} /> 
      <Ecosystem />
      <Quote />
      <Content />
      <Footer />
    </main>
  );
}
