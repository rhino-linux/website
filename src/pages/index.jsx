import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/home/hero";
import Latest from "../components/home/latest";
import Developers from "../components/home/developers";
import Desktop from "../components/home/desktop";
import Packages from "../components/home/packages";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Latest />
      <Developers />
      <Desktop />
      <Packages />
      <Footer />
    </main>
  );
}
